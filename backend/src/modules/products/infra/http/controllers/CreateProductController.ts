import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateProductUseCase from "../../../useCases/CreateProductUseCase";

export default class CreateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createProductUseCase = container.resolve(CreateProductUseCase);

    const {
      imageUrl,
      name,
      description,
      sexo,
      colors,
      price,
      weight,
      height,
      width,
      categories_id,
      inventory_id,
      discount_id,
      sizes_id,
    } = request.body;

    const views = 0;

    const product = await createProductUseCase.execute({
			imageUrl,
			name,
			description,
			sexo,
			colors,
			price,
			weight,
			height,
			width,
      views,
			categories_id,
			inventory_id,
			discount_id,
			sizes_id,
		});

    return response.json(product);
  }
}
