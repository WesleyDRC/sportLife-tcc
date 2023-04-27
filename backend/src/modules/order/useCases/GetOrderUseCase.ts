import { injectable, inject } from "tsyringe";

import { IOrderRepository } from "../repositories/IOrderRepository";

import IUseCase from "./ports/IUseCase";
import { OrderDetails } from "../infra/typeorm/entities/OrderDetails";
import AppError from "../../../shared/errors/AppError";

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  userId: string;
}

@injectable()
export default class GetOrderUseCase implements IUseCase {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository
  ) {}

  async execute({ userId }: IRequest): Promise<any> {
    try {
      const userOrder = await this.orderRepository.getOrder(userId);

      return userOrder;
    } catch (error) {
      console.log(error);
    }
  }
}
