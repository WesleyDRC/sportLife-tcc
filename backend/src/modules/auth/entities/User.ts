/* eslint-disable no-underscore-dangle */
import AppError from '../../../shared/errors/AppError';
import mustAttentionIn from './user-validations';

class User {
  // private readonly _name: string;

  private readonly _email: string;

  private readonly _password: string;

  private constructor(email: string, password: string) {
    this._email = email;
    this._password = password;
  }

  public static create(email: string, password: string): User {
    const attentionPoint = mustAttentionIn( email, password);

    if (attentionPoint) {
      throw new AppError(attentionPoint, 400);
    }

    return new User(email, password);
  }

  get password(): string {
    return this._password;
  }
}

export default User;
