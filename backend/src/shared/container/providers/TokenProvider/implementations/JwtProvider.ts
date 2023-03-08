import { ITokenManager } from "../models/ITokenManager"
import jwt from 'jsonwebtoken';

class JwtProvider implements ITokenManager {
  private secret: string;

  constructor() {
    this.secret = (process.env.APP_SECRET as string)
  }

  generate(userId: string): string {
    return jwt.sign(userId, this.secret);
  }
}

export default JwtProvider;
