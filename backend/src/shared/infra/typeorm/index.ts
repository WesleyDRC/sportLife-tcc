/* eslint-disable no-debugger, no-console */
import "mysql2";
import { DataSource } from "typeorm";

import { User } from "../../../modules/auth/infra/typeorm/entities/User";
import { UserAddress } from "../../../modules/users/infra/typeorm/entities/UserAddress";
import { Product } from "../../../modules/products/infra/typeorm/entities/Product";
import { Categories } from "../../../modules/products/infra/typeorm/entities/Categories";
import { Inventory } from "../../../modules/products/infra/typeorm/entities/Inventory";
import { Discount } from "../../../modules/products/infra/typeorm/entities/Discount";
import { Assessments } from "../../../modules/products/infra/typeorm/entities/Assessments";
import { OrderDetails } from "../../../modules/order/infra/typeorm/entities/OrderDetails";
import { OrderProducts } from "../../../modules/order/infra/typeorm/entities/OrderProducts";

import { Cart } from "../../../modules/cart/infra/typeorm/entities/Cart";
import { CartItems } from "../../../modules/cart/infra/typeorm/entities/CartItem";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    User,
    UserAddress,
    Product,
    Categories,
    Inventory,
    Discount,
    Assessments,
    Cart,
    CartItems,
    OrderDetails,
    OrderProducts
  ],
  synchronize: true,
  ssl: false,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected!\n Host: ${process.env.DB_HOST}`);
  })
  .catch((error) => console.log(error));
