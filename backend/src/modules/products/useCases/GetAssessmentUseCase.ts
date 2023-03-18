import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repositories/IProductRepository";
import { Product } from "../infra/typeorm/entities/Product";

@injectable()
export default class GetAssessmentUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  public async execute(id: string): Promise<Product> {
    const assessments = await this.productRepository.getAssessments(id);

		return assessments;
  }
}
