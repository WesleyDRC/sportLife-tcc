import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateAssessmentUseCase from "../../../useCases/CreateAssessmentUseCase";

export default class CreateAssessmentController {
	public async handle(request: Request, response: Response) {

		const createAddressUserUseCase = container.resolve(CreateAssessmentUseCase)

		const userId = request.user.id

		const { stars, assessment, productId} = request.body

		const userAddress = await createAddressUserUseCase.execute({stars, assessment, userId, productId})

		return response.json({ userAddress })

	}
}
