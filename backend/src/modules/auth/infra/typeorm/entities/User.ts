import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"
import { UserAddress } from "../../../../users/infra/typeorm/entities/UserAddress";

@Entity()
export class User {
	@PrimaryColumn({
		type: "varchar",
		length: 255
	})
	id: string

	@Column({
		type: "varchar",
		length: 255,
		nullable: true
	})
	name: string

	@Column({
		type: "varchar",
		length: 255
	})
	email: string

	@Column({
		type: "varchar",
		length: 255
	})
	password: string

	@OneToOne(type => UserAddress, user => User)
	user_address: UserAddress

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}
