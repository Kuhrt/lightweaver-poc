import { ElementUnion } from '../enums/ElementType'
import { ElementDetail } from './ElementDetail'

export interface Element {
  element_type: ElementUnion
  detail_level1: ElementDetail[]
}
