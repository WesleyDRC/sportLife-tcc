export interface ICartDTO {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}
