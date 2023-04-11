import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateProductUseCase from "../../../useCases/CreateProductUseCase";

export default class CreateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createProductUseCase = container.resolve(CreateProductUseCase);

    const {
      imageMain,
      imageSecondary,
      imageTertiary,
      name,
      description,
      sexo,
      colors,
      price,
      weight,
      height,
      width,
      sizes,
      categories_id,
      inventory_id,
      discount_id,
    } = request.body;

    const views = 0;

    const product = await createProductUseCase.execute({
      imageMain,
      imageSecondary,
      imageTertiary,
			name,
			description,
			sexo,
			colors,
			price,
			weight,
			height,
			width,
      views,
      sizes,
			categories_id,
			inventory_id,
			discount_id,
		});

    return response.json(product);
  }
}
