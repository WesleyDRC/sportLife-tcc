import { Request, Response } from "express";
import { container } from "tsyringe";
import ListProductsUseCase from "../../../useCases/ListProductsUseCase";

export default class ListProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const { category, order } = request.headers;

    const queryParams = request.query;

    const filter: { [key: string]: string } = {};

		Object.entries(queryParams).forEach(([chave, valor]) => {
			if (typeof valor === 'string') {
				valor = decodeURIComponent(valor.replace(/\+/g, " "))
				filter[chave] = valor;
			}
		});

    const products = await listProductsUseCase.execute(
      category ? String(category) : "",
      order ? String(order) : "",
      filter
    );

    return response.json(products);
  }
}
