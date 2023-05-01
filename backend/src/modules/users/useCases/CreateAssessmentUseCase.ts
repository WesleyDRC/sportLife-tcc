import IUseCase from "./ports/IUseCase";
import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../repositories/IUsersRepository";
import { IOrderRepository } from "../../order/repositories/IOrderRepository";
import { IProductRepository } from "../../products/repositories/IProductRepository";

import AppError from "../../../shared/errors/AppError";

import productConstants from "../../products/contants/productConstants";
import userConstants from "../constants/userConstants";


@injectable()
export default class CreateAssessmentUseCase implements IUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("OrderRepository")
    private orderRepository: IOrderRepository,
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute({ stars, assessment, userId, productId }) {

    const existingProduct = await this.productRepository.findById(productId)

    if(!existingProduct) {
      throw new AppError(productConstants.PRODUCT_NOT_FOUND, 404)
    }

    const userOrders = await this.orderRepository.getOrder(userId)

    const existingOrderUser = userOrders.find(() => productId === productId)

    if(!existingOrderUser) {
      throw new AppError(userConstants.NEED_BUY_PRODUCT, 401)
    }

    if(assessment.trim() == ''){
      throw new AppError(userConstants.NEED_ADD_COMMENT_PRODUCT, 400)
    }

    const user = await this.usersRepository.getUserById(userId)

    if(!user[0].firstName){
      throw new AppError(userConstants.MUST_HAVE_NAME, 401)
    }

    return await this.usersRepository.createAssessments(stars, assessment, userId, productId);
  }
}
