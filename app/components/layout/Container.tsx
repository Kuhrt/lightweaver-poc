import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContainerProps = {
  children?: ReactNode;
  className?: string;
};
export const Container = ({ children, className }: ContainerProps) => {
  const defaultClasses = 'max-w-screen-2xl mx-auto py-12 px-4';

  return <div className={twMerge([defaultClasses, className])}>{children}</div>;
};

export default Container;
