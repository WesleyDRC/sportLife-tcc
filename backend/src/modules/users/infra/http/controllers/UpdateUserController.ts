import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../../useCases/UpdateUserUseCase";
import { container } from "tsyringe";
import userConstants from "../../../constants/userConstants";

export default class UpdateUserController {
	public async handle(request: Request, response: Response) {
		const {name, email} = request.body
		const {userId} = request.params

		const updateUserUseCase = container.resolve(UpdateUserUseCase)

		await updateUserUseCase.execute({userId, name, email})
		
		return response.json({message: userConstants.SUCCESSFULLY_UPDATED})
	}
}
