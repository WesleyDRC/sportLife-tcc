import { Request, Response } from "express";
import { container } from "tsyringe";
import ListProductsUseCase from "../../../useCases/ListProductsUseCase";

export default class ListProductsController {

	public async handle(request: Request, response: Response): Promise<Response> {
		const listProductsUseCase = container.resolve(ListProductsUseCase)

		const { category, order } = request.headers

		const products = await listProductsUseCase.execute(
			category ? String(category) : "",
			order ? String(order) : "",
		)

		return response.json(products)
	}

}
