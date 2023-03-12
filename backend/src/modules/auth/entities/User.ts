/* eslint-disable no-underscore-dangle */
import AppError from '../../../shared/errors/AppError';
import mustAttentionIn from './user-validations';

class User {
  // private readonly _name: string;

  private readonly _email: string;

  private readonly _password: string;

<<<<<<< HEAD
  private constructor(email: string, password: string) {
=======
  private readonly _confirmPassword: string;

  private constructor(name: string, email: string, password: string, confirmPassword: string) {
    this._name = name;
>>>>>>> backend
    this._email = email;
    this._password = password;
    this._confirmPassword = confirmPassword
  }

<<<<<<< HEAD
  public static create(email: string, password: string): User {
    const attentionPoint = mustAttentionIn( email, password);
=======
  public static create(name: string, email: string, password: string, confirmPassword: string): User {
    const attentionPoint = mustAttentionIn(email, password, confirmPassword);
>>>>>>> backend

    if (attentionPoint) {
      throw new AppError(attentionPoint, 400);
    }

<<<<<<< HEAD
    return new User(email, password);
=======
    return new User(name, email, password, confirmPassword);
>>>>>>> backend
  }

  get password(): string {
    return this._password;
  }
}

export default User;
