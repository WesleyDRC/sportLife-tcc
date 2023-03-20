import IUseCase from "./ports/IUseCase";
import {injectable, inject} from "tsyringe"
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export default class CreateAddressUserUseCase implements IUseCase{

	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	){}

	async execute({userId, city, postal_code, country, road, neighborhood, number, complement}) {
		return await this.usersRepository.createAddress(userId, city, postal_code, country, road, neighborhood, number, complement)
	}
}
