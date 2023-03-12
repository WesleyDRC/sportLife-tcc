import { Router } from "express";

import GetAllUsersController from "../controllers/GetAllUsersController";
import GetUserByIdController from "../controllers/GetUserByIdController";
import UpdateUserController from "../controllers/UpdateUserController";
import GetAddressUserController from "../controllers/GetAddressUserController";
import CreateAddressUserController from "../controllers/CreateAddressUserController";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

const usersRoutes = Router()

const getAllUsersController = new GetAllUsersController()
const getUserByIdController = new GetUserByIdController()
const updateUserController = new UpdateUserController()
const getAddressUserController = new GetAddressUserController()
const createAddressUserController = new CreateAddressUserController()

usersRoutes.get(
	'/',
	ensureAuthenticated,
	getAllUsersController.handle
	)

usersRoutes.get(
	"/user",
	ensureAuthenticated,
	getUserByIdController.handle
)

usersRoutes.patch(
	"/:userId",
	ensureAuthenticated,
	updateUserController.handle
)

usersRoutes.get(
	"/address",
	ensureAuthenticated,
	getAddressUserController.handle
)

usersRoutes.post(
	"/address",
	ensureAuthenticated,
	createAddressUserController.handle
)

export default usersRoutes
