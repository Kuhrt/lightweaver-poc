'use client'

import { SVGAttributes, useId } from "react";

export default function SubeventIcon(props: SVGAttributes<SVGElement>) {
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
      <g clip-path={`url(#${id}_clip0_354_26867)`}>
        <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26867)`}>
          <path
            d="M48.5884 9.73219L77.7694 26.9558L68.8651 86.2983L28.012 87.381L15.9299 50.0574L48.5884 9.73219Z"
            fill="#C4D600"
          />
        </g>
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26867`}
          x="5.92969"
          y="-0.267822"
          width="81.8398"
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
            values="0 0 0 0 0.768627 0 0 0 0 0.839216 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_354_26867"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26867"
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
            values="0 0 0 0 0.768627 0 0 0 0 0.839216 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_354_26867"
          />
        </filter>
        <clipPath id={`${id}_clip0_354_26867`}>
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
