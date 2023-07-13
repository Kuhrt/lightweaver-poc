import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  special?: boolean;
  outlined?: boolean;
};
export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = (props) => {
  const propsForElement = { ...props, special: undefined, outlined: undefined };
  const normalClasses =
    'text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300';
  const specialClasses = 'text-white bg-gradient-orange shadow-glow-gold';
  const outlineClasses =
    'text-white bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-white';
  const disabledClasses =
    'bg-gray-300 text-gray-500 border-gray-300 shadow-none hover:cursor-auto';

  let defaultClasses =
    'font-bold rounded-full text-base px-5 py-4 text-center hover:cursor-pointer';
  if (props.special) {
    defaultClasses = twMerge([defaultClasses, specialClasses]);
  } else if (props.outlined) {
    defaultClasses = twMerge([defaultClasses, outlineClasses]);
  } else {
    defaultClasses = twMerge([defaultClasses, normalClasses]);
  }

  if (props.disabled) {
    defaultClasses = twMerge([defaultClasses, disabledClasses]);
  }

  return (
    <button
      {...propsForElement}
      className={twMerge([defaultClasses, props.className])}
    ></button>
  );
};
