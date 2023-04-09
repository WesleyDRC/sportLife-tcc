import { Router } from "express";

import ensureAuthenticated from "../../../../auth/infra/http/middlewares/enrsureAuthenticated";

import CreateCartController from "../controllers/CreateCartController";

const createCartController = new CreateCartController();

const cartRoutes = Router();

cartRoutes.post("/", ensureAuthenticated, createCartController.handle);

export default cartRoutes;
