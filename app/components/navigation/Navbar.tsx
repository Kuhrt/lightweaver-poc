import { NavItem } from '@/models/navigation/NavItem';
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
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LightWeaver
          </span>
        </Link>
        <NavMenu navigation={navigation} />
      </div>
    </nav>
  );
};

export default Navbar;
