import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { CartItems } from "../entities/CartItem";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IStoreCartDto } from "../../../dtos/IStoreCartDto";

export class OrderRepository implements IOrderRepository {
  private ormRepositoryCart: Repository<CartItems>;

  constructor() {
    this.ormRepositoryCart = AppDataSource.getRepository(CartItems);
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

}
