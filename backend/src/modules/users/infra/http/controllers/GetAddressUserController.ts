import { Request, Response } from "express";
import { container } from "tsyringe";
import GetAddressUserUseCase from "../../../useCases/GetAddressUserUseCase";

export default class GetAddressUserController {
	public async handle(request: Request, response: Response) {

		const getAddressUserUseCase = container.resolve(GetAddressUserUseCase)

		const userId = request.user.id

		const userAddress = await getAddressUserUseCase.execute(userId)

		return response.json({ userAddress })

	}
}
