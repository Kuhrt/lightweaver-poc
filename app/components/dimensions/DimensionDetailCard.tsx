import { ProfileElementDetail } from '@/models/elements/ProfileElementDetail';
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import { Card } from '@/app/components/cards/Card';
import { twMerge } from 'tailwind-merge';
import {
  getElementColorFromUnion,
  getElementTextClassFromUnion
} from '@/utils/elements';
import TraitIcon from '../icons/TraitIcon';
import BehaviorIcon from '../icons/BehaviorIcon';
import BenefitIcon from '../icons/BenefitIcon';
import EventIcon from '../icons/EventIcon';
import { Element } from '@/models/dimensions/Element';

export type DimensionDetailCardProps = {
  type: ProfileElementUnion;
  detail: Element;
  className?: string;
  infoText?: string;
};
export const DimensionDetailCard = ({
  type,
  detail,
  className,
  infoText
}: DimensionDetailCardProps) => {
  const defaultClasses =
    'w-full text-center flex flex-col justify-center items-center lg:w-80 lg:min-h-[356px] p-8 pointer-events-auto';

  const getElementIconFromUnion = (type: ProfileElementUnion) => {
    switch (type) {
      case 'Traits':
        return <TraitIcon className="w-20 h-20 mx-auto" />;
      case 'Events':
        return <EventIcon className="w-20 h-20 mx-auto" />;
      case 'Benefits':
        return <BenefitIcon className="w-20 h-20 mx-auto" />;
      case 'Behavior':
        return <BehaviorIcon className="w-20 h-20 mx-auto" />;
      default:
        return <TraitIcon className="w-20 h-20 mx-auto" />;
    }
  };

  return (
    <Card className={twMerge([defaultClasses, className])}>
      {!!infoText && (
        <p className="text-gray-500 text-base italic mx-auto text-center mb-5">
          {infoText}
        </p>
      )}
      {getElementIconFromUnion(type)}
      <h3
        className={`text-xl mt-8 mb-4 uppercase font-bold ${getElementTextClassFromUnion(
          type
        )}`}
      >
        {type}
      </h3>
      <p className="text-black text-lg font-semibold mx-auto">{detail.title}</p>
    </Card>
  );
};

export default DimensionDetailCard;
