import { Request, Response } from "express"
import { container } from "tsyringe"
import GetAssessmentUseCase from "../../../useCases/GetAssessmentUseCase"

export default class GetAssessmentController {

	public async handle(request: Request, response: Response): Promise<Response> {
		const getAssessmentUseCase = container.resolve(GetAssessmentUseCase)

		const { id } = request.params

		const assesments = await getAssessmentUseCase.execute(id)

		return response.json(assesments)

	}

}
