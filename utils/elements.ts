import BehaviorIcon from '@/app/components/icons/BehaviorIcon'
import BenefitIcon from '@/app/components/icons/BenefitIcon'
import EventIcon from '@/app/components/icons/EventIcon'
import InterestsIcon from '@/app/components/icons/InterestsIcon'
import PeopleIcon from '@/app/components/icons/PeopleIcon'
import SubbehaviorIcon from '@/app/components/icons/SubbehaviorIcon'
import SubbenefitIcon from '@/app/components/icons/SubbenefitIcon'
import SubeventIcon from '@/app/components/icons/SubeventIcon'
import SubinterestsIcon from '@/app/components/icons/SubinterestsIcon'
import SubpeopleIcon from '@/app/components/icons/SubpeopleIcon'
import SubtraitIcon from '@/app/components/icons/SubtraitIcon'
import TraitIcon from '@/app/components/icons/TraitIcon'
import { Dimension } from '@/models/dimensions/Dimension'
import { Element } from '@/models/dimensions/Element'
import { ElementListItem } from '@/models/elements/ElementListItem'
import { ProfileElement } from '@/models/elements/ProfileElement'
import { ProfileElementDetail } from '@/models/elements/ProfileElementDetail'
import { ProfileElementDetailListItem } from '@/models/elements/ProfileElementDetailListItem'

import {
  ElementPathEnum,
  ProfileElementIcons,
  ProfileElementTypeEnum,
  ProfileElementUnion,
} from '@/models/enums/ProfileElementTypeEnum'
import { ProfileData } from '@/models/user/ProfileData'

export const getElementColorFromUnion = (type: ProfileElementUnion) => {
  switch (type) {
    case 'Traits':
      return '#FF7500'
    case 'Events':
      return '#00C389'
    case 'Benefits':
      return '#6A6DCD'
    case 'Behavior':
      return '#8A1A61'
    default:
      return '#FFB81C'
  }
}

export const getElementEmissiveFromUnion = (type: ProfileElementUnion) => {
  switch (type) {
    case 'Traits':
      return '#FFB81C'
    case 'Events':
      return '#C4D600'
    case 'Benefits':
      return '#00C389'
    case 'Behavior':
      return '#6A6DCD'
    default:
      return '#FFB81C'
  }
}

export const getElementTextClassFromUnion = (type: ProfileElementUnion) => {
  switch (type) {
    case 'Traits':
      return 'text-orange-500'
    case 'Events':
      return 'text-lime-500'
    case 'Benefits':
      return 'text-teal-500'
    case 'Behavior':
      return 'text-magenta-500'
    default:
      return 'text-amber-500'
  }
}

export const getElementGradientColorClassFromUnion = (
  type: ProfileElementUnion,
) => {
  switch (type) {
    case 'Traits':
      return 'bg-gradient-orange'
    case 'Events':
      return 'bg-gradient-lime'
    case 'Benefits':
      return 'bg-gradient-teal'
    case 'Behavior':
      return 'bg-gradient-purple'
    default:
      return 'text-gray-300'
  }
}

export const getElementUnionFromType = (
  type: ProfileElementTypeEnum,
): ProfileElementUnion => {
  switch (type) {
    case ProfileElementTypeEnum.Traits:
      return 'Traits'
    case ProfileElementTypeEnum.Behavior:
      return 'Behavior'
    case ProfileElementTypeEnum.Benefits:
      return 'Benefits'
    case ProfileElementTypeEnum.Events:
      return 'Events'
    default:
      throw 'Unknown element type'
  }
}

export const getElementUnionFromPath = (
  type: ElementPathEnum,
): ProfileElementUnion => {
  switch (type) {
    case ElementPathEnum.Traits:
      return 'Traits'
    case ElementPathEnum.Behavior:
      return 'Behavior'
    case ElementPathEnum.Benefits:
      return 'Benefits'
    case ElementPathEnum.Events:
      return 'Events'
    case ElementPathEnum.Interests:
      return 'Interests'
    case ElementPathEnum.People:
      return 'People I Admire'
  }
}

export const getHeadingPhraseFromElement = (type: ProfileElementUnion) => {
  switch (type) {
    case 'Traits':
      return 'Traits that Prepare'
    case 'Behavior':
      return 'Behavior that Succeeds'
    case 'Benefits':
      return 'Benefits that Sustain'
    case 'Events':
      return 'Events that Trigger'
    default:
      return 'Category does not exist'

    // TODO: add when support will be available
    // case ProfileElementTypeEnum.Interests:
    //   return 'Interests'
    // case ProfileElementTypeEnum.People:
    //   return 'People I Admire'
  }
}

export const getTitlePhraseFromElement = (type: ProfileElementUnion) => {
  switch (type) {
    case 'Traits':
      return 'Traits that I believe leads to action'
    case 'Behavior':
      return 'Behaviors I believe lead to success'
    case 'Benefits':
      return 'Benefits I believe keep one going'
    case 'Events':
      return 'Events I believe can cause one to act'
    default:
      return 'Category does not exist'
  }
}

export const buildProfileElementList = (profile: ProfileData) => {
  const elementList: ElementListItem[] = []

  const buildItems = (
    elements: Element[],
    type: ProfileElementUnion,
    level = 1,
  ) => {
    elements.forEach((e) => {
      elementList.push({
        type,
        level,
        element: { ...e, sub_elements: undefined },
        userId: profile.info.uid,
      })

      if (!!e.sub_elements) {
        buildItems(e.sub_elements, type, level++)
      }
    })
  }

  if (!!profile.traits?.elements) {
    buildItems(
      profile.traits.elements,
      profile.traits.dimension_type ?? 'Traits',
    )
  }

  if (!!profile.events?.elements) {
    buildItems(
      profile.events.elements,
      profile.events.dimension_type ?? 'Events',
    )
  }

  if (!!profile.behavior?.elements) {
    buildItems(
      profile.behavior.elements,
      profile.behavior.dimension_type ?? 'Behavior',
    )
  }

  if (!!profile.benefits?.elements) {
    buildItems(
      profile.benefits.elements,
      profile.benefits.dimension_type ?? 'Benefits',
    )
  }

  return elementList
}

export const dimensionsIconConfig: ProfileElementIcons = {
  Traits: TraitIcon,
  Events: EventIcon,
  Behavior: BehaviorIcon,
  Benefits: BenefitIcon,
  Interests: InterestsIcon,
  'People I Admire': PeopleIcon,
}

export const subDimensionsIconConfig: ProfileElementIcons = {
  Traits: SubtraitIcon,
  Events: SubeventIcon,
  Behavior: SubbehaviorIcon,
  Benefits: SubbenefitIcon,
  Interests: SubinterestsIcon,
  'People I Admire': SubpeopleIcon,
}

export const notSupportedDimensions: ProfileElementUnion[] = [
  'Interests',
  'People I Admire',
]
