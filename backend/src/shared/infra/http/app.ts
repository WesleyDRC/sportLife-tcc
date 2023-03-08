import "dotenv/config"
import "reflect-metadata"

import cors from "cors"
import express, { Request, Response, NextFunction} from "express"
import { errors } from "celebrate"
import 'express-async-errors';
import AppError from "../../errors/AppError";

import routes from "./routes/index"

import "./../../container/index"

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errors())

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      metadata: err.metadata,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
