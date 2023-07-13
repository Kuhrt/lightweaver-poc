import { ProfileElementUnion } from "../enums/ProfileElementTypeEnum"

export interface ProfileElementDetail {
  cat_id: number
  cat: string
  categories?: ProfileElementDetail[]
}

export interface EditProfileElementDetail extends ProfileElementDetail {
  is_selected: boolean
  categories?: EditProfileElementDetail[]
}

export type ProfileElementBody = {
  cat_id: number;
  is_selected: boolean
  categories?: number[];
}

export type ProfileElementPayload = {
  profileElement: {
    element_type: ProfileElementUnion,
    categories: {
      cat_id: number;
      categories?: {
        cat_id: number;
      }[];
    }[];
  }
}