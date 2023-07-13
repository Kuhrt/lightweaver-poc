import Dimensions from '@/app/components/dimensions/Dimensions';
import { ProfileApi } from '@/services/api/ProfileApi';
import { useAuthFromServer } from '@/utils/auth';
import { cookies } from 'next/headers';

type ConnectionProfileProps = {
  params: {
    guid: string;
  };
};

export default async function ConnectionProfile({
  params: { guid }
}: ConnectionProfileProps) {
  const token = await useAuthFromServer(cookies());
  const profileApi = new ProfileApi(token);
  const user = await profileApi.getDefiniteUserProfile(guid);

  if (!!!user) {
    throw new Error("Couldn't get user data");
  }

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Dimensions user={user} isAnotherUser />
    </main>
  );
}
