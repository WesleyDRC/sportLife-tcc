import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"
import { User } from "../../../../auth/infra/typeorm/entities/User";

@Entity("user_address")
export class UserAddress {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string

	@Column({
		type: "varchar",
		length: 255,
	})
	city: string

	@Column({
		type: "varchar",
		length: 255
	})
	postal_code: string

	@Column({
		type: "varchar",
		length: 255
	})
	country: string

	@Column({
		type: "varchar",
		length: 255
	})
	road: string

	@Column({
		type: "varchar",
		length: 255,
	})
	neighborhood: string

	@Column({
		type: "varchar",
		length: 255,
		nullable: true
	})
	complement: string

	@Column({
		type: "varchar",
		length: 255
	})
	number: string

	@Column()
	user_id: string

	@OneToOne(type=> User, user_address => UserAddress)
	@JoinColumn({name: "user_id"})
	user: User

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}
