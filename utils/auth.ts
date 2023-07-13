import { DateTime } from 'luxon'

import { AuthorizationToken } from '@/models/identity/AuthorizationToken'
import { AUTH_TOKEN_NAME } from '@/constants/auth'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

export const verifyJwtToken = async (token: AuthorizationToken) => {
  if (!!!token.token || !!!token.tokenExpiry) {
    return false
  }

  const now = DateTime.utc()
  const tokenExpiration = DateTime.fromISO(token.tokenExpiry, { zone: 'utc' })
  if (tokenExpiration < now) {
    return false
  }

  // TODO: Verify actual token on server
  return true
}

export const useAuthFromServer = async (cookieList: ReadonlyRequestCookies) => {
  const tokenCookie = cookieList.get(AUTH_TOKEN_NAME)
  const token: AuthorizationToken | undefined =
    !!tokenCookie && !!tokenCookie.value
      ? JSON.parse(tokenCookie.value)
      : undefined
  const hasValidToken = !!token && (await verifyJwtToken(token))

  return hasValidToken ? token : undefined
}
