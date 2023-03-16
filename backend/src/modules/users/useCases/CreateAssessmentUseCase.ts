import IUseCase from "./ports/IUseCase";
import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export default class CreateAssessmentUseCase implements IUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ stars, assessment, userId, productId }) {
    return await this.usersRepository.createAssessments(stars, assessment, userId, productId);
  }
}
