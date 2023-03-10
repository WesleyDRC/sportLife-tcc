import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"

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

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}
