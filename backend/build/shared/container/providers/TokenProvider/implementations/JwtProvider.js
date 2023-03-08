"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtProvider {
    constructor() {
        this.secret = process.env.APP_SECRET;
    }
    generate(userId) {
        return jsonwebtoken_1.default.sign(userId, this.secret);
    }
}
exports.default = JwtProvider;
