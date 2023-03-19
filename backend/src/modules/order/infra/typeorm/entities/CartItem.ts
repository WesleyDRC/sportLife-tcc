import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn,ManyToOne} from "typeorm";
import { v4 as uuidv4} from 'uuid'
import { User } from "../../../../auth/infra/typeorm/entities/User";
import { Product } from "../../../../products/infra/typeorm/entities/Product";

@Entity("cart_items")
export class CartItems {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string

	@Column({
		type: "int"
	})
	quantity: Number

	@Column({
		type: "timestamp"
	})
	created_at: Date

	@Column()
	user_id: string

	@Column()
	product_id: string

	@ManyToOne(() => User, (user) => user.id)
	@JoinColumn({ name: "user_id"})
	user: User

	@ManyToOne(() => Product, (products) => products.id)
	@JoinColumn({ name: "product_id"})
	product: Product

	// @OneToOne(type => User, cart_items => CartItems)
	// @JoinColumn({ name: "user_id"})
	// user: User

	// @OneToOne(type => Product, products => Product)
	// @JoinColumn({ name: "product_id"})

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}
