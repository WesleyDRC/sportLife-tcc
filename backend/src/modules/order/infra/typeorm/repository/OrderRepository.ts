import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IStoreCartDto } from "../../../dtos/IStoreCartDto";

import { CartItems } from "../entities/CartItem";
import { OrderDetails } from "../entities/OrderDetails";
import { OrderProducts } from "../entities/OrderProducts";
import ICreateOrderDTO from "../../../dtos/ICreateOrderDTO";

export class OrderRepository implements IOrderRepository {
  private ormRepositoryCart: Repository<CartItems>;
  private ormRepositoryOrderDetails: Repository<OrderDetails>;
  private ormRepositoryOrderProducts: Repository<OrderProducts>

  constructor() {
    this.ormRepositoryCart = AppDataSource.getRepository(CartItems);
    this.ormRepositoryOrderDetails = AppDataSource.getRepository(OrderDetails)
    this.ormRepositoryOrderProducts = AppDataSource.getRepository(OrderProducts)
  }

  public async createCart({
    quantity,
    created_at,
    userId,
    productId,
  }: IStoreCartDto): Promise<any> {
		const cart = new CartItems()
		cart.quantity = quantity;
		cart.created_at = created_at,
		cart.user_id = userId
		cart.product_id = productId

		await this.ormRepositoryCart.save(cart)

    return Promise.resolve(cart)
  }

  public async findProductById({productId, userId}): Promise<any> {
    const product = await this.ormRepositoryCart.find({
      where: {
        product_id : productId,
        user_id: userId
      }
    })
    return Promise.resolve(product);
  }

  public async updateQuantityProductCart({productId,userId, quantity}): Promise<any> {
    const product = await this.ormRepositoryCart
      .createQueryBuilder("cart_items")
      .update(CartItems)
      .set({
        quantity
      })
      .where("product_id = :productId", { productId })
      .andWhere("user_id = :userId", { userId })
      .execute();
    return Promise.resolve(product);
  }

  public async getCartUser(userId: string): Promise<any> {
    const cart = await this.ormRepositoryCart
      .createQueryBuilder("cart_items")
      .leftJoinAndSelect("cart_items.user", "user")
      .leftJoinAndSelect("cart_items.product", "product")
      .where("cart_items.user_id = :userId", { userId })
      .getMany();
    return Promise.resolve(cart);
  }

  public async createOrder({ user, products}: ICreateOrderDTO): Promise<OrderDetails> {

    
    const order = this.ormRepositoryOrderDetails.create({
      user: user[0],
      order_products: products
    })

    await this.ormRepositoryOrderDetails.save(order)

    return Promise.resolve(order)
  }

  public async findById(id: string): Promise<OrderDetails | undefined> {
    const order = await this.ormRepositoryOrderDetails.findOneBy({
      id
    });

    return order;
  }

}
