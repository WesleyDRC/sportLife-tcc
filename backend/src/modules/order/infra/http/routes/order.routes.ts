import { Router } from "express";

import CreateOrderController from "../controller/CreateOrderController";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

const createOrderController = new CreateOrderController()

const orderRoutes = Router()

orderRoutes.post(
	"/",
	ensureAuthenticated,
	createOrderController.handle
)


export default orderRoutes
