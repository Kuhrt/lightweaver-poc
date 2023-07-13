import { Behavior } from '../dimensions/Behavior'
import { Benefit } from '../dimensions/Benefit'
import { Dimension } from '../dimensions/Dimension'
import { Element } from '../dimensions/Element'
import { Event } from '../dimensions/Event'
import { Trait } from '../dimensions/Trait'
import { BasicInfo } from './BasicInfo'

export interface ProfileData {
  info: BasicInfo
  traits?: Dimension<Trait>
  events?: Dimension<Event>
  behavior?: Dimension<Behavior>
  benefits?: Dimension<Benefit>
}
