import { SVGAttributes } from "react";

export default function PlusIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.42188 9.375H0.6875V5.95312H6.42188V0.1875H9.84375V5.95312H15.5625V9.375H9.84375V15.0625H6.42188V9.375Z"
        fill="#7D7D7D"
      />
    </svg>
  );
}
