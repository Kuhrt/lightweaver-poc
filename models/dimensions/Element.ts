import { BaseElement } from './BaseElement'

export interface Element extends BaseElement {
  title: string
  description?: string
  is_selected?: boolean
  sequence?: number
  sub_elements?: Element[]
}
