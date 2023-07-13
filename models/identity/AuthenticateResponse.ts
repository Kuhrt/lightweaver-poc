import { AuthenticateResponseEnum } from '../enums/AuthenticateResponseEnum'
import { User } from '../user/User'
import { AuthorizationToken } from './AuthorizationToken'

export interface AuthenticateResponse {
  user: User
  authToken: AuthorizationToken
  response: AuthenticateResponseEnum
}
