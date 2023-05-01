import { injectable, inject } from "tsyringe";

import { IOrderRepository } from "../repositories/IOrderRepository";
import { IProductRepository } from "../../products/repositories/IProductRepository";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";
import { ICartRepository } from "../../cart/repositories/ICartRepository";

import IUseCase from "./ports/IUseCase";
import { OrderDetails } from "../infra/typeorm/entities/OrderDetails";
import AppError from "../../../shared/errors/AppError";

interface IProduct {
  id: string;
  quantity: number;
  size: string;
}

interface IRequest {
  userId: string;
  products: IProduct[];
}

@injectable()
export default class CreateOrderUseCase implements IUseCase {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository,

    @inject("ProductRepository")
    private productRepository: IProductRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("CartRepository")
    private cartRepository: ICartRepository
  ) {}

  async execute({ userId, products }: IRequest): Promise<OrderDetails> {
    try {
      const user = await this.usersRepository.getUserById(userId);

      if (!user) {
        throw new AppError("Esse usuário não existe!", 400);
      }

      const productsIds = products.map((product) => {
        return { id: product.id };
      });

      const productsData = await this.productRepository.findAllById(
        productsIds
      );

      const productBase = [];

      products.forEach((product) => {
        productsData.forEach((productData) => {
          const existingProductIndex = productBase.findIndex(
            (p) => p.product_id === productData.id && p.size === product.size
          );

          if (existingProductIndex !== -1) return;

          productBase.push({
            product_id: productData.id,
            price: productData.price,
            quantity: product?.quantity || 0,
            size: product.size,
          });

          return productBase;
        });
      });

      await this.productRepository.updateQuantity(products);

      for (const product of productBase) {
        try {
          await this.cartRepository.deleteProductCart(
            userId,
            product.product_id
          );
        } catch (error) {
          return error;
        }
      }

      const order = await this.orderRepository.createOrder({
        user,
        products: productBase,
      });

      order.user = undefined;

      return order;
    } catch (error) {
      console.log(error);
    }
  }
}
