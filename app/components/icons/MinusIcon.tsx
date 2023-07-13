import { SVGAttributes } from "react";

export default function MinusIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="17"
      height="5"
      viewBox="0 0 17 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.875 2.5C16.875 3.39844 16.1719 4.0625 15.3125 4.0625H2.1875C1.28906 4.0625 0.625 3.39844 0.625 2.5C0.625 1.64062 1.28906 0.9375 2.1875 0.9375H15.3125C16.1719 0.9375 16.875 1.64062 16.875 2.5Z"
        fill="#7D7D7D"
      />
    </svg>
  );
}
