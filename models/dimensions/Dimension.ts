import { ProfileElementTypeEnum, ProfileElementUnion } from "../enums/ProfileElementTypeEnum";

export interface Dimension<T> {
  dimension_type?: ProfileElementUnion
  elements?: T[]
}