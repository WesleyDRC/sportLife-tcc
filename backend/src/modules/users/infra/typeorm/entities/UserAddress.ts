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
		length: 255,
		nullable: true
	})
	telephone: string

	@Column({
		type: "varchar",
		length: 255,
		nullable: true
	})
	mobile: string

	@OneToOne(type=> User, user_address => UserAddress)
	@JoinColumn()
	user: User

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}