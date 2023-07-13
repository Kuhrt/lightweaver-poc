import { CreateForgotPasswordRequest } from '@/models/identity/CreateForgotPasswordRequest'
import { IdentityApi } from '@/services/api/IdentityApi'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body: CreateForgotPasswordRequest = await request.json()
  const identityApi = new IdentityApi()

  try {
    await identityApi.createForgotPasswordRequest(body)

    const response = NextResponse.json(true, {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
    return response
  } catch (error) {
    return NextResponse.json(false)
  }
}
