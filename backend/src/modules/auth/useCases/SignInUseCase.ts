import AppError from "../../../shared/errors/AppError";
import IUseCase from "./ports/IUseCase";
import {inject, injectable} from "tsyringe"
import { IAuthRepository } from "../repositories/IAuthRepository";
import { ITokenManager } from "./ports/ITokenManager";
import { IEncryptManager } from "./ports/IEncryptManager";
import { IUserCredentials } from "../dtos/IUserCredentials";
import userConstants from "../constants/userConstants";

@injectable()
export default class SignInUseCase implements IUseCase {
	constructor(
		@inject("AuthRepository")
		private authRepository: IAuthRepository,
		@inject("TokenProvider")
		private tokenManager: ITokenManager,

		@inject("HashProvider")
		private encryptManager: IEncryptManager
	){}

	async execute({email, password}: IUserCredentials): Promise<string> {
		const foundUser = await this.authRepository.findByEmail(email)

		if(foundUser.length === 0) throw new AppError(userConstants.NOT_FOUND, 404)

		const isCorrectPassword = await this.encryptManager.compareHash(
			password,
			foundUser[0].password
		)

		if(!isCorrectPassword) throw new AppError(userConstants.INCORRECT_PASSWORD, 401)

		const token = this.tokenManager.generate(foundUser[0].id)

		return token
	}
}
