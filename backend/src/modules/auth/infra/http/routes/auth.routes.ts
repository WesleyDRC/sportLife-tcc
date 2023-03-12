import { celebrate, Joi, Segments} from 'celebrate'
import { Router } from 'express'
import SignInController from '../controllers/SignInController'
import SignUpController from '../controllers/SignUpController'

const authRoutes = Router()
const signUpController = new SignUpController()
const signInController = new SignInController()

authRoutes.post(
	"/signUp",
<<<<<<< HEAD
=======
	celebrate({
		[Segments.BODY]: {
			name: Joi.string(),
			email: Joi.string(),
			password: Joi.string(),
			confirmPassword: Joi.string()
		},
	}),
>>>>>>> backend
	signUpController.handle
)

authRoutes.post(
	"/",
	celebrate({
		[Segments.BODY]: {
			email: Joi.string(),
			password: Joi.string()
		}
	}),
	signInController.handle
)

export default authRoutes
