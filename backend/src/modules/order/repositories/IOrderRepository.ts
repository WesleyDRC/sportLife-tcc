
import { OrderDetails } from "../infra/typeorm/entities/OrderDetails"

import ICreateOrderDTO from "../dtos/ICreateOrderDTO"

export interface IOrderRepository {
	updateQuantityProductCart({productId,userId, quantity}): Promise<any>
	getCartUser(userId: string): Promise<any>
  createOrder(data: ICreateOrderDTO): Promise<OrderDetails>
  findById(id: string): Promise<OrderDetails | undefined>;
}
