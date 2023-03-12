import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateAddressUserUseCase from "../../../useCases/CreateAddressUserUseCase";

export default class CreateAddressUserController {
	public async handle(request: Request, response: Response) {

		const createAddressUserUseCase = container.resolve(CreateAddressUserUseCase)

		const userId = request.user.id

		const { city, postal_code, country, telephone, mobile} = request.body

		const userAddress = await createAddressUserUseCase.execute({userId, city, postal_code, country, telephone, mobile})

		return response.json({ userAddress })

	}
}
