export interface IUsersRepository {
  getUsers(): Promise<any>;

  getUserById(userId: string): Promise<any>;

  updateUser(
    userId: string,
    firstName: string,
    lastName: string,
    CPF: string,
    gender: string,
    dateBirth: string,
    telephone: string
  ): Promise<any>;

  getAddressUser(userId: string): Promise<any>;
	
  createAddress(
    userId: string,
    city: string,
    postal_code: string,
    country: string,
    telephone?: string,
    mobile?: string
  ): Promise<any>;
}
