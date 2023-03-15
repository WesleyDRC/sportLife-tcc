import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repositories/IProductRepository";
import { Product } from "../infra/http/typeorm/entities/Product";

@injectable()
export default class GetProductByIdUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  public async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);

		return product;
  }
}
