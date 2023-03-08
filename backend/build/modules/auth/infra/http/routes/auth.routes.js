"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const SignUpController_1 = __importDefault(require("../controllers/SignUpController"));
const authRoutes = (0, express_1.Router)();
const signUpController = new SignUpController_1.default();
authRoutes.post("/signup", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string(),
        email: celebrate_1.Joi.string(),
        password: celebrate_1.Joi.string(),
    },
}), signUpController.handle);
exports.default = authRoutes;
