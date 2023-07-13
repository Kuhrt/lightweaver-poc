'use client';

import { SVGAttributes, useId } from 'react';

export default function BehaviorIcon(props: SVGAttributes<SVGElement>) {
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
      <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26857)`}>
        <path
          d="M57.3927 16.3203L87.5645 57.2928L68.865 86.8555L28.0119 87.9382L12.0114 32.1361L57.3927 16.3203Z"
          fill={`url(#${id}_paint0_linear_354_26857)`}
        />
      </g>
      <g opacity="0.8" filter={`url(#${id}_filter1_di_354_26857)`}>
        <path
          d="M53.7398 35.9036L68.8253 56.3892L59.4758 71.1701L39.0498 71.7114L31.0498 43.8112L53.7398 35.9036Z"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#${id}_filter2_di_354_26857)`}>
        <path
          d="M51.1189 45.1418L58.6617 55.3847L53.9869 62.7751L43.7739 63.0458L39.7739 49.0957L51.1189 45.1418Z"
          fill="#8A1A61"
        />
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26857`}
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
            result="effect1_dropShadow_354_26857"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26857"
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
            result="effect2_innerShadow_354_26857"
          />
        </filter>
        <filter
          id={`${id}_filter1_di_354_26857`}
          x="21.0498"
          y="25.9036"
          width="57.7754"
          height="55.8079"
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
            result="effect1_dropShadow_354_26857"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26857"
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
            result="effect2_innerShadow_354_26857"
          />
        </filter>
        <filter
          id={`${id}_filter2_di_354_26857`}
          x="29.7739"
          y="35.1418"
          width="38.8877"
          height="37.9039"
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
            result="effect1_dropShadow_354_26857"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26857"
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
            result="effect2_innerShadow_354_26857"
          />
        </filter>
        <linearGradient
          id={`${id}_paint0_linear_354_26857`}
          x1="97.6117"
          y1="40.7561"
          x2="-8.03281"
          y2="67.397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A1A61" />
          <stop offset="1" stopColor="#6A6DCD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
