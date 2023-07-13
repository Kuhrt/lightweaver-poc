'use client'

import { SVGAttributes, useId } from "react";

export default function SubbehaviorIcon(props: SVGAttributes<SVGElement>) {
  const id = useId();
  return (
    <svg
      width="100"
      height="101"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path={`url(#${id}_clip0_354_26863)`}>
        <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26863)`}>
          <path
            d="M57.3927 16.3203L87.5645 57.2928L68.865 86.8555L28.0119 87.9382L12.0114 32.1361L57.3927 16.3203Z"
            fill="#8A1A61"
          />
        </g>
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26863`}
          x="2.01123"
          y="6.32031"
          width="95.5532"
          height="91.6178"
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
            values="0 0 0 0 0.431373 0 0 0 0 0.392157 0 0 0 0 0.756863 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_354_26863"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26863"
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
            values="0 0 0 0 0.435294 0 0 0 0 0.388235 0 0 0 0 0.752941 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_354_26863"
          />
        </filter>
        <clipPath id={`${id}_clip0_354_26863`}>
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0 0.371094)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
