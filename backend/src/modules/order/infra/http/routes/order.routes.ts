import { Router } from "express";

import GetCartUserController from "../controller/GetCartUserController";
import CreateOrderController from "../controller/CreateOrderController";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";


const getCartUserController = new GetCartUserController()
const createOrderController = new CreateOrderController()

const orderRoutes = Router()

orderRoutes.get(
	"/cart",
	ensureAuthenticated,
	getCartUserController.handle
)

orderRoutes.post(
	"/",
	// ensureAuthenticated,
	createOrderController.handle
)


export default orderRoutes
