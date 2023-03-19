import { Request, Response } from "express";
import { container } from "tsyringe";
import GetCartUserUseCase from "../../../useCases/GetCartUserUseCase";

export default class GetCartUserController {
	public async handle(request: Request, response: Response): Promise<Response> {
		const getCartUserUseCase = container.resolve(GetCartUserUseCase)

		const userId = request.user.id

		const cart = await getCartUserUseCase.execute(userId)

		return response.json({cart})
	}
}
