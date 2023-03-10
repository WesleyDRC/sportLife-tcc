import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import IUseCase from "./ports/IUseCase";

@injectable()
export default class GetAllUsersUseCase implements IUseCase {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	){}

	async execute() {
		return await this.usersRepository.getUsers()
	}
}
