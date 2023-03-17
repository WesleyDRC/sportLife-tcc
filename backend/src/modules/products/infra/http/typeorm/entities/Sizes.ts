import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Product } from "./Product";

@Entity("sizes")
export class Sizes {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255
	})
	sizes: string

	@OneToMany(() => Product, products => products.sizes)
	products: Product[]

	constructor() {
		if (!this.id) this.id = uuidv4();
	}
}
