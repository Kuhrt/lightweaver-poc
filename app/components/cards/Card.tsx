import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type CardProps = {
  children?: ReactNode;
  className?: string;
};
export const Card = ({ children, className }: CardProps) => {
  const defaultClasses =
    'block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700';

  return <div className={twMerge([defaultClasses, className])}>{children}</div>;
};

export default Card;
