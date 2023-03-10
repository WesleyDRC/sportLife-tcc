import {inject, injectable} from "tsyringe"
import AppError from "../../../shared/errors/AppError";
import userConstants from "../constants/userConstants";
import { IStoreUserDto } from "../dtos/IStoreUserDto";
import { IAuthRepository } from "../repositories/IAuthRepository";
import { IEncryptManager } from "./ports/IEncryptManager";
import { ITokenManager } from "./ports/ITokenManager";
import IUseCase from "./ports/IUseCase";
import User from "../entities/User";

@injectable()
export class SignUpUseCase implements IUseCase {
	constructor (
		@inject("AuthRepository")
		private authRepository: IAuthRepository,

		@inject("TokenProvider")
		private tokenManager: ITokenManager,

		@inject("HashProvider")
		private encryptManager: IEncryptManager
	) {}

	async execute({email, password}: IStoreUserDto): Promise<string> {
    const foundUser = await this.authRepository.findByEmail(email);
		if (foundUser.length > 0) {
      throw new AppError(userConstants.ALREADY_REGISTERED, 400);
    }

		const user = User.create(email, password)

		const encryptedPassword = await this.encryptManager.generateHash(
      user.password
    );

		const userId = await this.authRepository.create({
      email,
      password: encryptedPassword
    });

		const token = this.tokenManager.generate(userId);

		return token
	}
}
