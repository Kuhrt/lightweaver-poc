import { AUTH_TOKEN_NAME } from '@/constants/auth'
import { AuthenticateResponseEnum } from '@/models/enums/AuthenticateResponseEnum'
import { AuthenticateRequest } from '@/models/identity/AuthenticateRequest'
import { AuthorizationToken } from '@/models/identity/AuthorizationToken'
import { IdentityApi } from '@/services/api/IdentityApi'
import { DateTime } from 'luxon'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body: AuthenticateRequest = await request.json()

  if (!!body.username && !!body.password) {
    const identityApi = new IdentityApi()

    // ** This is for testing purposes only and needs to be removed
    // ** Uncomment to test token
    // if (body.username === 'admin@admin.com' && body.password === 'admin') {
    //   const token: AuthorizationToken = {
    //     token: 'hubblubablub',
    //     tokenExpiry: DateTime.utc().plus({ days: 7 }).toISO() ?? undefined,
    //   }

    //   const response = NextResponse.json(true, {
    //     status: 200,
    //     headers: { 'content-type': 'application/json' },
    //   })

    //   response.cookies.set(AUTH_TOKEN_NAME, JSON.stringify(token))
    //   return response
    // }

    try {
      const res = await identityApi.authenticate(body)

      if (
        res?.response === AuthenticateResponseEnum.Success &&
        !!res.authToken.token
      ) {
        const response = NextResponse.json(true, {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })

        response.cookies.set(AUTH_TOKEN_NAME, JSON.stringify(res.authToken))
        return response
      }
    } catch (error) {
      console.info('Auth error:', error)
      // TODO: Better error handling?
      return NextResponse.json(false)
    }
  }

  return NextResponse.json(false)
}
