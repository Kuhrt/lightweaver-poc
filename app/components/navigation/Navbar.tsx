import { NavItem } from '@/models/navigation/NavItem';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { Button } from '../buttons/Button';

const navigation: NavItem[] = [
  { name: 'Profile', href: '/', pathNames: ["/", "/edit"] },
  { name: 'Connections', href: '/connections', pathNames: ["/connections", "/user", "/relationships"] }
];

export const Navbar = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo-lightweaver-black.svg"
              alt="LightWeaver logo"
              width={179}
              height={28}
              className="w-44"
            />
          </Link>
          <NavMenu navigation={navigation} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
