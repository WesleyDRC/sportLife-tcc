import { injectable, inject } from "tsyringe"
import { IUsersRepository } from "../repositories/IUsersRepository";
import IUseCase from "./ports/IUseCase";

@injectable()
export class UpdateUserUseCase implements IUseCase{

	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	){}

	async execute({userId, name, email}) {
		return await this.usersRepository.updateUser(userId, name, email)
	}
}
