import "./providers"
import { container } from "tsyringe";

import { IAuthRepository } from "../../modules/auth/repositories/IAuthRepository";
import { AuthRepository } from "../../modules/auth/infra/typeorm/repository/AuthRepository";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repository/UsersRepository";

import { IProductRepository } from "../../modules/products/repositories/IProductRepository";
import { ProductRepository } from "../../modules/products/infra/typeorm/repository/ProductRepository";

import { IOrderRepository } from "../../modules/order/repositories/IOrderRepository";
import { OrderRepository } from "../../modules/order/infra/typeorm/repository/OrderRepository";

import { ICartRepository } from "../../modules/cart/repositories/ICartRepository";
import { CartRepository } from "../../modules/cart/infra/typeorm/repository/CartRepository";

container.registerSingleton<IAuthRepository>("AuthRepository", AuthRepository)
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)
container.registerSingleton<IProductRepository>("ProductRepository", ProductRepository)
container.registerSingleton<IOrderRepository>("OrderRepository", OrderRepository)
container.registerSingleton<ICartRepository>("CartRepository", CartRepository)
