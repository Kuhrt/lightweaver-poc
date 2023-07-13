import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Cookies from 'universal-cookie'
import { verifyJwtToken } from '@/utils/auth'
import { AUTH_TOKEN_NAME } from '@/constants/auth'
import { AuthorizationToken } from '@/models/identity/AuthorizationToken'

export function useAuth() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [authLoading, setAuthLoading] = useState(true)
  const [auth, setAuth] = useState<AuthorizationToken | undefined>(undefined)

  const getVerifiedToken = async () => {
    setAuthLoading(true)
    const cookies = new Cookies()
    const token: AuthorizationToken | undefined =
      cookies.get(AUTH_TOKEN_NAME) ?? undefined
    const hasValidToken = !!token && (await verifyJwtToken(token))

    if (hasValidToken) {
      setAuth(token)
    }

    setAuthLoading(false)
  }

  useEffect(() => {
    getVerifiedToken()
  }, [])

  useEffect(() => {
    getVerifiedToken()
  }, [pathname, searchParams])

  return { auth, authLoading }
}
