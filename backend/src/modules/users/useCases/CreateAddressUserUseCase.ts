import IUseCase from "./ports/IUseCase";
import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import userConstants from "../constants/userConstants";
import AppError from "../../../shared/errors/AppError";

@injectable()
export default class CreateAddressUserUseCase implements IUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    userId,
    city,
    postal_code,
    state,
    road,
    neighborhood,
    number,
    complement,
  }) {

		const foundAddressUser = await this.usersRepository.getAddressUser(userId)

		if(!foundAddressUser) {
			return await this.usersRepository.createAddress(
				userId,
				city,
				postal_code,
				state,
				road,
				neighborhood,
				number,
				complement
			);
		}

		if(Object.keys(foundAddressUser).length > 0) {
				throw new AppError(userConstants.ALREADY_ADDRESS, 400);
		}



  }
}
