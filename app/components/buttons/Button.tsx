import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const defaultClasses =
    'text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-800';
  return (
    <button
      {...props}
      className={twMerge([defaultClasses, props.className])}
    ></button>
  );
};
