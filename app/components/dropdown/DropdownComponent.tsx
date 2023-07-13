'use client';

import { useEffect, useId, useLayoutEffect, useMemo, useState } from 'react';
import { Dropdown, DropdownOptions } from 'flowbite';
import { v4 as uuidv4 } from 'uuid';
import Image, { StaticImageData } from 'next/image';
import { DropdownItem } from '@/models/dropdown/DropdownItem';
import { Button } from '../buttons/Button';

type DropdownComponentProps = {
  onFilterClick: (type?: any) => void;
  label: string;
  selectedItem: DropdownItem;
  items: DropdownItem[];
};

const DropdownComponent = ({
  onFilterClick,
  selectedItem,
  label,
  items
}: DropdownComponentProps) => {
  const [isMenuButtonAvailable, setIsMenuButtonAvailable] = useState(true);
  const uniqueId = useId();
  const [selectedElement, setSelectedElement] =
    useState<DropdownItem>(selectedItem);
  const [dropdown, setDropdown] = useState<Dropdown | undefined>(undefined);

  const options = useMemo<DropdownOptions>(
    () => ({
      placement: 'bottom',
      triggerType: 'click',
      delay: 0,
      onHide: () => {
        setIsMenuButtonAvailable(true);
      },
      onShow: () => {
        setIsMenuButtonAvailable(false);
      }
    }),
    []
  );

  useLayoutEffect(() => {
    const targetElement = document.getElementById(`dropdown-${uniqueId}`);
    const triggerElement = document.getElementById(
      `dropdown-trigger-${uniqueId}`
    );

    setDropdown(new Dropdown(targetElement, triggerElement, options));
  }, [uniqueId, options]);

  const elementClickHandler = (id: string) => () => {
    id === 'Everything' ? onFilterClick() : onFilterClick(id);
    setSelectedElement(items.find((item) => item.id === id)!);
    dropdown?.hide();
  };

  // TODO: remove this when only svg icons are used
  function isStaticImage(img: any): img is StaticImageData {
    return (
      'src' in img &&
      typeof img.src === 'string' &&
      'height' in img &&
      typeof img.height === 'number' &&
      'width' in img &&
      typeof img.width === 'number'
    );
  }

  return (
    <div>
      <div>
        <p className="text-white font-bold text-xs m-0 mb-2">{label}</p>
      </div>
      <Button
        type="button"
        outlined
        className={
          !isMenuButtonAvailable
            ? 'hidden'
            : 'flex justify-start items-center focus:ring-0 transition-all py-3 w-64'
        }
        id={`dropdown-trigger-${uniqueId}`}
        data-dropdown-toggle={`dropdown-${uniqueId}`}
      >
        {selectedElement.iconSrc && (
          <div className="w-8 h-8 mr-2 flex items-center justify-center">
            {isStaticImage(selectedElement.iconSrc) ? (
              <Image
                src={selectedElement.iconSrc}
                alt={selectedElement.title}
                width={35}
                height={35}
              />
            ) : (
              selectedElement.iconSrc
            )}
          </div>
        )}
        <p className="font-bold text-white m-0">{selectedElement.title}</p>
      </Button>

      <div
        id={`dropdown-${uniqueId}`}
        className="hidden !relative !translate-x-0 !translate-y-0 border-2 rounded-lg border-white focus:ring-4 focus:ring-white transition-all w-64"
      >
        <ul
          className="py-3 flex flex-col gap-4"
          aria-labelledby={`dropdown-trigger-${uniqueId}`}
        >
          {items.map(({ id, title, iconSrc }) => {
            return (
              <li key={id}>
                <button
                  type="button"
                  className="w-full px-5 flex justify-start items-center text-base text-gray-300 pointer-events-auto cursor-pointer hover:text-white"
                  onClick={elementClickHandler(id)}
                >
                  {iconSrc && (
                    <div className="w-8 h-8 mr-2 flex items-center justify-center">
                      {isStaticImage(iconSrc) ? (
                        <Image
                          src={iconSrc}
                          alt={title}
                          width={35}
                          height={35}
                        />
                      ) : (
                        iconSrc
                      )}
                    </div>
                  )}
                  <p className="font-bold m-0">{title}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropdownComponent;
