import { Request, Response } from "express";

import { container } from "tsyringe";

import DeleteProductCartUseCase from "../../../useCases/DeleteProductCartUseCase";

import cartConstants from "../../../contants/cartConstants";

export default class DeleteProductCartController {
	public async handle(request: Request, response: Response): Promise<Response> {

		const userId = request.user.id;
		const { productId } = request.params
		const data = {
			userId,
			productId
		}

		const deleteProductCartUseCase = container.resolve(DeleteProductCartUseCase)

		await deleteProductCartUseCase.execute(data)

		return response.status(200).json({message: cartConstants.PRODUCT_DELETED_CART_SUCESSFULLY})
	}
}
