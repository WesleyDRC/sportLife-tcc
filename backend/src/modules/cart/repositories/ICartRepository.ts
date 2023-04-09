import { ICartItemDTO } from "../dtos/ICartItemDTO";
import { Cart } from "../infra/typeorm/entities/Cart";

export interface ICartRepository {
  getCart(userId: string): Promise<Cart>
  addProductToCart(userId: string, cartItemDTO: ICartItemDTO): Promise<Cart>;
}
