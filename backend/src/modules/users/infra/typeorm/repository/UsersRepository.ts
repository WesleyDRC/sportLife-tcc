import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import {IUsersRepository} from "../../../repositories/IUsersRepository";
import { User } from "../../../../auth/infra/typeorm/entities/User";
import { UserAddress } from "../entities/UserAddress";

export class UsersRepository implements IUsersRepository {
	private ormRepository: Repository<User>
	private ormRepositoryUserAddress: Repository<UserAddress>

	constructor() {
		this.ormRepository = AppDataSource.getRepository(User)
		this.ormRepositoryUserAddress = AppDataSource.getRepository(UserAddress)
	}

	public async getUsers(): Promise<any> {
		const response = await this.ormRepository.find()

		return Promise.resolve(response)
	}

	public async getUserById(userId): Promise<any> {

		const response = await this.ormRepository.find({
			where: {
				id: userId
			}
		})

		return Promise.resolve(response)
	}

	public async updateUser(userId: string, name: string, email: string): Promise<any> {
		const response = await this.ormRepository.createQueryBuilder("users")
		.update(User)
		.set({
			name,
			email
		})
		.where(
			"id = :userId", {userId}
		)
		.execute()
		return Promise.resolve(response)
	}

	public async getAddressUser(userId: string): Promise<any> {

		const response = await this.ormRepositoryUserAddress
			.createQueryBuilder("user_address")
			.leftJoinAndSelect('user_address.user', 'user')
			.where("user_address.userId = :userId", {userId})
			.getOne()
		return Promise.resolve(response)
	}

	public async createAddress(userId, city, postal_code, country, telephone, mobile):Promise<any> {
		const userAddress = new UserAddress()
    userAddress.user = userId
    userAddress.city = city
    userAddress.postal_code =  postal_code
    userAddress.country = country
    userAddress.telephone = telephone
    userAddress.mobile = mobile

		await this.ormRepositoryUserAddress.save(userAddress)

		return Promise.resolve(userAddress);
	}
}
