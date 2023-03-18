import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Product } from "./Product";

@Entity("products_inventory")
export class Inventory {
	@PrimaryColumn({
		type: "varchar",
		length: "255"
	})
	id: string;

	@Column({
		type: "int"
	})
	quantity: number

	@OneToMany(() => Product, products => products.inventory)
	products: Product[]

	constructor() {
		if(!this.id) this.id = uuidv4()
	}
}
