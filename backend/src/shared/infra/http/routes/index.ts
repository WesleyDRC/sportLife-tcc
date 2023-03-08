import { Router } from "express";

import authRoutes from "../../../../modules/auth/infra/http/routes/auth.routes";

const routes = Router()

routes.get('/health-check', (request, response) =>
  response.json({ message: 'Ok' }),
);

routes.use("/auth", authRoutes)

export default routes;
