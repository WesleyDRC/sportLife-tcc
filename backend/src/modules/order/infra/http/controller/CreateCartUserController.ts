import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCartUseCase from "../../../useCases/CreateCartUserUseCase";

export default class CreateCartUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createCartUseCase = container.resolve(CreateCartUseCase);

    const userId = request.user.id;

    const { quantity, productId } = request.body

    const formatTime = (date) => {

      function addZero(n) {
          return n < 10 ? "0"+n : n
      }
      var result = date.getFullYear() +"-"+addZero(date.getMonth()+1)+"-"+ addZero(date.getDate())

      return result
  }

    const created_at = formatTime(new Date())

    const cart = await createCartUseCase.execute({quantity, created_at,userId, productId})

    return response.json({cart})
  }
}
