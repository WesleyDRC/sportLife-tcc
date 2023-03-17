import { Router } from "express";

import ListProductsController from "../controllers/ListProductsController";
import GetProductByIdController from "../controllers/GetProductByIdController";
import GetAssessmentController from "../controllers/GetAssessmentsController";
import CreateProductController from "../controllers/CreateProductController";
import UpdateViewsController from "../controllers/UpdateViewsController";

const productRouter = Router()
const listProductsController = new ListProductsController()
const getProductByIdController = new GetProductByIdController()
const getAssessmentController = new GetAssessmentController()
const createProductController = new CreateProductController()
const updateViewsController = new UpdateViewsController()

productRouter.get(
	"/",
	listProductsController.handle
)

productRouter.get(
	"/:id",
	getProductByIdController.handle
)

productRouter.get(
	"/:id/assessments",
	getAssessmentController.handle
)

productRouter.post(
	"/",
	createProductController.handle
)

productRouter.patch(
	"/:id/views",
	updateViewsController.handle
)

export default productRouter
