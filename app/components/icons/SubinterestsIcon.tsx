import { SVGAttributes } from "react";

export default function SubinterestsIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="100"
      height="101"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_846_35345)">
        <g opacity="0.8" filter="url(#filter0_di_846_35345)">
          <path
            d="M62.049 14.6626L92.2209 55.635L62.049 85.2031L16.6676 73.1483L16.6677 30.4784L62.049 14.6626Z"
            fill="#FF7500"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_di_846_35345"
          x="6.66748"
          y="4.6626"
          width="95.5532"
          height="90.5405"
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
            values="0 0 0 0 1 0 0 0 0 0.458824 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_846_35345"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_846_35345"
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
            values="0 0 0 0 1 0 0 0 0 0.458824 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_846_35345"
          />
        </filter>
        <clipPath id="clip0_846_35345">
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
