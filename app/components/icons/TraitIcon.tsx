'use client';

import { SVGAttributes, useId } from 'react';

export default function TraitIcon(props: SVGAttributes<SVGElement>) {
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
      <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26845)`}>
        <path
          d="M48.5883 10.7322L80.263 53.4318L68.865 87.2982L28.0118 88.381L15.9297 51.0574L48.5883 10.7322Z"
          fill={`url(#${id}_paint0_linear_354_26845)`}
        />
      </g>
      <g opacity="0.8" filter={`url(#${id}_filter1_di_354_26845)`}>
        <path
          d="M48.2939 34.7L64.1303 56.0485L58.4316 72.9806L38.0064 73.5219L31.9657 54.8613L48.2939 34.7Z"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#${id}_filter2_di_354_26845)`}>
        <path
          d="M48.647 46.1825L56.5651 56.8567L53.7158 65.3228L43.5032 65.5934L40.4828 56.2631L48.647 46.1825Z"
          fill="#FFB81C"
        />
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26845`}
          x="5.92969"
          y="0.732178"
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
            result="effect1_dropShadow_354_26845"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26845"
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
            result="effect2_innerShadow_354_26845"
          />
        </filter>
        <filter
          id={`${id}_filter1_di_354_26845`}
          x="21.9658"
          y="24.7"
          width="52.1646"
          height="58.822"
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
            result="effect1_dropShadow_354_26845"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26845"
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
            result="effect2_innerShadow_354_26845"
          />
        </filter>
        <filter
          id={`${id}_filter2_di_354_26845`}
          x="30.4829"
          y="36.1825"
          width="36.082"
          height="39.4109"
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
            result="effect1_dropShadow_354_26845"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26845"
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
            result="effect2_innerShadow_354_26845"
          />
        </filter>
        <linearGradient
          id={`${id}_paint0_linear_354_26845`}
          x1="2.62453"
          y1="72.9565"
          x2="100.066"
          y2="58.4635"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB81C" />
          <stop offset="1" stopColor="#FF7500" />
        </linearGradient>
      </defs>
    </svg>
  );
}
