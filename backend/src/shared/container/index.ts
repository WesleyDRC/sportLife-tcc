import "./providers"
import { container } from "tsyringe";

import { IAuthRepository } from "../../modules/auth/repositories/IAuthRepository";
import { AuthRepository } from "../../modules/auth/infra/typeorm/repository/AuthRepository";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repository/UsersRepository";

container.registerSingleton<IAuthRepository>("AuthRepository", AuthRepository)
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)
