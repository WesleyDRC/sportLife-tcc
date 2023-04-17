import { Request, Response } from "express";

import { ICartItemDTO } from "../../../dtos/ICartItemDTO";

import { container } from "tsyringe";

import CreateCartUseCase from "../../../useCases/CreateCartUseCase";

export default class CreateCartController {
	public async handle(request: Request, response: Response): Promise<Response> {

		const userId = request.user.id;

		const { products, size } = request.body

		const cartItem: ICartItemDTO = {
			productId: products[0].productId,
			quantity: products[0].quantity,
			size: products[0].size,
		}

		const data = {
			userId,
			cartItem
		}

		const createCartUseCase = container.resolve(CreateCartUseCase)

		const createCart = await createCartUseCase.execute(data)

		return response.status(201).json({cart: createCart})
	}
}
