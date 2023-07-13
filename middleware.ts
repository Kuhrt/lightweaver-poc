import { NextRequest, NextResponse } from 'next/server'

import { AuthorizationToken } from '@/models/identity/AuthorizationToken'
import { verifyJwtToken } from './utils/auth'
import { AUTH_TOKEN_NAME } from './constants/auth'

const AUTH_PAGES = ['/login', '/forgot-password']
const isAuthPage = (url: string) =>
  AUTH_PAGES.some((page) => url.includes(page))

export async function middleware(request: NextRequest) {
  const { cookies, nextUrl, url } = request
  if (
    nextUrl.pathname.startsWith('/_next') || // exclude Next.js internals
    nextUrl.pathname.startsWith('/api') || //  exclude all API routes
    nextUrl.pathname.startsWith('/static') || // exclude static files
    /\.(.*)$/.test(nextUrl.pathname) // exclude all files in the public folder
  )
    return NextResponse.next()

  const tokenCookie = cookies.get(AUTH_TOKEN_NAME)
  const token: AuthorizationToken | undefined =
    !!tokenCookie && !!tokenCookie.value
      ? JSON.parse(tokenCookie.value)
      : undefined
  const hasValidToken = !!token && (await verifyJwtToken(token))
  const isAuthPageRequested = isAuthPage(url)

  if (isAuthPageRequested) {
    if (!hasValidToken) {
      const response = NextResponse.next()
      response.cookies.delete(AUTH_TOKEN_NAME)
      return response
    }

    return NextResponse.redirect(new URL(`/`, url))
  }

  if (!hasValidToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams)
    searchParams.set('next', nextUrl.pathname)

    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url),
    )
    response.cookies.delete(AUTH_TOKEN_NAME)

    return response
  }

  return NextResponse.next()
}
