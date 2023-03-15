import { Router } from "express";

import authRoutes from "../../../../modules/auth/infra/http/routes/auth.routes";
import usersRoutes from "../../../../modules/users/infra/http/routes/users.routes";
import productRouter from "../../../../modules/products/infra/http/routes/product.routes";

const routes = Router()

routes.get('/health-check', (request, response) =>
  response.json({ message: 'Ok' }),
);

routes.use("/auth", authRoutes)

routes.use("/users", usersRoutes)

routes.use("/products", productRouter)

export default routes;
