import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import {IUsersRepository} from "../../../repositories/IUsersRepository";
import { User } from "../../../../auth/infra/typeorm/entities/User";

export class UsersRepository implements IUsersRepository {
	private ormRepository: Repository<User>

	constructor() {
		this.ormRepository = AppDataSource.getRepository(User)
	}

	public async getUsers(): Promise<any> {
		const response = await this.ormRepository.find()

		return Promise.resolve(response)
	}
}
