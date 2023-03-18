import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Product } from "./Product";
import { User } from "../../../../auth/infra/typeorm/entities/User";

@Entity("assessments")
export class Assessments {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string;

	@Column({
		type: "int",
	})
	stars: number

	@Column({
		type: "varchar",
		length: 255
	})
	assessments: string

	@Column()
	user_id: string

	@Column()
	product_id: string

	@ManyToOne(() => User, (user) => user.id)
	@JoinColumn({ name: "user_id"})
	user: User

	@ManyToOne(() => Product, (product) => product.id)
	@JoinColumn({ name: "product_id"})
	product: Product

	constructor() {
		if (!this.id) this.id = uuidv4();
	}
}
