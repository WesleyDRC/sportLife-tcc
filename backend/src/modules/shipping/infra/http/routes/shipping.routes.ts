import { Router } from "express";

import CalculateShippingController from "../controller/CalculateShippingController";
import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

const calculateShippingController =  new CalculateShippingController()

const shippingRoutes = Router()

shippingRoutes.post(
	"/",
	ensureAuthenticated,
	calculateShippingController.handle
)


export default shippingRoutes
