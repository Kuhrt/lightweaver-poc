'use client';

import Link from 'next/link';
import { Collapse } from 'flowbite';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavItem } from '@/models/navigation/NavItem';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '../buttons/Button';

export type NavMenuProps = {
  navigation: NavItem[];
};
export const NavMenu = ({ navigation }: NavMenuProps) => {
  const pathname = usePathname();
  const { auth, authLoading } = useAuth();
  const [collapse, setCollapse] = useState<Collapse | undefined>(undefined);

  useEffect(() => {
    const navElement = document.getElementById('navbar-default');
    const navButton = document.getElementById('navbar-default-toggle');

    if (navElement && navButton) {
      setCollapse(new Collapse(navElement, navButton));
    }
  }, []);

  return (
    <>
      <button
        id="navbar-default-toggle"
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        {!authLoading && (
          <ul className="font-bold text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 dark:border-gray-700">
            {!!auth &&
              navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white ${
                      item.pathNames.includes(pathname.split("/", 2).join("/")) ? 'text-orange-500' : 'text-dark'
                    }`}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            {!!!auth && (
              <>
                <li>
                  <Link
                    href="/login"
                    className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white ${
                      pathname === '/login' ? 'text-orange-500' : 'text-dark'
                    }`}
                    aria-current="page"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Button special={true} type="button">
                    <Link href="#" className="text-white">
                      Request Access
                    </Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavMenu;
