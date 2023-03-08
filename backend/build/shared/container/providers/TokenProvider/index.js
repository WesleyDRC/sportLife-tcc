"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const JwtProvider_1 = __importDefault(require("./implementations/JwtProvider"));
tsyringe_1.container.registerSingleton('TokenProvider', JwtProvider_1.default);
