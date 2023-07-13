'use client';

import { BasicInfo } from '@/models/user/BasicInfo';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Checkbox from '../forms/Checkbox';
import { UserAvatar } from '../users/UserAvatar';

export type SelectableConnectionProps = {
  className?: string;
  info: BasicInfo;
  isSelected?: boolean;
  onToggle?: (selected: boolean, uid: string) => any;
};

export const SelectableConnection = ({
  className,
  info,
  isSelected,
  onToggle
}: SelectableConnectionProps) => {
  const defaultClasses =
    'w-full bg-white rounded-lg border-4 border-white px-6 py-2 flex items-center';
  const selectedClasses = 'shadow-glow-gold border-amber-500';
  const [selected, setSelected] = useState(
    isSelected !== undefined && isSelected !== null ? isSelected : false
  );

  const onToggleChange = (value: boolean) => {
    if (isSelected === undefined || isSelected === null) {
      setSelected(value);
    }

    if (!!onToggle) {
      onToggle(value, info.uid);
    }

    setSelected(value);
  };

  return (
    <li className={className}>
      <div
        className={
          isSelected !== undefined && isSelected !== null && isSelected
            ? twMerge([defaultClasses, selectedClasses])
            : isSelected !== undefined && isSelected !== null && !isSelected
            ? defaultClasses
            : selected
            ? twMerge([defaultClasses, selectedClasses])
            : defaultClasses
        }
      >
        <Checkbox
          className="mr-4"
          onToggle={onToggleChange}
          checked={
            isSelected !== undefined && isSelected !== null
              ? isSelected
              : selected
          }
        />
        <UserAvatar
          user={info}
          color="black"
          isAnotherUser
          className="w-12 h-12"
        />
        <p className="text-black font-bold text-xl m-0 ml-2">
          {info.first_name}
        </p>
        <div className="ml-auto -mr-3 flex items-center">
          <Link
            href={`/user/${info.uid}`}
            className="text-dark font-bold text-base hover:text-orange-500"
          >
            View Profile
          </Link>
          {/* Burger dropdown menu */}
          <button
            id={`dropdownMenuIconButton-${info.uid}`}
            data-dropdown-toggle={`dropdownDots-${info.uid}`}
            data-dropdown-placement="right-end"
            data-dropdown-offset-distance="25"
            data-dropdown-offset-skidding="12"
            className="inline-flex items-center ml-3 text-sm font-medium text-center bg-white rounded-lg "
            type="button"
          >
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              fill="#7D7D7D"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
          <div
            id={`dropdownDots-${info.uid}`}
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          >
            <ul
              className="py-2 text-sm text-dark"
              aria-labelledby={`dropdownMenuIconButton-${info.uid}`}
            >
              <li className="flex items-center justify-center">
                <button className="block px-4 py-2 w-full hover:text-orange-500">
                  Remove connection
                </button>
              </li>
            </ul>
          </div>
          {/* Burger dropdown menu */}
        </div>
      </div>
    </li>
  );
};

export default SelectableConnection;
