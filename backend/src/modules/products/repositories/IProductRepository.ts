import IListProductsDTO from "../dtos/IListProductDTO";
import IStoreProductDTO from "../dtos/IStoreProductDTO";
import { Product } from "../infra/typeorm/entities/Product";
import IUpdateProductsQuantityDTO from "../dtos/IUpdateProductsQuantityDTO";

interface IFindProducts {
  id: string;
}

export interface IProductRepository {
  listAll({ filter, category }: IListProductsDTO): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  getAssessments(id: string): Promise<any>;
  create({
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
    sizes,
    categories_id,
    inventory_id,
    discount_id,
  }: IStoreProductDTO): Promise<Product>;
  updateViews(id): Promise<any>
  findAllById(products: IFindProducts[]): Promise<Product[]>;
  updateQuantity(products: IUpdateProductsQuantityDTO[]): Promise<Product[]>;
  updateQuantityInventory(id: string, newQuantity: number): Promise<any>
}
