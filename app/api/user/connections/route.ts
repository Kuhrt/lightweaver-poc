import { ProfileApi } from '@/services/api/ProfileApi';
import { useAuthFromServer } from '@/utils/auth'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const token = await useAuthFromServer(cookies());
  const profileApi = new ProfileApi(token);
  const user = await profileApi.getCurrentUserProfile(true, true);

  return NextResponse.json(user?.connections);
}