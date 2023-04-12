import IUseCase from "./ports/IUseCase";
import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../repositories/ICartRepository";

@injectable()
export default class DeleteProductCartUseCase implements IUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ) {}

  async execute(data): Promise<any> {
    const { userId, productId } = data

    const cartItem = await this.cartRepository.deleteProductCart(userId, productId);

    return cartItem;
  }
}
