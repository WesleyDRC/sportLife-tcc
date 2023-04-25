import IUseCase from "./ports/IUseCase";
import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../repositories/ICartRepository";
import { Cart } from "../infra/typeorm/entities/Cart";

@injectable()
export default class UpdateProductByIdUseCase implements IUseCase {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ) {}

  async execute(data): Promise<Cart> {
    const { userId, productId, quantity, size } = data;

    const cart = await this.cartRepository.updateProductById(userId, productId, quantity, size);

    return cart;
  }
}
