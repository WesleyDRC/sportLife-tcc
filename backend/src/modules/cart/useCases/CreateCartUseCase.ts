import IUseCase from "./ports/IUseCase";
import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../repositories/ICartRepository";

import { ICartDTO } from "../dtos/ICartDTO";
import { ICartItemDTO } from "../dtos/ICartItemDTO";

@injectable()
export default class CreateCartUseCase implements IUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ) {}

  async execute(data): Promise<unknown> {
    const { userId, cartItem } = data

    const cart = await this.cartRepository.addProductToCart(userId, cartItem);

    return cart;
  }
}
