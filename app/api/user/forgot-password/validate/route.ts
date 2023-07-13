import { ValidateForgotPasswordRequest } from '@/models/identity/ValidateForgotPasswordRequest'
import { IdentityApi } from '@/services/api/IdentityApi'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body: ValidateForgotPasswordRequest = await request.json()
  const identityApi = new IdentityApi()

  try {
    const isValid = await identityApi.validateForgotPasswordRequest(body)

    const response = NextResponse.json(isValid, {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
    return response
  } catch (error) {
    return NextResponse.json(false)
  }
}
