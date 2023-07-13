import { ApiResponse } from '@/models/api/ApiResponse'
import { isApiResponseSuccessful } from '@/utils/api'
import { ApiError } from 'next/dist/server/api-utils'
import { ApiMethod } from '../../models/api/ApiMethod'
import { KeyValue } from '../../models/common/KeyValue'

export class BaseApiService {
  private _baseUrl: string
  private _authToken?: string

  private _headers: [string, string][] = []
  private _method: ApiMethod = 'GET'

  constructor(urlPrefix?: string, authToken?: string) {
    const baseUrl = !!process.env.NEXT_PUBLIC_API_BASE_URL
      ? process.env.NEXT_PUBLIC_API_BASE_URL
      : '/api/'
    this._baseUrl = !!urlPrefix ? baseUrl + urlPrefix : baseUrl
    this._authToken = authToken
  }

  // * GETTERS
  get headers(): string[][] {
    return this._headers
  }

  // * SETTERS
  set method(newMethod: ApiMethod) {
    this._method = newMethod
  }

  // * FLUENT
  public setHeaders(headers: KeyValue<string, string>[]): BaseApiService {
    for (const i in headers) {
      if (
        headers[i].hasOwnProperty('key') &&
        headers[i].hasOwnProperty('value')
      ) {
        this._headers.push([headers[i].key, headers[i].value])
      }
    }
    return this
  }

  public setMethod(newMethod: ApiMethod): BaseApiService {
    this._method = newMethod
    return this
  }

  // * METHODS
  private addAuthHeader() {
    const authHeaderExists = this._headers.some((h) => h[0] === 'Authorization')
    if (this._authToken && !authHeaderExists) {
      this._headers.push(['Authorization', `Bearer ${this._authToken}`])
    }
  }

  public resetHeaders(): void {
    this._headers = []
  }

  public request<T>(body?: T, isJson: boolean = true): RequestInit {
    const request: RequestInit = {
      headers: this._headers,
      method: this._method,
    }
    this.addAuthHeader()

    if (body) {
      request.body = isJson ? JSON.stringify(body) : (body as any)
    }

    return request
  }

  public async fetch<T>(input: RequestInfo | URL, init: RequestInit) {
    try {
      const apiResponse = await fetch(this._baseUrl + input, init)

      if (apiResponse.ok) {
        // * This catches any void returns that can't be parsed to json
        try {
          const response: ApiResponse<T> = await apiResponse.json()

          if (!isApiResponseSuccessful(response.statusCode)) {
            throw new ApiError(
              response.statusCode,
              !!response.message
                ? response.message
                : 'An unknown error has occurred',
            )
          }

          return response.result
        } catch (e) {
          throw new ApiError(500, 'An unknown error has occurred')
        }
      } else {
        throw new ApiError(apiResponse.status, apiResponse.statusText)
      }
    } catch (e) {
      throw e
    }
  }
}

export default BaseApiService
