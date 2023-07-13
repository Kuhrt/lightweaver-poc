import Dimensions from '@/app/components/dimensions/Dimensions';
import { ProfileApi } from '@/services/api/ProfileApi';
import { useAuthFromServer } from '@/utils/auth';
import { cookies } from 'next/headers';

// @ts-ignore
export default async function RelationshipsPage({ searchParams }) {
  const guidsString = searchParams?.guids as string | undefined;
  if (!!!guidsString) {
    throw new Error('Must provide at least one user guid');
  }
  const guids = guidsString.split(',');
  const token = await useAuthFromServer(cookies());
  const profileApi = new ProfileApi(token);

  const [user, profiles] = await Promise.all([
    profileApi.getCurrentUserProfile(),
    profileApi.getUserProfiles(guids)
  ]);

  if (!!!user) {
    throw new Error("Couldn't get user data");
  } else if (!!!profiles) {
    throw new Error("Couldn't get user profiles");
  }

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Dimensions user={user} relationships={profiles} />
    </main>
  );
}
