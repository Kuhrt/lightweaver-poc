import { ApiMethod } from '../../models/api/ApiMethod'
import { KeyValue } from '../../models/common/KeyValue'

export class BaseApiService {
  private _baseUrl: string

  private _headers: [string, string][] = []
  private _method: ApiMethod = 'GET'

  constructor(urlPrefix?: string) {
    const baseUrl = '/api/'
    this._baseUrl = !!urlPrefix ? baseUrl + urlPrefix : baseUrl
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
  public resetHeaders(): void {
    this._headers = []
  }

  public request<T>(body?: T, isJson: boolean = true): RequestInit {
    const request: RequestInit = {
      headers: this._headers,
      method: this._method,
    }

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
          const response: T = await apiResponse.json()
          return response
        } catch (e) {
          return
        }
      } else {
        throw 'An unknown error has occurred'
      }
    } catch (e) {
      throw e
    }
  }
}

export default BaseApiService
