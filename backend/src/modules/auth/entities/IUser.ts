export default interface IUser {
  readonly id: string;
  firstName?: string;
  lastName?: string;
  CPF?: string;
  gender?: string;
  dateBirth?: string;
  telephone?: string;
  email: string;
  password: string;
}
