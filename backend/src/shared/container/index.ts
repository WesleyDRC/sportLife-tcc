import "./providers"
import { container } from "tsyringe";

import { IAuthRepository } from "../../modules/auth/repositories/IAuthRepository";
import { AuthRepository } from "../../modules/auth/infra/typeorm/repository/AuthRepository";

container.registerSingleton<IAuthRepository>("AuthRepository", AuthRepository)
