"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./providers");
const tsyringe_1 = require("tsyringe");
const AuthRepository_1 = require("../../modules/auth/infra/typeorm/repository/AuthRepository");
tsyringe_1.container.registerSingleton("AuthRepository", AuthRepository_1.AuthRepository);
