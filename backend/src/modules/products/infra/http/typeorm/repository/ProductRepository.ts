import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../../../../../../shared/infra/typeorm";
import IListProductsDTO from "../../../../dtos/IListProductDTO";
import {IProductRepository} from "../../../../repositories/IProductRepository";
import { Product } from "../entities/Product";


export class ProductRepository implements IProductRepository {
	private ormRepository: Repository<Product>

	constructor() {
		this.ormRepository = AppDataSource.getRepository(Product)
	}

	async listAll({ category }: IListProductsDTO): Promise<Product[]> {
		const productQuery = this.ormRepository
			.createQueryBuilder("products")
			.leftJoinAndSelect("products.categories", "categories")
			.leftJoinAndSelect("products.discount", "discount")
			.leftJoinAndSelect("products.inventory", "inventory")

			if(category) {
				productQuery.where({ categories: category})
			}

			const products = await productQuery.getMany()

			return products
	}

	async findById(id: string): Promise<Product | null> {
		const productQuery = this.ormRepository
			.createQueryBuilder("products")
			.leftJoinAndSelect("products.categories", "categories")
			.leftJoinAndSelect("products.discount", "discount")
			.leftJoinAndSelect("products.inventory", "inventory")
			.where("products.id = :id", {id})
			.getOne()
			return productQuery
	}


}
