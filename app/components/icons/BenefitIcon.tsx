'use client';

import { SVGAttributes, useId } from 'react';

export default function BenefitIcon(props: SVGAttributes<SVGElement>) {
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
      <g opacity="0.8" filter={`url(#${id}_filter0_di_354_26853)`}>
        <path
          d="M45.3698 13.405L87.5645 57.1067L68.865 86.6694L28.0119 87.7521L17.4911 57.1067L45.3698 13.405Z"
          fill={`url(#${id}_paint0_linear_354_26853)`}
        />
      </g>
      <g opacity="0.8" filter={`url(#${id}_filter1_di_354_26853)`}>
        <path
          d="M46.9383 35.0434L69.268 58.1706L59.3721 73.8154L37.7524 74.3884L32.1847 58.1706L46.9383 35.0434Z"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#${id}_filter2_di_354_26853)`}>
        <path
          d="M47.8377 47.2064L59.0012 58.7685L54.0538 66.5899L43.2454 66.8763L40.4619 58.7685L47.8377 47.2064Z"
          fill="#00C389"
        />
      </g>
      <defs>
        <filter
          id={`${id}_filter0_di_354_26853`}
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
            result="effect1_dropShadow_354_26853"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26853"
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
            result="effect2_innerShadow_354_26853"
          />
        </filter>
        <filter
          id={`${id}_filter1_di_354_26853`}
          x="22.1846"
          y="25.0435"
          width="57.0835"
          height="59.345"
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
            result="effect1_dropShadow_354_26853"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26853"
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
            result="effect2_innerShadow_354_26853"
          />
        </filter>
        <filter
          id={`${id}_filter2_di_354_26853`}
          x="30.4619"
          y="37.2064"
          width="38.5391"
          height="39.6699"
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
            result="effect1_dropShadow_354_26853"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_354_26853"
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
            result="effect2_innerShadow_354_26853"
          />
        </filter>
        <linearGradient
          id={`${id}_paint0_linear_354_26853`}
          x1="95.5813"
          y1="43.9119"
          x2="4.16818"
          y2="57.1756"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A6DCD" />
          <stop offset="1" stopColor="#00C389" />
        </linearGradient>
      </defs>
    </svg>
  );
}
