import { AuthenticateRequest } from '@/models/identity/AuthenticateRequest'
import { AuthenticateResponse } from '@/models/identity/AuthenticateResponse'
import { AuthorizationToken } from '@/models/identity/AuthorizationToken'
import { CreateForgotPasswordRequest } from '@/models/identity/CreateForgotPasswordRequest'
import { ResetForgottenPasswordRequest } from '@/models/identity/ResetForgottenPasswordRequest'
import { ValidateForgotPasswordRequest } from '@/models/identity/ValidateForgotPasswordRequest'
import BaseApiService from './BaseApiService'

export class IdentityApi extends BaseApiService {
  constructor(authToken?: AuthorizationToken) {
    super('Identity/', authToken?.token)
  }

  // * POST
  public async authenticate(authRequest: AuthenticateRequest) {
    this.method = 'POST'
    this.resetHeaders()

    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }])
    const request = this.request<AuthenticateRequest>(authRequest)
    return await this.fetch<AuthenticateResponse>('authenticate', request)
  }

  public async createForgotPasswordRequest(req: CreateForgotPasswordRequest) {
    this.method = 'POST'
    this.resetHeaders()

    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }])
    const request = this.request<CreateForgotPasswordRequest>(req)
    return await this.fetch<void>('forgot-password/create', request)
  }

  public async validateForgotPasswordRequest(
    req: ValidateForgotPasswordRequest,
  ) {
    this.method = 'POST'
    this.resetHeaders()

    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }])
    const request = this.request<ValidateForgotPasswordRequest>(req)
    return await this.fetch<boolean>('forgot-password/validate', request)
  }

  public async changePassword(req: ResetForgottenPasswordRequest) {
    this.method = 'POST'
    this.resetHeaders()

    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }])
    const request = this.request<ResetForgottenPasswordRequest>(req)
    return await this.fetch<void>('forgot-password/change-password', request)
  }
}
