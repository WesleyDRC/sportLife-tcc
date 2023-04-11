import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Categories } from './Categories'
import { Discount } from "./Discount";
import { Inventory } from "./Inventory";
import { Assessments } from "./Assessments";
import { CartItems } from "../../../../cart/infra/typeorm/entities/CartItem";
import { OrderProducts } from "../../../../order/infra/typeorm/entities/OrderProducts";

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
	imageMain: string

	@Column({
		type: "varchar",
		length: 255
	})
	imageSecondary: string

	@Column({
		type: "varchar",
		length: 255
	})
	imageTertiary: string

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

	@Column({
		type: "int"
	})
	views: number;

	@Column({
		type: "varchar",
		length: 255
	})
	sizes: string;

	@Column()
	categories_id: string

	@Column()
	inventory_id: string

	@Column()
	discount_id: string

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

	@OneToMany(() => Assessments, assessments => assessments.product)
	assessments: Assessments[]

	@OneToMany(() => CartItems, cart_items => cart_items.product)
	cart_items: CartItems[]

	@OneToMany( type => OrderProducts, order => order.product)
	order_products: OrderProducts[]

	constructor() {
		if(!this.id) this.id = uuidv4()
	}
}
