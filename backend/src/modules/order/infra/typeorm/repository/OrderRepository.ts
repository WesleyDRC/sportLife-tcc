import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IStoreCartDto } from "../../../dtos/IStoreCartDto";

import { CartItems } from "../../../../cart/infra/typeorm/entities/CartItem";
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

  public async getCartUser(userId: string): Promise<any> {
    const cart = await this.ormRepositoryCart
      .createQueryBuilder("cart_items")
      .leftJoinAndSelect("cart_items.user", "user")
      .leftJoinAndSelect("cart_items.product", "product")
      .where("cart_items.user_id = :userId", { userId })
      .getMany();
    return Promise.resolve(cart);
  }

  public async createOrder({ user, products }: ICreateOrderDTO): Promise<OrderDetails> {


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
