// import { Request, Response, NextFunction } from 'express';
// import { verify } from 'jsonwebtoken'
// import AppError from '../../../../../shared/errors/AppError';
// const ensureAuthenticated = (
//   request: Request,
//   response: Response,
//   next: NextFunction,
// ): void => {
//   const authHeader = request.headers.authorization;
//   if (!authHeader || !/^Bearer \S*$/.test(authHeader)) {
//     throw new AppError('Token not found')
//   }
//   const [, token] = authHeader.split(' ')
//   if (token === 'undefined') {
//     throw new AppError('Token malformed')
//   }
//   const user_id = verify(token, process.env.APP_SECRET as string) as string;
//   request.user = {
//     id: user_id,
//   };
//   next();
// };
// export default ensureAuthenticated;
