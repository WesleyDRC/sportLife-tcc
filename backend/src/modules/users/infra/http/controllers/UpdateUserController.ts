import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../../useCases/UpdateUserUseCase";
import { container } from "tsyringe";
import userConstants from "../../../constants/userConstants";

export default class UpdateUserController {
  public async handle(request: Request, response: Response) {
    const { firstName, lastName, CPF, gender, dateBirth, telephone } =
      request.body;
    const { userId } = request.params;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      userId,
      firstName,
      lastName,
      CPF,
      gender,
      dateBirth,
      telephone,
    });

    return response.json({ message: userConstants.SUCCESSFULLY_UPDATED });
  }
}
