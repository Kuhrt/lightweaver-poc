import { BasicInfo } from '@/models/user/BasicInfo';
import { ProfileApi } from '@/services/api/ProfileApi';
import { useAuthFromServer } from '@/utils/auth';
import { cookies } from 'next/headers';
import ConnectionsList from '../components/connections/ConnectionsList';

export default async function Connections() {
  const token = await useAuthFromServer(cookies());
  const profileApi = new ProfileApi(token);
  const user = await profileApi.getCurrentUserProfile(true, true);

  if (!!!user?.connections) {
    throw new Error("Couldn't get user data");
  }

  const connections: BasicInfo[] = user.connections;

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      {!!connections?.length && <ConnectionsList connections={connections} />}
      {!!!connections?.length && (
        <div className="pt-14 z-10 min-h-full w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center">
          <h1>Connections</h1>
          <p className="text-2xl text-center">
            You have no connections to display.
          </p>
        </div>
      )}
    </main>
  );
}
