import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import IUseCase from "./ports/IUseCase";

@injectable()
export class UpdateUserUseCase implements IUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    userId,
    firstName,
    lastName,
    CPF,
    gender,
    dateBirth,
    telephone,
  }) {

    

    return await this.usersRepository.updateUser(
      userId,
      firstName,
      lastName,
      CPF,
      gender,
      dateBirth,
      telephone
    );
  }
}
