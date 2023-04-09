import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Product } from "../../../../products/infra/typeorm/entities/Product";
import { Cart } from "./Cart";

@Entity('cart_items')
export class CartItems {
  @PrimaryColumn({
    type: "varchar",
    length: 255,
  })
  id: string;

  @Column({
    type: "int",
  })
  quantity: number;

  @Column({
    type: "float",
  })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  product_id: string;

  @Column()
  cart_id: string;

  @ManyToOne(() => Cart, cart => cart.items)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @ManyToOne(() => Product, (products) => products.id)
  @JoinColumn({ name: "product_id" })
  product: Product;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}
