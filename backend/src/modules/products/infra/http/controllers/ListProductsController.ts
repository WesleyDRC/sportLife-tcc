import { Request, Response } from "express";
import { container } from "tsyringe";
import ListProductsUseCase from "../../../useCases/ListProductsUseCase";

export default class ListProductsController {

	public async handle(request: Request, response: Response): Promise<Response> {
		const listProductsUseCase = container.resolve(ListProductsUseCase)

		const { category, orderBy, filter } = request.body

		const products = await listProductsUseCase.execute(
			category ? category : "",
			orderBy ? orderBy : "",
			filter ? filter : ""
		)

		return response.json(products)
	}

}
