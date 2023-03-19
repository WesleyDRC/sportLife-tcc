import { injectable, inject } from "tsyringe";
import { IOrderRepository } from "../repositories/IOrderRepository";
import IUseCase from "./ports/IUseCase";
import orderConstants from "../contants/orderConstants";

@injectable()
export default class CreateCartUseCase implements IUseCase {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository
  ) {}

  async execute({ quantity, created_at, userId, productId }): Promise<any> {
    const foundProductCart = await this.orderRepository.findProductById({
      productId,
      userId
    });

    if (foundProductCart.length > 0) {
      await this.orderRepository.updateQuantityProductCart({
        productId,
        userId,
        quantity,
      });

      return orderConstants.UPDATING_CART_SUCCESSFULLY;
    }

    await this.orderRepository.createCart({
      quantity,
      created_at,
      userId,
      productId,
    });

    return orderConstants.ADDING_CART_SUCCESSFULLY;

  }
}
