"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError {
    constructor(message, statusCode = 400, metadata) {
        this.message = message;
        this.statusCode = statusCode;
        this.metadata = metadata;
    }
}
exports.default = AppError;
