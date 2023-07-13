import { BuildProfileApi } from '@/services/api/BuildProfileApi'
import { useAuthFromServer } from '@/utils/auth'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum'

export async function GET(req: Request) {
  const token = await useAuthFromServer(cookies())
  const buildProfileApi = new BuildProfileApi(token)
  const { searchParams } = new URL(req.url)
  const dimensionType = searchParams.get('dimensionType') as ProfileElementUnion
  const dimensionCategory = await buildProfileApi.getDefiniteDimension(
    dimensionType,
  )

  return NextResponse.json(dimensionCategory)
}

export async function POST(req: Request) {
  const token = await useAuthFromServer(cookies())
  const buildProfileApi = new BuildProfileApi(token)
  const body = await req.json()

  try {
    await buildProfileApi.saveDimensions(body)
    return NextResponse.json(true)

  } catch (error) {
    console.info('Unknown error:', error)
    return NextResponse.json(false)
  }
}
