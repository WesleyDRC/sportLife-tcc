import { Router } from "express";

import ListProductsController from "../controllers/ListProductsController";
import GetProductByIdController from "../controllers/GetProductByIdController";
import GetAssessmentController from "../controllers/GetAssessmentsController";
import CreateProductController from "../controllers/CreateProductController";
import UpdateViewsController from "../controllers/UpdateViewsController";

const productRoutes = Router()
const listProductsController = new ListProductsController()
const getProductByIdController = new GetProductByIdController()
const getAssessmentController = new GetAssessmentController()
const createProductController = new CreateProductController()
const updateViewsController = new UpdateViewsController()

productRoutes.get(
	"/",
	listProductsController.handle
)

productRoutes.get(
	"/:id",
	getProductByIdController.handle
)

productRoutes.get(
	"/:id/assessments",
	getAssessmentController.handle
)

productRoutes.post(
	"/",
	createProductController.handle
)

productRoutes.patch(
	"/:id/views",
	updateViewsController.handle
)

export default productRoutes
