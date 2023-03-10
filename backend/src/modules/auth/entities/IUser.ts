export default interface IUser {
  readonly id: string;
  name: string | null;
  email: string;
  password: string;
}
