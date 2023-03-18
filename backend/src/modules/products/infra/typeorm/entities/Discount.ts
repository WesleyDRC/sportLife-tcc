import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Product } from "./Product";

@Entity("discount_product")
export class Discount {
	@PrimaryColumn({
		type: "varchar",
		length: "255"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255
	})
	name: string;

	@Column({
		type: "varchar",
		length: 255
	})
	description: string;

	@Column({
		type: "float",
	})
	discount: number

	@Column({
		type: "tinyint"
	})
	active: number

	@OneToMany(() => Product, products => products.discount)
	products: Product[]

	constructor() {
		if(!this.id) this.id = uuidv4()
	}
}
