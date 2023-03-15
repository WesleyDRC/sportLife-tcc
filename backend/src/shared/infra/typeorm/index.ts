/* eslint-disable no-debugger, no-console */
import "mysql2"
import { DataSource } from 'typeorm';

import { User } from "../../../modules/auth/infra/typeorm/entities/User";
import { UserAddress } from "../../../modules/users/infra/typeorm/entities/UserAddress";
import { Product } from "../../../modules/products/infra/http/typeorm/entities/Product";
import { Categories } from "../../../modules/products/infra/http/typeorm/entities/Categories";
import { Inventory } from "../../../modules/products/infra/http/typeorm/entities/Inventory";
import { Discount } from "../../../modules/products/infra/http/typeorm/entities/Discount";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, UserAddress, Product, Categories, Inventory, Discount],
  synchronize: true,
  ssl: false,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})

AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected!\n Host: ${process.env.DB_HOST}`);
  })
  .catch((error) => console.log(error));
