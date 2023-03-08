"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const user_validations_1 = __importDefault(require("./user-validations"));
class User {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
    }
    static create(name, email, password) {
        const attentionPoint = (0, user_validations_1.default)(name, email, password);
        if (attentionPoint) {
            throw new AppError_1.default(attentionPoint, 400);
        }
        return new User(name, email, password);
    }
    get password() {
        return this._password;
    }
}
exports.default = User;
