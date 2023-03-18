import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repositories/IProductRepository";
import { Product } from "../infra/typeorm/entities/Product";

@injectable()
export default class ListProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  public async execute(
    category?: string,
    orderBy?: string,
    filter?: { [key: string]: string }
  ): Promise<Product[]> {
    const products = await this.productRepository.listAll({ category, orderBy, filter });
    return products;
  }
}
