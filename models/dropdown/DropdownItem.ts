import { StaticImageData } from "next/image";

export type DropdownItem = {
  id: string;
  title: string;
  iconSrc?: StaticImageData | JSX.Element;
}
