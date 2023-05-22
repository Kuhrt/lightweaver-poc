'use client';

import { ElementUnion } from '@/models/enums/ElementType';
import { User } from '@/models/user/User';
import {
  getElementColorFromUnion,
  getElementTextClassFromUnion
} from '@/utils/elements';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../buttons/Button';
import Card from '../cards/Card';
import UserFlag from '../users/UserFlag';
import DimensionsScene, { ElementDetailListItem } from './DimensionsScene';

export type DimensionsProps = {
  user: User;
};
export const Dimensions = ({ user }: DimensionsProps) => {
  const [selectedElement, setSelectedElement] = useState<
    ElementDetailListItem | undefined
  >(undefined);
  const [filterTypes, setFilterTypes] = useState<ElementUnion[]>([]);

  const onSelectedChange = useCallback(
    (e: ElementDetailListItem | undefined) => {
      setSelectedElement(e);
    },
    []
  );

  const onFilterClick = (type: ElementUnion) => {
    setSelectedElement(undefined);

    if (filterTypes.includes(type)) {
      setFilterTypes(filterTypes.filter((t) => t !== type));
    } else {
      setFilterTypes([...filterTypes, type]);
    }
  };

  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-hidden">
        <DimensionsScene
          elements={user.Profile.elements}
          onSelectedChange={onSelectedChange}
          filterTypes={filterTypes}
        />
      </div>
      <div className="relative flex-1 pointer-events-none z-10 min-h-full w-full max-w-screen-2xl mx-auto flex flex-col justify-between py-12 px-4">
        <div className="flex items-start justify-between">
          <div>
            <button
              type="button"
              className="flex justify-start text-white items-center mb-6 pointer-events-auto cursor-pointer"
              onClick={() => onFilterClick('Traits')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={getElementColorFromUnion('Traits')}
                className="w-6 h-6 mr-4"
              >
                <path d="M24 22h-24l12-20z" />
              </svg>
              <p
                className={`font-bold ${
                  filterTypes.includes('Traits')
                    ? getElementTextClassFromUnion('Traits')
                    : 'text-white'
                }`}
              >
                Traits
              </p>
            </button>
            <button
              type="button"
              className="flex justify-start items-center text-white mb-6 pointer-events-auto cursor-pointer"
              onClick={() => onFilterClick('Events')}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill={getElementColorFromUnion('Events')}
                className="w-6 h-6 mr-4"
              >
                <path d="M12 .001l12 12-12 12-12-12 12-12z" />
              </svg>
              <p
                className={`font-bold ${
                  filterTypes.includes('Events')
                    ? getElementTextClassFromUnion('Events')
                    : 'text-white'
                }`}
              >
                Events
              </p>
            </button>
            <button
              type="button"
              className="flex justify-start items-center text-white mb-6 pointer-events-auto cursor-pointer"
              onClick={() => onFilterClick('Benefits')}
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill={getElementColorFromUnion('Benefits')}
                className="w-6 h-6 mr-4"
              >
                <path
                  d="m11.467 3.183c.175-.122.38-.183.584-.183.206 0 .413.063.589.186 1.778 1.252 7.104 4.997 8.93 6.282.274.194.43.505.43.826 0 .11-.018.221-.056.329-.697 2.016-2.668 7.718-3.351 9.693-.142.41-.53.684-.965.684h-11.153c-.432 0-.818-.27-.962-.674-.7-1.964-2.732-7.667-3.454-9.694-.04-.111-.059-.225-.059-.338 0-.324.157-.636.435-.829 1.853-1.289 7.239-5.035 9.032-6.282z"
                  fill-rule="nonzero"
                />
              </svg>
              <p
                className={`font-bold ${
                  filterTypes.includes('Benefits')
                    ? getElementTextClassFromUnion('Benefits')
                    : 'text-white'
                }`}
              >
                Benefits
              </p>
            </button>
            <button
              type="button"
              className="flex justify-start items-center text-white mb-6 pointer-events-auto cursor-pointer"
              onClick={() => onFilterClick('Behavior')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={getElementColorFromUnion('Behavior')}
                className="w-6 h-6 mr-4"
              >
                <path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z" />
              </svg>
              <p
                className={`font-bold ${
                  filterTypes.includes('Behavior')
                    ? getElementTextClassFromUnion('Behavior')
                    : 'text-white'
                }`}
              >
                Behaviors
              </p>
            </button>
          </div>
          <div className="text-right">
            <Button type="button" className="pointer-events-auto">
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between">
          <div className='mt-4 md:mt-0'>
            <UserFlag info={user.Profile.info} />
          </div>
          <div>
            {!!selectedElement && (
              <Card className="w-full text-center lg:w-96 p-20 pointer-events-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={getElementColorFromUnion(selectedElement.type)}
                  className="w-10 h-10 mx-auto"
                >
                  <path d="M24 22h-24l12-20z" />
                </svg>
                <h3
                  className={`text-xl mt-8 mb-4 uppercase font-bold ${getElementTextClassFromUnion(
                    selectedElement.type
                  )}`}
                >
                  {selectedElement.type} {selectedElement.level}
                </h3>
                <p className="text-lg font-semibold max-w-[165px] mx-auto">
                  {selectedElement.detail.cat}
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dimensions;
