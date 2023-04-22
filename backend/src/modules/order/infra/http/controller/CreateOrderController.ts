import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateOrderUseCase from "../../../useCases/CreateOrderUseCase";

export default class CreateOrderController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    const userId = request.user.id;

    const { products } = request.body

    const order = await createOrderUseCase.execute({userId, products})

    return response.json({order})
  }
}
