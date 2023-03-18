import { Entity, Column, PrimaryColumn, OneToOne, OneToMany } from "typeorm";
import {v4 as uuidv4} from "uuid"
import { UserAddress } from "../../../../users/infra/typeorm/entities/UserAddress";
import { Assessments } from "../../../../products/infra/typeorm/entities/Assessments";

@Entity("user")
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
	firstName: string

	@Column({
		type: "varchar",
		length: 255,
		nullable: true
	})
	lastName: string

	@Column({
		type: "varchar",
		length: 11,
		nullable: true
	})
	CPF: string

	@Column({
		type: "varchar",
		length: 1,
		nullable: true
	})
	gender: string

	@Column({
		type: "date",
		nullable: true
	})
	dateBirth: string

	@Column({
		type: "varchar",
		length: 11,
		nullable: true
	})
	telephone: string

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

	@OneToMany(() => Assessments, assessments => assessments.user)
	assessments: Assessments[]

	constructor() {
		if(!this.id) this.id = uuidv4()
	}

}
