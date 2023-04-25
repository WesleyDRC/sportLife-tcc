import { Request, Response } from "express";

import { container } from "tsyringe";

import UpdateProductByIdUseCase from "../../../useCases/UpdateProductByIdUseCase";

export default class UpdateProductByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const { productId, quantity, size } = request.body;

    const data = {
      userId,
      productId,
      quantity,
      size
    };

    const updateProductByIdUseCase = container.resolve(UpdateProductByIdUseCase);

    const product = await updateProductByIdUseCase.execute(data);

    return response.status(201).json({});
  }
}
