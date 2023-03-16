import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Categories } from './Categories'
import { Discount } from "./Discount";
import { Inventory } from "./Inventory";
import { Sizes } from "./Sizes";
import { Assessments } from "./Assessments";

@Entity("products")
export class Product {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string

	@Column({
		type: "varchar",
		length: 255
	})
	imageUrl: string


	@Column({
		type: "varchar",
		length: 255
	})
	name: string

	@Column({
		type: "varchar",
		length: 255
	})
	description: string;

	@Column({
		type: "float"
	})
	price: number

	@Column({
		type: "varchar",
		length: "1"
	})
	sexo: string;

	@Column({
		type: "varchar",
		length: "255"
	})
	colors: string;

	@Column({
		type: "float"
	})
	weight: number;

	@Column({
		type: "float"
	})
	height: number;

	@Column({
		type: "float"
	})
	width: number;

	@Column()
	categories_id: string

	@Column()
	inventory_id: string

	@Column()
	discount_id: string

	@Column()
	sizes_id: string

	// Primeiro parametro retorna a entidade, o segundo parametro retorna a chave estrangeira
	@ManyToOne(() => Categories, (categories) => categories.id )
	@JoinColumn({name: "categories_id"})
	categories: Categories;

	@ManyToOne(() => Discount, (discount) => discount.id)
	@JoinColumn({ name: "discount_id"})
	discount: Discount

	@ManyToOne(() => Inventory, (inventory) => inventory.id)
	@JoinColumn({ name: "inventory_id"})
	inventory: Inventory

	@ManyToOne(() => Sizes, (sizes) => sizes.id)
	@JoinColumn({ name: "sizes_id"})
	sizes: Sizes

	@OneToMany(() => Assessments, assessments => assessments.product)
	assessments: Assessments[]

	constructor() {
		if(!this.id) this.id = uuidv4()
	}
}
