import { celebrate, Joi, Segments} from 'celebrate'
import { Router } from 'express'

import SignUpController from '../controllers/SignUpController'

const authRoutes = Router()
const signUpController = new SignUpController()

authRoutes.post(
	"/signup",
	celebrate({
		[Segments.BODY]: {
			name: Joi.string(),
			email: Joi.string(),
			password: Joi.string(),
		},
	}),
	signUpController.handle
)

export default authRoutes
