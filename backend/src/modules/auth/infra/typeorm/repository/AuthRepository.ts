import { IAuthRepository } from "../../../repositories/IAuthRepository";

import { IStoreUserDto } from "../../../dtos/IStoreUserDto";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { User } from "../entities/User";

import IUser from "../../../entities/IUser";

export class AuthRepository implements IAuthRepository {

	private ormRepository: Repository<User>;

	constructor() {
		this.ormRepository = AppDataSource.getRepository(User)
	}

	async create({ email, password }: IStoreUserDto): Promise<string> {
		const user = new User()

    user.email = email
    user.password = password

		await this.ormRepository.save(user)

		return Promise.resolve(user.id);
  }

	async findByEmail(email: string): Promise<Array<IUser> | []> {

    const foundUser = await this.ormRepository.find({
      where: {email}
    });

    return Promise.resolve(foundUser);
  }


}
