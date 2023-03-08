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
const tsyringe_1 = require("tsyringe");
const SignUpUseCase_1 = require("../../../useCases/SignUpUseCase");
class SignUpController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const signUpUseCase = tsyringe_1.container.resolve(SignUpUseCase_1.SignUpUseCase);
            const { name, email, password } = request.body;
            const token = yield signUpUseCase.execute({ name, email, password });
            return response.json({ token });
        });
    }
}
exports.default = SignUpController;
