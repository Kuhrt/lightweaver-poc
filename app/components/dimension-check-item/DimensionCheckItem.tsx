'use client';

import { useEffect, useState } from 'react';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';
import { twMerge } from 'tailwind-merge';
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import {
  dimensionsIconConfig,
  getElementGradientColorClassFromUnion,
  getElementTextClassFromUnion,
  subDimensionsIconConfig
} from '@/utils/elements';
import { Element } from '@/models/dimensions/Element';

type DimensionCheckItemProps = {
  element: Element;
  categoryName: ProfileElementUnion;
  handleChange: (element: Element) => void;
};

const DimensionCheckItem = ({
  element: { element_id, title, is_selected, sub_elements },
  categoryName,
  handleChange
}: DimensionCheckItemProps) => {
  const [isChecked, setIsChecked] = useState(is_selected);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubElements, setSelectedSubElements] = useState<Element[]>([]);
  const [selectedSubElementIds, setSelectedSubElementIds] = useState<number[]>(
    []
  );

  const DimensionIcon = dimensionsIconConfig[categoryName];
  const SubDimensionIcon = subDimensionsIconConfig[categoryName];

  useEffect(() => {
    const pickedSubElements = sub_elements
      ?.filter(({ is_selected }) => is_selected)
      .map((element) => ({ ...element }));
    if (pickedSubElements) {
      setSelectedSubElements(pickedSubElements);
    }
  }, [sub_elements]);

  useEffect(() => {
    setSelectedSubElementIds(selectedSubElements.map((sse) => sse.element_id));
  }, [selectedSubElements]);

  useEffect(() => {
    if (!isChecked) {
      setSelectedSubElements([]);
    }
  }, [isChecked]);

  const singularize = (word: string) => {
    return word.toLowerCase().at(-1) === 's' ? word.slice(0, -1) : word;
  };

  const toggle = () => setIsOpen(!isOpen);

  const handleCheck = () => {
    handleChange({
      element_id,
      title,
      is_selected: !isChecked,
      sub_elements: selectedSubElements
    });
    setIsChecked(!isChecked);
  };

  const handleSubCategoryCheck = (element: Element) => () => {
    let newSelected = [...selectedSubElements];
    selectedSubElements
      .map((sse) => sse.element_id)
      .includes(element.element_id)
      ? (newSelected = selectedSubElements.filter(
          (x) => x.element_id !== element.element_id
        ))
      : newSelected.push(element);
    setSelectedSubElements(newSelected);
    handleChange({
      element_id,
      title,
      is_selected: isChecked,
      sub_elements: newSelected
    });
  };

  return (
    <>
      <div
        className={twMerge(
          'w-full rounded-lg px-7 py-2 flex items-center',
          isChecked ? 'bg-white' : 'bg-gray-200'
        )}
      >
        <label className="flex items-center cursor-pointer mr-auto">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheck}
            className="w-5 h-5 cursor-pointer text-green-500 bg-gray-300 border-gray-300 rounded focus:ring-offset-0 focus:ring-transparent focus:sha"
          />
          <div className="mx-2">
            <DimensionIcon className="w-auto h-12" />
          </div>
          <p
            className={twMerge(
              'm-0 text-transparent bg-clip-text font-bold text-2xl mr-4 uppercase',
              getElementGradientColorClassFromUnion(categoryName)
            )}
          >
            {singularize(categoryName)}
          </p>
          <p className="m-0 text-dark font-bold text-sm overflow-hidden text-ellipsis max-w-md max-h-10">
            {title}
          </p>
        </label>
        <div className="flex items-center">
          {!!sub_elements?.length && 
            <button type="button" onClick={toggle} className="p-2 -mr-2">
              {!isOpen ? <PlusIcon /> : <MinusIcon />}
            </button>
          }
        </div>
      </div>

      <div
        className={
          isOpen
            ? 'rounded-lg border-white focus:ring-4 focus:ring-white transition-all w-full'
            : 'hidden'
        }
      >
        <ul className="flex flex-col gap-4">
          {sub_elements?.map((sub_element) => (
            <li key={sub_element.element_id + sub_element.title[0]}>
              <div
                className={twMerge(
                  'w-full bg-transparent border rounded-lg px-7 py-2 flex items-center',
                  selectedSubElementIds.includes(sub_element.element_id)
                    ? 'border-white'
                    : 'border-gray-200'
                )}
              >
                <label className="flex items-center cursor-pointer mr-auto">
                  <input
                    disabled={!isChecked}
                    type="checkbox"
                    checked={selectedSubElementIds.includes(
                      sub_element.element_id
                    )}
                    onChange={handleSubCategoryCheck(sub_element)}
                    className="w-5 h-5 cursor-pointer text-green-500 bg-gray-300 border-gray-300 rounded focus:ring-offset-0 focus:ring-transparent"
                  />
                  <div className="mx-2">
                    <SubDimensionIcon className="w-auto h-10" />
                  </div>
                  <p
                    className={twMerge(
                      'm-0 font-bold text-xl mr-4 uppercase',
                      getElementTextClassFromUnion(categoryName)
                    )}
                  >
                    {'sub-' + singularize(categoryName)}
                  </p>
                  <p
                    className={twMerge(
                      'm-0 text-sm',
                      selectedSubElementIds.includes(sub_element.element_id)
                        ? 'text-white'
                        : 'text-gray-200'
                    )}
                  >
                    {sub_element.title}
                  </p>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DimensionCheckItem;
