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
  private ormRepositoryOrderProducts: Repository<OrderProducts>;

  constructor() {
    this.ormRepositoryCart = AppDataSource.getRepository(CartItems);
    this.ormRepositoryOrderDetails = AppDataSource.getRepository(OrderDetails);
    this.ormRepositoryOrderProducts =
      AppDataSource.getRepository(OrderProducts);
  }

  public async createOrder({
    user,
    products,
    cep,
    number,
    addressee,
    complement,
    tracking_code,
  }: ICreateOrderDTO): Promise<OrderDetails> {
    try {
      const order = await this.ormRepositoryOrderDetails.create({
        user: user[0],
        order_products: products,
        cep,
        number,
        addressee,
        complement,
        tracking_code
      });

      await this.ormRepositoryOrderDetails.save(order);

      return Promise.resolve(order);
    } catch (error) {
      console.log(error);
    }
  }

  public async getOrder(userId: string): Promise<any> {
    const detailsOrderUser = await this.ormRepositoryOrderDetails.find({
      where: {
        user_id: userId,
      },
    });

    const orderProducts = []

    detailsOrderUser.map((order) => {
      order.order_products.forEach((productOrder) => {
        orderProducts.push({
          idOrder: productOrder.order_id,
          productId: productOrder.product_id,
          quantity: productOrder.quantity,
          price: productOrder.price,
          status: productOrder.shippingStatus,
          name: productOrder.product.name,
          size: productOrder.size,
          imageUrl: productOrder.product.imageMain,
          created_at: order.created_at,
          updated_at: order.updated_at
        })
        return orderProducts
      })
    })

    return orderProducts;
  }
}
