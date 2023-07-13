import { AuthorizationToken } from '@/models/identity/AuthorizationToken'
import BaseApiService from './BaseApiService'
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum'
import { ProfileElementPayload } from '@/models/elements/ProfileElementDetail'
import { Dimension } from '@/models/dimensions/Dimension'
import { Element } from '@/models/dimensions/Element'
import { UpdateProfileDimensionRequest } from '@/models/dimensions/UpdateProfileDimensionRequest'

export class BuildProfileApi extends BaseApiService {
  constructor(authToken?: AuthorizationToken) {
    super('BuildProfile/', authToken?.token)
  }

  // * GET
  public async getDefiniteDimension(dimensionType: ProfileElementUnion) {
    this.method = 'GET'
    this.resetHeaders()

    const request = this.request<void>()
    const params = new URLSearchParams({
      dimensionType: dimensionType,
    })
    return await this.fetch<Dimension<Element>>(`dimension?${params}`, request)
  }

  // * POST
  public async saveDimensions(body: UpdateProfileDimensionRequest) {
    this.method = 'POST'
    this.resetHeaders()
    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }])
    const request = this.request<UpdateProfileDimensionRequest>(body)
    return await this.fetch<void>('save-dimension', request)
  }
}
