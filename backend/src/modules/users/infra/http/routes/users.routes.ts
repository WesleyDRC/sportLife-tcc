import { Router } from "express";

import GetAllUsersController from "../controllers/GetAllUsersController";

const usersRoutes = Router()

const getAllUsersController = new GetAllUsersController()

usersRoutes.get(
	'/',
	getAllUsersController.handle
	)

export default usersRoutes
