import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export type InputProps = {
  containerClassName?: string;
  error?: string;
  label?: string;
  labelClassName?: string;
};

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & InputProps
>((props, ref) => {
  const defaultContainerClasses = 'mb-6';
  let defaultClasses =
    'bg-transparent border-2 border-white text-white placeholder-gray-300 text-base rounded-full focus:ring-white focus:border-white block w-full p-4';
  const errorClasses = 'border-red-500';
  const defaultLabelClasses = 'block mb-2.5 text-xs font-bold text-white';

  if (!!props.error) {
    defaultClasses = twMerge([defaultClasses, errorClasses]);
  }

  return (
    <div
      className={twMerge([defaultContainerClasses, props.containerClassName])}
    >
      {!!props.label && !!props.id && (
        <label
          htmlFor={props.id}
          className={twMerge([defaultLabelClasses, props.labelClassName])}
        >
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          className={twMerge([defaultClasses, props.className])}
          {...props}
          ref={ref}
        />
        {!!props.error && (
          <ExclamationTriangleIcon
            className="absolute top-1/2 right-5 -translate-y-1/2 w-5 h-5 fill-red-500 z-10"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
});
InputComponent.displayName = 'Input';

export const Input = InputComponent;