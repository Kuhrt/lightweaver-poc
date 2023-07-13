import { AuthorizationToken } from '@/models/identity/AuthorizationToken'
import { User } from '@/models/user/User'
import BaseApiService from './BaseApiService'

export class ProfileApi extends BaseApiService {
  constructor(authToken?: AuthorizationToken) {
    super('Profile/', authToken?.token)
  }

  // * GET
  public async getCurrentUserProfile(
    isBasicInfo = false,
    populateConnections = false,
  ) {
    this.method = 'GET'
    this.resetHeaders()

    const request = this.request<void>()
    const params = new URLSearchParams({
      isBasicInfo: isBasicInfo.toString(),
      populateConnections: populateConnections.toString(),
    })
    return await this.fetch<User>(`current?${params}`, request)
  }

  public async getDefiniteUserProfile(
    guid: string,
    isBasicInfo = false,
    populateConnections = false,
  ) {
    this.method = 'GET'
    this.resetHeaders()

    const request = this.request<void>()
    const params = new URLSearchParams({
      isBasicInfo: isBasicInfo.toString(),
      populateConnections: populateConnections.toString(),
    })
    return await this.fetch<User>(`${guid}?${params}`, request)
  }

  public async getUserProfiles(
    guids: string[],
    isBasicInfo = false,
    populateConnections = false,
  ) {
    this.method = 'GET'
    this.resetHeaders()

    const request = this.request<void>()
    const params = new URLSearchParams({
      isBasicInfo: isBasicInfo.toString(),
      populateConnections: populateConnections.toString(),
    })
    guids.forEach((guid) => params.append('userGuids', guid))

    return await this.fetch<User[]>(`profiles?${params}`, request)
  }
}
