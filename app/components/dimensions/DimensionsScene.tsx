'use client';

import { Element } from '@/models/elements/Element';
import { ElementDetail } from '@/models/elements/ElementDetail';
import { ElementUnion } from '@/models/enums/ElementType';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Canvas, Vector3 } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { MathUtils } from 'three';
import DimensionObject from './DimensionObject';
import DimensionsEnvironment from './DimensionsEnvironment';
import Diamond from './shapes/Diamond';
import PrismHexagon from './shapes/PrismHexagon';
import PrismPentagon from './shapes/PrismPentagon';
import Pyramid from './shapes/Pyramid';

export type DimensionsSceneProps = {
  elements: Element[];
  filterTypes?: ElementUnion[];
  onSelectedChange?: (element: ElementDetailListItem | undefined) => any;
};

export type ElementDetailListItem = {
  type: ElementUnion;
  detail: ElementDetail;
  level: 1 | 2 | 3;
};

export const DimensionsScene = ({
  elements,
  filterTypes,
  onSelectedChange
}: DimensionsSceneProps) => {
  const [elementDetails, setElementDetails] = useState<ElementDetailListItem[]>(
    []
  );
  const [selectedElement, setSelectedElement] = useState<
    ElementDetailListItem | undefined
  >(undefined);

  const getScaleFromLevel = (number: 1 | 2 | 3) => {
    switch (number) {
      case 1:
        return 2;
      case 2:
        return 1;
      case 3:
        return 0.25;
      default:
        return 1;
    }
  };

  const onElementClick = (element: ElementDetailListItem) => {
    if (
      !!selectedElement &&
      element.level === selectedElement.level &&
      element.type === selectedElement.type &&
      element.detail.cat_id === selectedElement.detail.cat_id
    ) {
      setSelectedElement(undefined);
    } else {
      setSelectedElement(element);
    }
  };

  const renderElement = (element: ElementDetailListItem, index: number) => {
    const elementPosition: Vector3 = [
      MathUtils.randFloatSpread(10),
      MathUtils.randFloatSpread(10),
      MathUtils.randFloatSpread(10)
    ];

    switch (element.type) {
      case 'Traits':
        return (
          <DimensionObject
            key={`element-${index}`}
            position={elementPosition}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <Pyramid />
          </DimensionObject>
        );
      case 'Events':
        return (
          <DimensionObject
            key={`element-${index}`}
            position={elementPosition}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <Diamond />
          </DimensionObject>
        );
      case 'Benefits':
        return (
          <DimensionObject
            key={`element-${index}`}
            position={elementPosition}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <PrismPentagon />
          </DimensionObject>
        );
      case 'Behavior':
        return (
          <DimensionObject
            key={`element-${index}`}
            position={elementPosition}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <PrismHexagon />
          </DimensionObject>
        );
      default:
        return <mesh key={`element-${index}`}></mesh>;
    }
  };

  useEffect(() => {
    const detailsList: ElementDetailListItem[] = [];

    // * See about naming these differently so we can do this recursively
    elements.forEach((e) => {
      e.detail_level1.forEach((dl1) => {
        detailsList.push({
          type: e.element_type,
          level: 1,
          detail: { ...dl1, detail_level2: undefined, detail_level3: undefined }
        });
        if (!!dl1.detail_level2) {
          dl1.detail_level2.forEach((dl2) => {
            detailsList.push({
              type: e.element_type,
              level: 2,
              detail: {
                ...dl2,
                detail_level2: undefined,
                detail_level3: undefined
              }
            });
            if (!!dl2.detail_level3) {
              dl2.detail_level3.forEach((dl3) => {
                detailsList.push({
                  type: e.element_type,
                  level: 3,
                  detail: {
                    ...dl3,
                    detail_level2: undefined,
                    detail_level3: undefined
                  }
                });
              });
            }
          });
        }
      });
    });

    if (!!!filterTypes || filterTypes.length === 0) {
      setElementDetails(detailsList);
    } else {
      setElementDetails(
        detailsList.filter((dli) => filterTypes.includes(dli.type))
      );
    }
  }, [elements, filterTypes]);

  useEffect(() => {
    !!onSelectedChange && onSelectedChange(selectedElement);
  }, [onSelectedChange, selectedElement]);

  return (
    <Canvas camera={{ position: [-15, 10, 15] }}>
      <DimensionsEnvironment />
      <OrbitControls makeDefault />

      <Physics gravity={[0, 0, 0]}>
        {elementDetails.map((ed, i) => renderElement(ed, i))}
      </Physics>
    </Canvas>
  );
};

export default DimensionsScene;
