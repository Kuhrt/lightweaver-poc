import { BasicInfo } from './BasicInfo'
import { ProfileData } from './ProfileData'

export interface User {
  profile?: ProfileData
  connections?: BasicInfo[]
}
