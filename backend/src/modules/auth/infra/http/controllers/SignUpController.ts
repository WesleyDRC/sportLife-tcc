import { Request, Response} from "express"
import { container } from "tsyringe"
import { SignUpUseCase } from "../../../useCases/SignUpUseCase"

class SignUpController {
	public async handle(request: Request, response: Response):Promise<Response> {

		const signUpUseCase = container.resolve(SignUpUseCase)

<<<<<<< HEAD
		const { email, password } = request.body

		const token = await signUpUseCase.execute({email, password})
=======
		const { name, email, password, confirmPassword } = request.body

		const token = await signUpUseCase.execute({ name, email, password, confirmPassword })
>>>>>>> backend

		return response.json({token})
	}
}

export default SignUpController
