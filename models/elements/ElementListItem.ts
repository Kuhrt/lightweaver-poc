import { Element } from '../dimensions/Element'
import { ProfileElementUnion } from '../enums/ProfileElementTypeEnum'

export type ElementListItem = {
  type: ProfileElementUnion
  element: Element
  level: number
  userId: string
}
