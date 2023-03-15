import IListProductsDTO from "../dtos/IListProductDTO";
import { Product } from "../infra/http/typeorm/entities/Product";


export interface IProductRepository {
	listAll({ filter, category }: IListProductsDTO): Promise<Product[]>
	findById(id: string): Promise<Product | null>
}
