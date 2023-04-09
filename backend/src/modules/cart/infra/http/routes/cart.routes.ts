import { Router } from "express";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

import CreateCartController from "../controllers/CreateCartController";
import GetCartByIdController from "../controllers/GetCartByIdController";

const getCartByIdController = new GetCartByIdController();
const createCartController = new CreateCartController();

const cartRoutes = Router();

cartRoutes.get("/", ensureAuthenticated, getCartByIdController.handle);
cartRoutes.post("/", ensureAuthenticated, createCartController.handle);

export default cartRoutes;
