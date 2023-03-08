import { IStoreUserDto } from '../dtos/IStoreUserDto';
import IUser from '../entities/IUser';

export interface IAuthRepository {
  create(user: IStoreUserDto): Promise<string>;
  findByEmail(email: string): Promise<Array<IUser>| [] >;
}
