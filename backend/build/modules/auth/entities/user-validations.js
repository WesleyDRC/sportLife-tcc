"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userConstants_1 = __importDefault(require("../constants/userConstants"));
function hasMinNameLengthRequired(name) {
    if (name.length < 10)
        return false;
    return true;
}
function hasCorrectEmailFormatRequired(email) {
    const [beforeDomain, afterDomain] = email.split('@');
    if (!beforeDomain || !afterDomain)
        return false;
    return true;
}
function hasMinPasswordLengthRequired(password) {
    if (password.length < 10)
        return false;
    return true;
}
function mustAttentionIn(name, email, password) {
    if (!hasMinNameLengthRequired(name))
        return userConstants_1.default.INVALID_NAME_ERROR;
    if (!hasCorrectEmailFormatRequired(email))
        return userConstants_1.default.INVALID_EMAIL_ERROR;
    if (!hasMinPasswordLengthRequired(password))
        return userConstants_1.default.INVALID_PASSWORD_ERROR;
}
exports.default = mustAttentionIn;
