import IUseCase from "./ports/IUseCase";
import {injectable, inject} from "tsyringe"
import { IOrderRepository } from "../repositories/IOrderRepository";

@injectable()
export default class GetCartUserUseCase implements IUseCase{

	constructor(
		@inject("OrderRepository")
		private orderRepository: IOrderRepository
	){}

	async execute(userId: string) {
		return await this.orderRepository.getCartUser(userId)
	}
}
