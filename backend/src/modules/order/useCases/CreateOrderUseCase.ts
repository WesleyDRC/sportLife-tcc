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
    const user = await this.usersRepository.getUserById(userId)

    if(!user) {
      throw new AppError("Esse usuário não existe!", 400)
    }

    const productsIds = products.map(product => {
      return { id: product.id };
    });

    const productsData = await this.productRepository.findAllById(productsIds);

    const productsFinal = productsData.map(productData => {
      const productFinal = products.find(
        productFind => productFind.id === productData.id,
      );

      return {
        product_id: productData.id,
        price: productData.price,
        quantity: productFinal?.quantity || 0,
      };
    });

    await this.productRepository.updateQuantity(products);

    productsFinal.forEach(async(product) => {
      await this.cartRepository.deleteProductCart(userId, product.product_id)
    })

    const order = await this.orderRepository.createOrder({
      user,
      products: productsFinal,
    });

    order.user = undefined;

    return order;
  }
}
