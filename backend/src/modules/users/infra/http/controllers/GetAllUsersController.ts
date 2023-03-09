import { Request, Response } from "express";
import GetAllUsersUseCase from "../../../useCases/GetAllUsersUseCase";
import { container } from "tsyringe";

export default class GetAllUsersController {
	public async handle(request: Request, response: Response) {

		const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);

		const users = await getAllUsersUseCase.execute()

		return response.json({ users })

	}
}
