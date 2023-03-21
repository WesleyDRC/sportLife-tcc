import IListProductsDTO from "../dtos/IListProductDTO";
import IStoreProductDTO from "../dtos/IStoreProductDTO";
import { Product } from "../infra/typeorm/entities/Product";

export interface IProductRepository {
  listAll({ filter, category }: IListProductsDTO): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  getAssessments(id: string): Promise<any>;
  create({
    imageMain,
    imageSecondary,
    imageTertiary,
    imageQuaternary,
    name,
    description,
    sexo,
    colors,
    price,
    weight,
    height,
    width,
    categories_id,
    inventory_id,
    discount_id,
    sizes_id,
  }: IStoreProductDTO): Promise<Product>;
  updateViews(id): Promise<any>
}
