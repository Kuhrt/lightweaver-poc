import { useAuthFromServer } from '@/utils/auth'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ProfileApi } from '@/services/api/ProfileApi'

export async function GET(
  req: Request,
  { params: { guid } }: { params: { guid: string } },
) {
  const token = await useAuthFromServer(cookies())
  const profileApi = new ProfileApi(token)
  const { searchParams } = new URL(req.url)
  const isBasicInfo = !!searchParams.get('isBasicInfo')
  const populateConnections = !!searchParams.get('populateConnections')
  const user = await profileApi.getDefiniteUserProfile(
    guid,
    isBasicInfo,
    populateConnections,
  )

  return NextResponse.json(user)
}
