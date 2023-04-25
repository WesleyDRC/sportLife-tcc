import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICartRepository } from "../../../repositories/ICartRepository";

import { CartItems } from "../entities/CartItem";
import { Cart } from "../entities/Cart";
import { Product } from "../../../../products/infra/typeorm/entities/Product";
import { User } from "../../../../auth/infra/typeorm/entities/User";

import { ICartItemDTO } from "../../../dtos/ICartItemDTO";
import AppError from "../../../../../shared/errors/AppError";

import { injectable, inject } from "tsyringe";
import { IProductRepository } from "../../../../products/repositories/IProductRepository";

import cartConstants from "../../../contants/cartConstants";

@injectable()
export class CartRepository implements ICartRepository {
  private ormRepositoryCart: Repository<Cart>;

  private ormRepositoryCartItems: Repository<CartItems>;

  private ormRepositoryProduct: Repository<Product>;

  private ormRepositoryUser: Repository<User>;

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {
    this.ormRepositoryCart = AppDataSource.getRepository(Cart);

    this.ormRepositoryCartItems = AppDataSource.getRepository(CartItems);

    this.ormRepositoryProduct = AppDataSource.getRepository(Product);

    this.ormRepositoryUser = AppDataSource.getRepository(User);
  }

  public async getCart(userId: string): Promise<any> {
    let user = await this.ormRepositoryUser.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError(`User with ID ${userId} not found`, 404);
    }

    let cart = await this.ormRepositoryCart
      .createQueryBuilder("cart")
      .leftJoinAndSelect("cart.items", "items")
      .where({ user_id: userId })
      .getMany();

    if (cart.length === 0) {
      cart[0] = new Cart();
      cart[0].user_id = userId;
      await this.ormRepositoryCart.save(cart);
    }

    const cartItems = await this.ormRepositoryCartItems
      .createQueryBuilder("cart_items")
      .leftJoinAndSelect("cart_items.product", "product")
      .where({ cart_id: cart[0].id })
      .getMany();

    const data = [];

    cartItems.forEach((item) => {
      data.push({
        id: item.product.id,
        imageMain: item.product.imageMain,
        name: item.product.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      });
      return data;
    });

    const cartUser = [
      {
        id: cart[0].id,
        totalItems: cart[0].totalItems,
        totalAmount: cart[0].totalAmount,
        items: data,
      },
    ];

    return cartUser;
  }

  public async addProductToCart(userId: string, cartItemDTO: ICartItemDTO) {
    let user = await this.ormRepositoryUser.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError(`User with ID ${userId} not found`, 404);
    }

    let cart = await this.ormRepositoryCart.findOne({
      where: { user_id: userId },
      relations: ["items"],
    });

    if (!cart) {
      cart = new Cart();
      cart.user_id = userId;
      await this.ormRepositoryCart.save(cart);
    }

    const product = await this.ormRepositoryProduct.findOne({
      where: { id: cartItemDTO.productId },
    });

    if (!product) {
      throw new AppError(
        `Product with ID ${cartItemDTO.productId} not found`,
        404
      );
    }

    let cartItem = await this.ormRepositoryCartItems.findOne({
      where: {
        product_id: product.id,
      },
    });

    const productData = await this.productRepository.findById(product.id);

    if (productData.inventory.quantity < cartItemDTO.quantity) {
      throw new AppError(cartConstants.ERROR_PRODUCT_QUANTITY, 404);
    }

    if (!cartItem || (cartItem && cartItem.size !== cartItemDTO.size)) {
      cartItem = new CartItems();
      cartItem.price = product.price;
      cartItem.quantity = cartItemDTO.quantity;
      cartItem.size = cartItemDTO.size;
      cartItem.cart = cart;
      cartItem.product = product;
      cartItem.cart_id = cart.id;
      await this.ormRepositoryCartItems.save(cartItem);
    } else {
      let quantityProductInCart = cartItem.quantity;
      if (
        (quantityProductInCart += cartItemDTO.quantity) >
        productData.inventory.quantity
      ) {
        throw new AppError(cartConstants.ERROR_PRODUCT_QUANTITY, 404);
      } else {
        cartItem.quantity += cartItemDTO.quantity;
        await this.ormRepositoryCartItems.save(cartItem);
      }
    }

    cart = await this.ormRepositoryCart.findOne({
      where: { id: cart.id },
      relations: ["items"],
    });

    cart.totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    cart.totalAmount = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await this.ormRepositoryCart.save(cart);

    cart = await this.ormRepositoryCart.findOne({
      where: { id: cart.id },
      relations: ["items"],
    });

    return cart;
  }

  public async deleteProductCart(userId: string, productId: string) {
    let user = await this.ormRepositoryUser.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError(`User with ID ${userId} not found`, 404);
    }

    let cart = await this.ormRepositoryCart.findOne({
      where: { user_id: userId },
      relations: ["items"],
    });

    if (!cart) {
      cart = new Cart();
      cart.user_id = userId;
      await this.ormRepositoryCart.save(cart);
    }

    cart = await this.ormRepositoryCart.findOne({
      where: { id: cart.id },
      relations: ["items"],
    });

    const productInCart = cart.items.find((item) => {
      return item.product_id === productId;
    });

    if (!productInCart) {
      throw new AppError(
        `Product with ID ${productId} not found in this cart`,
        404
      );
    }

    let cartItem = await this.ormRepositoryCartItems.findOne({
      where: {
        product_id: productId,
      },
    });

    if (cartItem) {
      await this.ormRepositoryCartItems.remove(cartItem);
    } else {
      console.log(
        `Não foi possível encontrar um registro com ID ${productId}.`
      );
    }

    cart = await this.ormRepositoryCart.findOne({
      where: { user_id: userId },
      relations: ["items"],
    });

    cart.totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    cart.totalAmount = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await this.ormRepositoryCart.save(cart);

    return cartItem;
  }

  public async updateProductById(
    userId: string,
    productId: string,
    quantity: number,
    size: "PP" | "P" | "M" | "G" | "GG"
  ) {
    let cart = await this.ormRepositoryCart
    .createQueryBuilder("cart")
    .where({ user_id: userId })
    .getOne();

    const cartItems = await this.ormRepositoryCartItems
    .createQueryBuilder("cart_items")
    .where({ cart_id: cart.id })
    .getMany();

    const findProduct = cartItems.find((cart) => {
      return cart.product_id === productId
    })

    if(!findProduct) {
      throw new AppError(`Product with ID ${productId} not found`, 404)
    }

    const productCart = await this.ormRepositoryCartItems.manager.findOneBy(CartItems, {
      product_id: productId,
    });

    const productData = await this.productRepository.findById(productId);

    if (productData.inventory.quantity < quantity) {
      throw new AppError(cartConstants.ERROR_PRODUCT_QUANTITY, 404);
    }

    productCart.quantity = quantity;
    productCart.size = size

    await this.ormRepositoryCartItems.manager.save(productCart);

    return productCart;
  }
}
