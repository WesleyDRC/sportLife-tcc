import { OrderDetails } from "../infra/typeorm/entities/OrderDetails"

import ICreateOrderDTO from "../dtos/ICreateOrderDTO"

export interface IOrderRepository {
  createOrder(data: ICreateOrderDTO): Promise<OrderDetails>
  getOrder(userId: string): Promise<[]>
}
