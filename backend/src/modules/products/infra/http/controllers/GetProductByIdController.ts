import { Request, Response } from "express"
import { container } from "tsyringe"
import GetProductByIdUseCase from "../../../useCases/GetProductByIdUseCase"

export default class GetProductByIdController {

	public async handle(request: Request, response: Response): Promise<Response> {
		const getProductByIdUseCase = container.resolve(GetProductByIdUseCase)

		const { id } = request.params

		const product = await getProductByIdUseCase.execute(id)

		return response.json(product)

	}

}
