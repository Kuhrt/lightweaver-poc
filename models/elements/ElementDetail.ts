export interface ElementDetail {
  cat_id: number
  cat: string
  detail_level2?: ElementDetail[]
  detail_level3?: ElementDetail[]
}
