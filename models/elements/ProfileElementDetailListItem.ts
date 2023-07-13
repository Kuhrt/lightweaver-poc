import { ProfileElementUnion } from '../enums/ProfileElementTypeEnum'
import { ProfileElementDetail } from './ProfileElementDetail'

export type ProfileElementDetailListItem = {
  type: ProfileElementUnion
  detail: ProfileElementDetail
  level: number
  userId: string
}
