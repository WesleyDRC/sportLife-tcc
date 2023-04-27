import { Router } from "express";

import CreateOrderController from "../controller/CreateOrderController";
import GetOrderController from "../controller/GetOrderController";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

const createOrderController = new CreateOrderController()
const getOrderController = new GetOrderController()

const orderRoutes = Router()

orderRoutes.post(
	"/",
	ensureAuthenticated,
	createOrderController.handle
)

orderRoutes.get(
	"/",
	ensureAuthenticated,
	getOrderController.handle
)


export default orderRoutes
