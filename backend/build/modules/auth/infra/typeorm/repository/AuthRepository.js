"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const typeorm_1 = require("../../../../../shared/infra/typeorm");
const User_1 = require("../entities/User");
class AuthRepository {
    constructor() {
        this.ormRepository = typeorm_1.AppDataSource.getRepository(User_1.User);
    }
    create({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User();
            user.name = name;
            user.email = email;
            user.password = password;
            yield this.ormRepository.save(user);
            return Promise.resolve(user.id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.ormRepository.find({
                where: { email }
            });
            return Promise.resolve(foundUser);
        });
    }
}
exports.AuthRepository = AuthRepository;
