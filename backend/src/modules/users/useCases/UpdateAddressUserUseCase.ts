import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import IUseCase from "./ports/IUseCase";

@injectable()
export class UpdateAddressUserUseCase implements IUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    userId,
    city,
    postal_code,
    road,
    state,
    neighborhood,
    number,
    complement
  }) {
    return await this.usersRepository.updateAddress(
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
}
