import { IStoreCartDto } from "../dtos/IStoreCartDto"

import { OrderDetails } from "../infra/typeorm/entities/OrderDetails"

import ICreateOrderDTO from "../dtos/ICreateOrderDTO"

export interface IOrderRepository {
	createCart({ quantity, created_at, userId, productId}: IStoreCartDto): Promise<any>
	findProductById({productId, userId}): Promise<any>
	updateQuantityProductCart({productId,userId, quantity}): Promise<any>
	getCartUser(userId: string): Promise<any>
  createOrder(data: ICreateOrderDTO): Promise<OrderDetails>
  findById(id: string): Promise<OrderDetails | undefined>;

}
