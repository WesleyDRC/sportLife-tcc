import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../../../auth/infra/typeorm/entities/User";
import { OrderProducts } from "./OrderProducts";

import { v4 as uuidv4} from 'uuid'

@Entity("order_details")
export class OrderDetails {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

	@Column()
	user_id: string

	@ManyToOne(type => User, user => user.id, {
		eager: true
	})
	@JoinColumn({name: "user_id"})
	user: User
	// order.order => referenciando order dentro da entidade orderProducts o atributo order(FK)
	@OneToMany(type => OrderProducts, order => order.order,  {
    cascade: true, 
    eager: true,
  })
	order_products: OrderProducts[]

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}
