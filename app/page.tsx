import { cookies } from 'next/headers';

import { ProfileApi } from '@/services/api/ProfileApi';
import { useAuthFromServer } from '@/utils/auth';
import Dimensions from './components/dimensions/Dimensions';

export default async function Home() {
  const token = await useAuthFromServer(cookies());
  const profileApi = new ProfileApi(token);
  const user = await profileApi.getCurrentUserProfile();

  if (!!!user) {
    throw new Error("Couldn't get user data");
  }

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Dimensions user={user} />
    </main>
  );
}
