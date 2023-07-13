import { ProfileElementUnion } from '../enums/ProfileElementTypeEnum'
import { ProfileElementDetail } from './ProfileElementDetail'

export interface ProfileElement {
  element_type: ProfileElementUnion
  categories: ProfileElementDetail[]
}
