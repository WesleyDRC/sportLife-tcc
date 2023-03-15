import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repositories/IProductRepository";
import { Product } from "../infra/http/typeorm/entities/Product";

@injectable()
export default class ListProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  public async execute(category?: string): Promise<Product[]> {
    const products = await this.productRepository.listAll({ category });

    return products;
  }
}
