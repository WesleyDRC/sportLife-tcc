import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../../../../auth/infra/typeorm/entities/User";
import { UserAddress } from "../entities/UserAddress";
import { Assessments } from "../../../../products/infra/http/typeorm/entities/Assessments";

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  private ormRepositoryUserAddress: Repository<UserAddress>;
  private ormRepositoryAssessments: Repository<Assessments>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
    this.ormRepositoryUserAddress = AppDataSource.getRepository(UserAddress);
    this.ormRepositoryAssessments = AppDataSource.getRepository(Assessments);
  }

  public async getUsers(): Promise<any> {
    const response = await this.ormRepository.find();

    return Promise.resolve(response);
  }

  public async getUserById(userId): Promise<any> {
    const response = await this.ormRepository.find({
      where: {
        id: userId,
      },
    });

    return Promise.resolve(response);
  }

  public async updateUser(
    userId: string,
    firstName: string,
    lastName: string,
    CPF: string,
    gender: string,
    dateBirth: string,
    telephone: string
  ): Promise<any> {
    const response = await this.ormRepository
      .createQueryBuilder("users")
      .update(User)
      .set({
        firstName,
        lastName,
        CPF,
        gender,
        dateBirth,
        telephone,
      })
      .where("id = :userId", { userId })
      .execute();
    return Promise.resolve(response);
  }

  public async getAddressUser(userId: string): Promise<any> {
    const response = await this.ormRepositoryUserAddress
      .createQueryBuilder("user_address")
      .leftJoinAndSelect("user_address.user", "user")
      .where("user_address.user_id = :userId", { userId })
      .getOne();
    return Promise.resolve(response);
  }

  public async createAddress(userId, city, postal_code, country): Promise<any> {
    const userAddress = new UserAddress();
    userAddress.user_id = userId;
    userAddress.city = city;
    userAddress.postal_code = postal_code;
    userAddress.country = country;

    await this.ormRepositoryUserAddress.save(userAddress);

    return Promise.resolve(userAddress);
  }

  public async createAssessments(
    stars: number,
    assessment: string,
    userId: string,
    productId: string
  ): Promise<any> {
    const userAssessments = new Assessments();

    userAssessments.stars = stars;
    userAssessments.assessments = assessment;
    userAssessments.user_id = userId;
    userAssessments.product_id = productId;

    await this.ormRepositoryAssessments.save(userAssessments);

    return Promise.resolve(userAssessments);
  }
}
