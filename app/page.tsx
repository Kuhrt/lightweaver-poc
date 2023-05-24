import { UserApi } from '@/services/api/UserApi';
import Dimensions from './components/dimensions/Dimensions';

const userApi = new UserApi();

export default async function Home() {
  const user = await userApi.get();

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Dimensions user={user} />
    </main>
  );
}
