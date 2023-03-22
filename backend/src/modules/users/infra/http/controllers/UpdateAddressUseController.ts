import { Request, Response } from "express";
import { UpdateAddressUserUseCase } from "../../../useCases/UpdateAddressUserUseCase";
import { container } from "tsyringe";
import userConstants from "../../../constants/userConstants";

export default class UpdateAddressUseController {
  public async handle(request: Request, response: Response) {
    const {
      city,
      postal_code,
      country,
      road,
      neighborhood,
      number,
      complement,
    } = request.body;

    const userId = request.user.id;

    const updateAddressUserUseCase = container.resolve(UpdateAddressUserUseCase);

    await updateAddressUserUseCase.execute({
			userId,
      city,
      postal_code,
      country,
      road,
      neighborhood,
      number,
      complement,
    });

    return response.json({ message: userConstants.ADDRESS_SUCCESSFULLY_UPDATED });
  }
}
