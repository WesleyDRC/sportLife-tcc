import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
	OneToOne
} from "typeorm";

import { CartItems } from "./CartItem";
import { User } from "../../../../auth/infra/typeorm/entities/User";

import {v4 as uuidv4} from "uuid";

@Entity()
export class Cart {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string

  @Column({ default: 0, type: "int" })
  totalItems: number;

  @Column({ default: 0, type: "float" })
  totalAmount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_id: string;

	@OneToOne(() => User, user => user.cart, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => CartItems, (cartItem) => cartItem.cart, { cascade: true })
  items: CartItems[];

	constructor() {
		if(!this.id) this.id = uuidv4()
	}
}
