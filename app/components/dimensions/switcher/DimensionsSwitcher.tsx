'use client';

import { useMemo } from 'react';
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import everythingIconSrc from './icons/everything.png';
import { DropdownItem } from '@/models/dropdown/DropdownItem';
import DropdownComponent from '../../dropdown/DropdownComponent';
import TraitIcon from '../../icons/TraitIcon';
import EventIcon from '../../icons/EventIcon';
import BenefitIcon from '../../icons/BenefitIcon';
import BehaviorIcon from '../../icons/BehaviorIcon';

type DimensionsSwitcherProps = {
  onFilterClick: (type?: ProfileElementUnion) => void;
};

const DimensionsSwitcher = ({ onFilterClick }: DimensionsSwitcherProps) => {
  const dimensionItems = useMemo<DropdownItem[]>(
    () => [
      {
        id: 'Everything',
        title: 'Everything',
        iconSrc: everythingIconSrc
      },
      {
        id: 'Traits',
        title: 'Traits',
        iconSrc: <TraitIcon />
      },
      {
        id: 'Events',
        title: 'Events',
        iconSrc: <EventIcon />
      },
      {
        id: 'Benefits',
        title: 'Benefits',
        iconSrc: <BenefitIcon />
      },
      {
        id: 'Behavior',
        title: 'Behaviors',
        iconSrc: <BehaviorIcon />
      }
    ],
    []
  );

  return (
    <div className="-mt-6">
      <DropdownComponent
        items={dimensionItems}
        selectedItem={dimensionItems[0]}
        label="Dimensions"
        onFilterClick={onFilterClick}
      />
    </div>
  );
};

export default DimensionsSwitcher;
