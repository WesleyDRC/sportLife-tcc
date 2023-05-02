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
    state: string,
    road:string,
    neighborhood:string,
    number: number,
    complement?:string,
  ): Promise<any>;

  updateAddress(
    userId,
    city,
    postal_code,
    state,
    road,
    neighborhood,
    number,
    complement
  ) : Promise<any>

  createAssessments(
    stars: number,
    assessment: string,
    userId: string,
    productId: string
  ): Promise<any>
}
