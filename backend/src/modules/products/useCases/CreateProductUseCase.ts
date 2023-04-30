import {inject, injectable} from "tsyringe"
import { IProductRepository } from "../repositories/IProductRepository";
import IStoreProductDTO from "../dtos/IStoreProductDTO";
import AppError from "../../../shared/errors/AppError";
import productConstants from "../contants/productConstants";

@injectable()
export default class CreateProductUseCase {
	constructor(
		@inject("ProductRepository")
		private productRepository: IProductRepository
	) {}

	public async execute({
    imageMain,
    imageSecondary,
    imageTertiary,
		name,
		description,
		sexo,
		colors,
		price,
		weight,
		height,
		width,
		views,
		sizes,
		brand,
		categories_id,
		inventory_id,
		discount_id,
	}: IStoreProductDTO) {

		if(!imageMain) {
      throw new AppError(productConstants.IMAGE_URL_REQUIRED, 400);
		}
		if(!imageSecondary) {
      throw new AppError(productConstants.IMAGE_URL_REQUIRED, 400);
		}
		if(!imageTertiary) {
      throw new AppError(productConstants.IMAGE_URL_REQUIRED, 400);
		}
		if(!name) {
      throw new AppError(productConstants.NAME_REQUIRED, 400);
		}
		if(!description) {
      throw new AppError(productConstants.DESCRIPTION_REQUIRED, 400);
		}
		if(!sexo) {
      throw new AppError(productConstants.SEX_REQUIRED, 400);
		}
		if(!colors) {
      throw new AppError(productConstants.COLOR_REQUIRED, 400);
		}
		if(!price) {
      throw new AppError(productConstants.PRICE_REQUIRED, 400);
		}
		if(!weight) {
      throw new AppError(productConstants.WEIGHT_REQUIRED, 400);
		}
		if(!height) {
      throw new AppError(productConstants.HEIGHT_REQUIRED, 400);
		}
		if(!width) {
      throw new AppError(productConstants.WIDTH_REQUIRED, 400);
		}
		if(!brand) {
      throw new AppError(productConstants.WIDTH_REQUIRED, 400);
		}
		if(!categories_id) {
      throw new AppError(productConstants.CATEGORY_REQUIRED, 400);
		}
		if(!inventory_id) {
      throw new AppError(productConstants.INVENTORY_REQUIRED, 400);
		}
		if(!discount_id) {
      throw new AppError(productConstants.DISCOUNT_REQUIRED, 400);
		}

		const product = await this.productRepository.create({
			imageMain,
			imageSecondary,
			imageTertiary,
			name,
			description,
			sexo,
			colors,
			price,
			weight,
			height,
			width,
			views,
			sizes,
			brand,
			categories_id,
			inventory_id,
			discount_id
		})

		return product
	}
}
