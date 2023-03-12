import { Request, Response } from "express";
import { container } from "tsyringe";
import GetUserByIdUseCase from "../../../useCases/GetUserByIdUseCase";

export default class GetUserByIdController {
	public async handle(request: Request, response: Response) {

		const getUserByIdUseCase = container.resolve(GetUserByIdUseCase)

		const userId = request.user.id

		const user = await getUserByIdUseCase.execute(userId)

		return response.json({ user })

	}
}
