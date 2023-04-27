import { Request, Response } from "express";
import { container } from "tsyringe";
import GetOrderUseCase from "../../../useCases/GetOrderUseCase";

export default class GetOrderController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const getOrderUseCase = container.resolve(GetOrderUseCase);

    const userId = request.user.id;

    const order = await getOrderUseCase.execute({userId})

    return response.json({order})
  }
}
