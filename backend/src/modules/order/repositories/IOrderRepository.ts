import { OrderDetails } from "../infra/typeorm/entities/OrderDetails"

import ICreateOrderDTO from "../dtos/ICreateOrderDTO"

export interface IOrderRepository {
	getCartUser(userId: string): Promise<any>
  createOrder(data: ICreateOrderDTO): Promise<OrderDetails>
  findById(id: string): Promise<OrderDetails | undefined>;
}
