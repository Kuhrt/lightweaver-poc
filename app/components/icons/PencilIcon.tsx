import { SVGAttributes } from "react";

export default function PencilIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5312 3.34375C17.125 3.90625 17.125 4.875 16.5312 5.46875L14.7812 7.21875L10.7812 3.21875L12.5312 1.46875C13.125 0.875 14.0938 0.875 14.6562 1.46875L16.5312 3.34375ZM10.0625 3.9375L14.0625 7.9375L5.96875 16.0312C5.875 16.125 5.78125 16.1562 5.6875 16.1875L1.59375 17C1.21875 17.0625 0.9375 16.7812 1 16.4062L1.8125 12.3125C1.84375 12.2188 1.875 12.125 1.96875 12.0312L10.0625 3.9375Z"
        fill="#7D7D7D"
      />
    </svg>
  );
}
