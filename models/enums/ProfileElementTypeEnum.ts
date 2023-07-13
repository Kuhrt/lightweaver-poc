import { SVGAttributes } from "react";

export enum ProfileElementTypeEnum {
  Traits = 4,
  Behavior = 5,
  Events = 11,
  Benefits = 12,
}

export enum ElementPathEnum {
  Traits = 'traits',
  Behavior = 'behavior',
  Events = 'events',
  Benefits = 'benefits',
  Interests = 'interests',
  People = 'people',
}

export type ProfileElementUnion = 'Traits' | 'Events' | 'Benefits' | 'Behavior' | 'Interests' | 'People I Admire';

export type ProfileElementIcons = {
  [key in ProfileElementUnion] : (props: SVGAttributes<SVGElement>) => JSX.Element;
}
