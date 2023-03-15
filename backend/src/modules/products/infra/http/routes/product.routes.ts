import { Router } from "express";

import ListProductsController from "../controllers/ListProductsController";
import GetProductByIdController from "../controllers/GetProductByIdController";

const productRouter = Router()
const listProductsController = new ListProductsController()
const getProductByIdController = new GetProductByIdController()

productRouter.get(
	"/",
	listProductsController.handle
)

productRouter.get(
	"/:id",
	getProductByIdController.handle
)

export default productRouter
