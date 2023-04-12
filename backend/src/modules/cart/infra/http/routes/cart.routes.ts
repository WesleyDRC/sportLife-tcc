import { Router } from "express";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

import CreateCartController from "../controllers/CreateCartController";
import GetCartByIdController from "../controllers/GetCartByIdController";
import DeleteProductCartController from "../controllers/DeleteProductCartController";

const getCartByIdController = new GetCartByIdController();
const createCartController = new CreateCartController();
const deleteProductCartController = new DeleteProductCartController();

const cartRoutes = Router();

cartRoutes.get("/", ensureAuthenticated, getCartByIdController.handle);
cartRoutes.post("/", ensureAuthenticated, createCartController.handle);
cartRoutes.delete("/:productId", ensureAuthenticated, deleteProductCartController.handle);

export default cartRoutes;
