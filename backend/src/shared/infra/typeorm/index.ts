/* eslint-disable no-debugger, no-console */
import "mysql2"
import { User } from "../../../modules/auth/infra/typeorm/entities/User";
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: true
    }
  }
})

AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected!\n Host: ${process.env.DB_HOST}`);
  })
  .catch((error) => console.log(error));
