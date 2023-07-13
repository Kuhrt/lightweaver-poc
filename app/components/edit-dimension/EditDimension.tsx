'use client';

import { Button } from '../buttons/Button';
import {
  getHeadingPhraseFromElement,
  getTitlePhraseFromElement
} from '@/utils/elements';
import DimensionCheckItem from '../dimension-check-item/DimensionCheckItem';
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import { useEffect, useState } from 'react';
import { Element } from '@/models/dimensions/Element';
import { useRouter } from "next/navigation";
import EditDimensionDialog from "./EditDimensionDialog";
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export type EditDimensionProps = {
  elementType: ProfileElementUnion;
  elements: Element[];
};

const EditDimension = ({elementType, elements}: EditDimensionProps) => {
  const router = useRouter();
  const [editedElements, setEditedElements] = useState<Element[]>([]);
  const [isError, setIsError] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setEditedElements(
      elements
        .filter((e) => e.is_selected)
        .map(({ title, element_id, sub_elements, is_selected }) => {
          return {
            title,
            element_id,
            is_selected,
            sub_elements: sub_elements
              ?.filter((e) => e.is_selected)
              .map(({ element_id, title }) => ({ element_id, title }))
          };
        })
    );
  }, [elements]);

  const handleChange = (element: Element) => {
    let newElements: Element[] = [...editedElements];
    if (
      editedElements.find(({ element_id }) => element_id === element.element_id)
    ) {
      newElements = editedElements.filter(
        ({ element_id }) => element_id !== element.element_id
      );
    }
    if (element.is_selected) {
      newElements.push(element);
    }
    setEditedElements(newElements);
  };

  const handleBack = () => {
    setIsDialogOpen(true);
  }

  const handleSave = async () => {
    setIsError(false);
    const body = {
      profileElement: {
        dimension_type: elementType,
        elements: editedElements.map(({ element_id, title, sub_elements }) => {
          return {
            element_id,
            title,
            sub_elements: sub_elements?.map(({ element_id, title }) => ({
              element_id,
              title
            }))
          };
        })
      }
    };

    const res = await fetch('/api/user/profile/dimension', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const ok = await res.json();

    if (ok) {
      router.push('/edit?success=true');
    } else {
      setIsError(true);
    }
    router.refresh();
  }

  return (
    <div className="pt-14 pb-4 px-4 min-h-full max-w-screen-2xl w-full mx-auto flex flex-col items-center relative">
      <Button
        className="absolute left-4 z-10"
        outlined
        type="button"
        onClick={handleBack}
      >
        Back to Dimensions
      </Button>
      <Button className="absolute right-4 z-10" onClick={handleSave}>
        Save &amp; Close
      </Button>
      <div className="flex flex-col w-full justify-center mb-16 relative">
        {isError && (
          <div className="mb-9 flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-2xl align-middle">
              Looks like there was an issue. Please try again.
            </h2>
            <div className="mt-6">
              <ExclamationTriangleIcon
                className="w-5 h-5 fill-red-500 mx-auto mb-2"
                aria-hidden="true"
              />
              <p className="text-white italic text-sm m-0">
                Still having issues? Reach out to our support team at{' '}
                <a href="mailto:info@lightweaver.com" className="underline">
                  info@lightweaver.com
                </a>
                .
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-white font-bold text-3xl align-middle m-0">
            {getHeadingPhraseFromElement(elementType)}
          </h1>
          <p className="m-0 text-white text-center text-xl">
            {getTitlePhraseFromElement(elementType)}
          </p>
          <p className="m-0 text-white text-center text-base italic">
            (Select all that apply)
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[44rem] gap-5">
        {/* List component */}
        {elements.map((element) => (
          <DimensionCheckItem
            key={element.element_id}
            element={element}
            categoryName={elementType}
            handleChange={handleChange}
          />
        ))}
      </div>

      {/* Modal */}
      <EditDimensionDialog open={isDialogOpen} setOpen={setIsDialogOpen} />
    </div>
  );
};

export default EditDimension;
