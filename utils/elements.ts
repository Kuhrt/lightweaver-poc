import { ElementUnion } from '@/models/enums/ElementType'

export const getElementColorFromUnion = (type: ElementUnion) => {
  switch (type) {
    case 'Traits':
      return '#FE7E04'
    case 'Events':
      return '#10C47E'
    case 'Benefits':
      return '#5480BF'
    case 'Behavior':
      return '#832C77'
    default:
      return '#FE7E04'
  }
}

export const getElementTextClassFromUnion = (type: ElementUnion) => {
  switch (type) {
    case 'Traits':
      return 'text-[#FE7E04]'
    case 'Events':
      return 'text-[#10C47E]'
    case 'Benefits':
      return 'text-[#5480BF]'
    case 'Behavior':
      return 'text-[#832C77]'
    default:
      return 'text-[#FE7E04]'
  }
}