import IUseCase from "./ports/IUseCase";
import {injectable, inject} from "tsyringe"
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export default class GetAddressUserUseCase implements IUseCase{

	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	){}

	async execute(userId: string) {
		return await this.usersRepository.getAddressUser(userId)
	}
}
