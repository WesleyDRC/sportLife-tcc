import { Router } from "express";

import CreateCartUserController from "../controller/CreateCartUserController";
import GetCartUserController from "../controller/GetCartUserController";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";


const createCartUserController = new CreateCartUserController()
const getCartUserController = new GetCartUserController()

const orderRouter = Router()

orderRouter.get(
	"/cart",
	ensureAuthenticated,
	getCartUserController.handle
)
orderRouter.post(
	"/cart",
	ensureAuthenticated,
	createCartUserController.handle
)


export default orderRouter
