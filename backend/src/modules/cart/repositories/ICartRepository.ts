import { ICartItemDTO } from "../dtos/ICartItemDTO";
import { Cart } from "../infra/typeorm/entities/Cart";

export interface ICartRepository {
  getCart(userId: string): Promise<any>
  addProductToCart(userId: string, cartItemDTO: ICartItemDTO): Promise<Cart>;
  deleteProductCart(userId: string, productId: string)
  updateProductById(userId: string, productId: string, quantity: number, size: "PP" | "P" | "M" | "G" | "GG")
}
