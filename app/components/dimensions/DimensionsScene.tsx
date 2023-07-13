'use client';

import { ElementListItem } from '@/models/elements/ElementListItem';
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import { RelationshipViewModeEnum } from '@/models/enums/RelationshipViewModeEnum';
import { ProfileData } from '@/models/user/ProfileData';
import { User } from '@/models/user/User';
import { buildProfileElementList } from '@/utils/elements';
import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense, useEffect, useState } from 'react';
import DimensionObject from './DimensionObject';
import DimensionsBorders from './DimensionsBorders';
import DimensionsEnvironment from './DimensionsEnvironment';
import Behavior from './shapes/Behavior';
import Benefit from './shapes/Benefit';
import Event from './shapes/Event';
import Trait from './shapes/Trait';

export type DimensionsSceneProps = {
  profile: ProfileData;
  filterTypes?: ProfileElementUnion[];
  onSelectedChange?: (element: ElementListItem | undefined) => any;
  relationships?: User[];
  relationshipViewMode?: string;
};

export const DimensionsScene = ({
  profile,
  filterTypes,
  onSelectedChange,
  relationships,
  relationshipViewMode
}: DimensionsSceneProps) => {
  const [elementDetails, setElementDetails] = useState<ElementListItem[]>([]);
  const [selectedElement, setSelectedElement] = useState<
    ElementListItem | undefined
  >(undefined);

  const getScaleFromLevel = (number: number) => {
    switch (number) {
      case 1:
        return 1.75;
      case 2:
        return 1.25;
      case 3:
        return 0.66;
      default:
        return 1;
    }
  };

  const onElementClick = (element: ElementListItem) => {
    if (
      !!selectedElement &&
      element.level === selectedElement.level &&
      element.type === selectedElement.type &&
      element.element.element_id === selectedElement.element.element_id
    ) {
      setSelectedElement(undefined);
    } else {
      setSelectedElement({ ...element });
    }
  };

  const renderElement = (element: ElementListItem, index: number) => {
    switch (element.type) {
      case 'Traits':
        return (
          <DimensionObject
            key={`element-${index}`}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <Trait />
          </DimensionObject>
        );
      case 'Events':
        return (
          <DimensionObject
            key={`element-${index}`}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <Event />
          </DimensionObject>
        );
      case 'Benefits':
        return (
          <DimensionObject
            key={`element-${index}`}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <Benefit />
          </DimensionObject>
        );
      case 'Behavior':
        return (
          <DimensionObject
            key={`element-${index}`}
            scale={getScaleFromLevel(element.level)}
            elementType={element.type}
            onClick={() => onElementClick(element)}
          >
            <Behavior />
          </DimensionObject>
        );
      default:
        return <mesh key={`element-${index}`}></mesh>;
    }
  };

  useEffect(() => {
    let usersList = buildProfileElementList(profile);
    let detailsList: ElementListItem[] = [];

    if (!!relationships && relationships.length > 0) {
      let relationshipsList: ElementListItem[] = [];

      relationships.forEach((u) => {
        if (!!u.profile) {
          const relationshipDetailsList = buildProfileElementList(u.profile);

          relationshipsList = [
            ...relationshipsList,
            ...relationshipDetailsList
          ];
        }
      });

      if (
        !!relationshipViewMode &&
        relationshipViewMode !== RelationshipViewModeEnum.Everything
      ) {
        const userCategories = Array.from(
          new Set(usersList.map((pe) => pe.element.element_id))
        );
        const relationshipsCategories = Array.from(
          new Set(relationshipsList.map((pe) => pe.element.element_id))
        );

        if (relationshipViewMode === RelationshipViewModeEnum.Similarities) {
          usersList = usersList.filter((pe) =>
            relationshipsCategories.includes(pe.element.element_id)
          );
          relationshipsList = relationshipsList.filter(
            (pe) =>
              userCategories.includes(pe.element.element_id) &&
              !usersList.some(
                (upe) => upe.element.element_id === pe.element.element_id
              )
          );
        } else if (
          relationshipViewMode === RelationshipViewModeEnum.Complementaries
        ) {
          usersList = usersList.filter(
            (pe) => !relationshipsCategories.includes(pe.element.element_id)
          );
          relationshipsList = relationshipsList.filter(
            (pe) => !userCategories.includes(pe.element.element_id)
          );
        }
      }

      detailsList = [...usersList, ...relationshipsList];
    } else {
      detailsList = [...usersList];
    }

    if (!!!filterTypes || filterTypes.length === 0) {
      setElementDetails(detailsList);
    } else {
      setElementDetails(
        detailsList.filter((dli) => filterTypes.includes(dli.type))
      );
    }
  }, [profile, filterTypes, relationships, relationshipViewMode]);

  useEffect(() => {
    !!onSelectedChange && onSelectedChange(selectedElement);
  }, [onSelectedChange, selectedElement]);

  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 25 }}>
      <Suspense fallback={null}>
        <DimensionsEnvironment />

        <Physics gravity={[0, 0, 0]} allowSleep={false}>
          <group position={[0, 0, -10]}>
            <DimensionsBorders />
            {elementDetails.map((ed, i) => renderElement(ed, i))}
          </group>
        </Physics>

        <EffectComposer>
          <Bloom
            intensity={0.7}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default DimensionsScene;
