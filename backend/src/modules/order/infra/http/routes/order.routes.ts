import { Router } from "express";

import CreateCartUserController from "../controller/CreateCartUserController";
import GetCartUserController from "../controller/GetCartUserController";
import CreateOrderController from "../controller/CreateOrderController";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";


const createCartUserController = new CreateCartUserController()
const getCartUserController = new GetCartUserController()
const createOrderController = new CreateOrderController()

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
orderRouter.post(
	"/",
	// ensureAuthenticated,
	createOrderController.handle
)


export default orderRouter
