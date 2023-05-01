import { User } from "../../auth/infra/typeorm/entities/User";

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
  size: string;
}

export default interface ICreateOrderDTO {
  user: User;
  products: IProduct[];
}
