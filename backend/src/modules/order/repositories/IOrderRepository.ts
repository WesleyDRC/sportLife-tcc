import { IStoreCartDto } from "../dtos/IStoreCartDto"

export interface IOrderRepository {
	createCart({ quantity, created_at, userId, productId}: IStoreCartDto): Promise<any>
	findProductById({productId, userId}): Promise<any>
	updateQuantityProductCart({productId,userId, quantity}): Promise<any>
	getCartUser(userId: string): Promise<any>
}
