import { useAuthFromServer } from '@/utils/auth'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ProfileApi } from '@/services/api/ProfileApi'

export async function POST(req: Request) {
  const token = await useAuthFromServer(cookies())
  const profileApi = new ProfileApi(token)

  const guids: string[] = await req.json()
  const { searchParams } = new URL(req.url)
  const isBasicInfo = !!searchParams.get('isBasicInfo')
  const populateConnections = !!searchParams.get('populateConnections')

  const profiles = await profileApi.getUserProfiles(
    guids,
    isBasicInfo,
    populateConnections,
  )

  return NextResponse.json(profiles)
}
