import "./providers"
import { container } from "tsyringe";

import { IAuthRepository } from "../../modules/auth/repositories/IAuthRepository";
import { AuthRepository } from "../../modules/auth/infra/typeorm/repository/AuthRepository";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repository/UsersRepository";

import { IProductRepository } from "../../modules/products/repositories/IProductRepository";
import { ProductRepository } from "../../modules/products/infra/http/typeorm/repository/ProductRepository";

container.registerSingleton<IAuthRepository>("AuthRepository", AuthRepository)
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)
container.registerSingleton<IProductRepository>("ProductRepository", ProductRepository)
