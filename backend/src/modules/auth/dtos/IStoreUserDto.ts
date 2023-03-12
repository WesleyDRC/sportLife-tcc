export interface IStoreUserDto {
  name: string | null;
  email: string;
  password: string;
  confirmPassword?: string
}
