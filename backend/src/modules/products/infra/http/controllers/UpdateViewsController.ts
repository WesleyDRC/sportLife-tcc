import { Request, Response } from "express"
import { container } from "tsyringe"
import UpdateViewsUseCase from "../../../useCases/UpdateViewsUseCase"

export default class UpdateViewsController {

	public async handle(request: Request, response: Response): Promise<Response> {
		const updateViewsUseCase = container.resolve(UpdateViewsUseCase)

		const { id } = request.params

		const product = await updateViewsUseCase.execute(id)

		return response.json(product)

	}

}
