'use client';

import { SVGAttributes, useId } from 'react';

export default function SubtraitIcon(props: SVGAttributes<SVGElement>) {
  const id = useId();
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path={`url(#${id}_clip0_354_26865)`}>
        <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26865)`}>
          <path
            d="M48.5883 9.73215L80.263 52.4318L68.865 86.2982L28.0118 87.381L15.9297 50.0574L48.5883 9.73215Z"
            fill="#FFB81C"
          />
        </g>
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26865`}
          x="5.92969"
          y="-0.267822"
          width="84.3335"
          height="97.6488"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.721569 0 0 0 0 0.109804 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_354_26865"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26865"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.721569 0 0 0 0 0.109804 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_354_26865"
          />
        </filter>
        <clipPath id={`${id}_clip0_354_26865`}>
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
