/* eslint-disable no-underscore-dangle */
import AppError from '../../../shared/errors/AppError';
import mustAttentionIn from './user-validations';

class User {
  private readonly _name: string;

  private readonly _email: string;

  private readonly _password: string;

  private readonly _confirmPassword: string;

  private constructor(name: string, email: string, password: string, confirmPassword: string) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._confirmPassword = confirmPassword
  }

  public static create(name: string, email: string, password: string, confirmPassword: string): User {
    const attentionPoint = mustAttentionIn(email, password, confirmPassword);

    if (attentionPoint) {
      throw new AppError(attentionPoint, 400);
    }

    return new User(name, email, password, confirmPassword);
  }

  get password(): string {
    return this._password;
  }
}

export default User;
