import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'
import AppError from '../../../../../shared/errors/AppError';
import { User } from '../../typeorm/entities/User';
import { AuthRepository } from '../../typeorm/repository/AuthRepository';
import { AppDataSource } from '../../../../../shared/infra/typeorm';

const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !/^Bearer \S*$/.test(authHeader)) {
    throw new AppError('Token not found', 401)
  }

  const [, token] = authHeader.split(' ')

  if (token === 'undefined') {
    throw new AppError('Token malformed', 401)
  }

  try {

  const user_id = verify(token, process.env.APP_SECRET as string) as string;

  const authRepository = AppDataSource.getRepository(User)

  const user = await authRepository.find({
    where: {id: user_id}
  })


  if (user.length === 0) {
    throw new AppError('User not found', 401)
  }

  request.user = {
    id: user_id,
  };

  next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }

};

export default ensureAuthenticated;
