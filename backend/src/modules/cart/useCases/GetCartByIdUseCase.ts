import IUseCase from "./ports/IUseCase";
import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../repositories/ICartRepository";
import { Cart } from "../infra/typeorm/entities/Cart";


@injectable()
export default class GetCartByIdUseCase implements IUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ) {}

	async execute(userId: string): Promise<Cart> {
		const cart = await this.cartRepository.getCart(userId)

		return cart
	}
}
