import { container } from 'tsyringe';

import JwtProvider from './implementations/JwtProvider';
import { ITokenManager } from './models/ITokenManager';

container.registerSingleton<ITokenManager>('TokenProvider', JwtProvider);
