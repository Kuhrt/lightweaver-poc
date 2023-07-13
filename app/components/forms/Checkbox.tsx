'use client';

import React, { useEffect, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  onToggle?: (value: boolean) => any;
};

export const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps
> = (props) => {
  const defaultClasses = 'flex items-center cursor-pointer';
  const propsForElement = {
    ...props,
    type: 'checkbox',
    className: undefined
  };
  const id = useId();
  const [isChecked, setIsChecked] = useState(
    props.checked !== undefined && props.checked !== null
      ? props.checked
      : false
  );

  const toggle = () => {
    if (props.checked === undefined || props.checked === null) {
      setIsChecked(!!!isChecked);
    }

    if (!!props.onToggle) {
      props.onToggle(!!!isChecked);
    }
  };

  useEffect(() => {
    if (props.checked !== null && props.checked !== undefined) {
      setIsChecked(props.checked);
    }
  }, [props.checked]);

  return (
    <label
      className={twMerge([defaultClasses, props.className])}
      htmlFor={`checkbox-${id}`}
    >
      <input
        {...propsForElement}
        id={`checkbox-${id}`}
        checked={
          props.checked !== undefined && props.checked !== null
            ? props.checked
            : isChecked
        }
        onChange={toggle}
        className="w-5 h-5 cursor-pointer text-green-500 bg-gray-300 border-gray-300 rounded focus:ring-offset-0 focus:ring-transparent focus:sha"
      />
      {!!props.label && (
        <p className="m-0 text-dark font-bold text-sm overflow-hidden text-ellipsis max-w-md max-h-10">
          {props.label}
        </p>
      )}
    </label>
  );
};

export default Checkbox;
