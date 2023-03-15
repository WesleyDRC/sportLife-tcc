import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Product } from "./Product";

@Entity("categories")
export class Categories {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255
	})
	name: string

	@OneToMany(() => Product, products => products.categories)
	products: Product[]

	constructor() {
		if (!this.id) this.id = uuidv4();
	}
}
