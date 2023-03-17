import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repositories/IProductRepository";
import { Product } from "../infra/http/typeorm/entities/Product";

@injectable()
export default class UpdateViewsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  public async execute(id: string): Promise<Product[]> {
    const product = await this.productRepository.updateViews(id);
    return product;
  }
}
