import { NavItem } from '@/models/navigation/NavItem';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';

const navigation: NavItem[] = [
  { name: 'My Profile', href: '#' },
  { name: 'My Spectrum', href: '#' }
];

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-lightweaver-black.svg" alt="LightWeaver logo" width={179} height={28} className="w-44" />
        </Link>
        <NavMenu navigation={navigation} />
      </div>
    </nav>
  );
};

export default Navbar;
