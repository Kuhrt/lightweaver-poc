'use client'

import { SVGAttributes, useId } from "react";

export default function SubbenefitIcon(props: SVGAttributes<SVGElement>) {
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
      <g clip-path={`url(#${id}_clip0_354_26869)`}>
        <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26869)`}>
          <path
            d="M45.3698 13.405L87.5645 57.1067L68.865 86.6694L28.0119 87.7521L17.4911 57.1067L45.3698 13.405Z"
            fill="#00C389"
          />
        </g>
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26869`}
          x="7.49121"
          y="3.40503"
          width="90.0732"
          height="94.347"
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
            values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.537255 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_354_26869"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26869"
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
            values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.537255 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_354_26869"
          />
        </filter>
        <clipPath id={`${id}_clip0_354_26869`}>
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
