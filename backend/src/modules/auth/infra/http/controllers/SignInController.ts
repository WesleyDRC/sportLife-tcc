import { Request, Response } from "express";
import { container } from "tsyringe";
import SignInUseCase from "../../../useCases/SignInUseCase";

export default class SignInController {
	public async handle(request: Request, response: Response): Promise<Response> {

		const signInUseCase = container.resolve(SignInUseCase)

		const { email, password } = request.body;

		const token = await signInUseCase.execute({email, password})

		return response.json({ token })
	}
}
