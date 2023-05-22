import { UserProfileInfo } from '@/models/user/UserProfileInfo';
import Image from 'next/image';

export type UserFlagProps = {
  info: UserProfileInfo;
};
export const UserFlag = ({ info }: UserFlagProps) => {
  return (
    <div className="flex items-center space-x-4">
      {!!info.pic && (
        <Image
          className="w-12 h-12 border-white border-2 shadow-glow rounded-full"
          src={info.pic}
          alt="Fake user"
          width={10}
          height={10}
        />
      )}
      <div className="text-white font-medium dark:text-white">
        <div>
          {info.first_name} {info.last_name}
        </div>
      </div>
    </div>
  );
};

export default UserFlag;
