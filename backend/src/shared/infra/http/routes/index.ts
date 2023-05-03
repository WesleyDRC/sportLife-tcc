import { Router } from "express";

import authRoutes from "../../../../modules/auth/infra/http/routes/auth.routes";
import usersRoutes from "../../../../modules/users/infra/http/routes/users.routes";
import productRoutes from "../../../../modules/products/infra/http/routes/product.routes";
import orderRoutes from "../../../../modules/order/infra/http/routes/order.routes";
import cartRoutes from "../../../../modules/cart/infra/http/routes/cart.routes";
import shippingRoutes from "../../../../modules/shipping/infra/http/routes/shipping.routes";

const routes = Router()

routes.get('/health-check', (request, response) =>
  response.json({ message: 'Ok' }),
);

routes.use("/auth", authRoutes)

routes.use("/users", usersRoutes)

routes.use("/products", productRoutes)

routes.use("/order", orderRoutes)

routes.use("/cart", cartRoutes)

routes.use("/shipping", shippingRoutes)

export default routes;
