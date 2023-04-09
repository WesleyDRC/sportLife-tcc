import { Request, Response } from "express"
import { container } from "tsyringe"
import GetCartByIdUseCase from "../../../useCases/GetCartByIdUseCase"

export default class GetCartByIdController {
	public async handle(request: Request, response: Response): Promise<Response> {

		const userId = request.user.id

		const getCartByIdUseCase = container.resolve(GetCartByIdUseCase)

		const cart = await getCartByIdUseCase.execute(userId)

		return response.status(200).json({cart})
	}
}
