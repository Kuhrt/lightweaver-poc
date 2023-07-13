'use client';

import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import { User } from '@/models/user/User';
import { buildProfileElementList } from '@/utils/elements';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../buttons/Button';
import { UserAvatar } from '../users/UserAvatar';
import DimensionDetailCard from './DimensionDetailCard';
import DimensionsScene from './DimensionsScene';
import DimensionsSwitcher from './switcher/DimensionsSwitcher';
import Link from 'next/link';
import DropdownComponent from '../dropdown/DropdownComponent';
import { DropdownItem } from '@/models/dropdown/DropdownItem';
import { RelationshipViewModeEnum } from '@/models/enums/RelationshipViewModeEnum';
import { ElementListItem } from '@/models/elements/ElementListItem';

export type DimensionsProps = {
  user: User;
  isAnotherUser?: boolean;
  relationships?: User[];
};
export const Dimensions = ({
  user,
  isAnotherUser,
  relationships
}: DimensionsProps) => {
  const [selectedElement, setSelectedElement] = useState<
    ElementListItem | undefined
  >(undefined);
  const [filterTypes, setFilterTypes] = useState<ProfileElementUnion[]>([]);
  const [viewModeDropdownItems] = useState<DropdownItem[]>([
    {
      id: RelationshipViewModeEnum.Everything,
      title: RelationshipViewModeEnum.Everything
    },
    {
      id: RelationshipViewModeEnum.Similarities,
      title: RelationshipViewModeEnum.Similarities
    },
    {
      id: RelationshipViewModeEnum.Complementaries,
      title: RelationshipViewModeEnum.Complementaries
    }
  ]);
  const [selectedViewMode, setSelectedViewMode] = useState<DropdownItem>(
    viewModeDropdownItems[0]
  );
  const [selectedViewModeId, setSelectedViewModeId] = useState('');
  const [selectedInfoText, setSelectedInfoText] = useState<string | undefined>(
    undefined
  );

  const onSelectedChange = useCallback((e: ElementListItem | undefined) => {
    setSelectedElement(e);
  }, []);

  const onFilterClick = (type?: ProfileElementUnion) => {
    setSelectedElement(undefined);

    if (!type) {
      setFilterTypes([]);
      return;
    }

    setFilterTypes([type]);
  };

  const onViewModeChange = (viewModeId: string) => {
    setSelectedElement(undefined);
    const viewMode = viewModeDropdownItems.find((i) => i.id === viewModeId);

    if (!!viewMode) {
      setSelectedViewMode(viewMode);
    } else {
      setSelectedViewMode(viewModeDropdownItems[0]);
    }
  };

  useEffect(() => {
    if (!!selectedViewMode) {
      setSelectedViewModeId(selectedViewMode.id);
    } else {
      setSelectedViewModeId(RelationshipViewModeEnum.Everything);
    }
  }, [selectedViewMode]);

  useEffect(() => {
    if (
      !!!relationships ||
      !!!selectedElement ||
      !!!user.profile ||
      (!!!user.profile.traits &&
        !!!user.profile.events &&
        !!!user.profile.behavior &&
        !!!user.profile.benefits)
    ) {
      setSelectedInfoText(undefined);
      return;
    }

    const userElements = buildProfileElementList(user.profile);
    if (selectedElement.userId === user.profile.info.uid) {
      for (let index = 0; index < relationships.length; index++) {
        const relationship = relationships[index];
        if (!!relationship.profile) {
          const relationshipElements = buildProfileElementList(
            relationship.profile
          );

          if (
            relationshipElements.some(
              (re) =>
                selectedElement.element.element_id === re.element.element_id
            )
          ) {
            setSelectedInfoText(
              'This dimension is listed on both of your profiles'
            );
            break;
          } else {
            setSelectedInfoText(
              `This dimension is one that you have listed and ${relationship.profile.info.first_name} does not`
            );
          }
        }
      }
    } else {
      const relationship = relationships.find(
        (r) => r.profile?.info.uid === selectedElement.userId
      );

      if (
        !!relationship?.profile &&
        userElements.some(
          (ue) => selectedElement.element.element_id === ue.element.element_id
        )
      ) {
        setSelectedInfoText(
          'This dimension is listed on both of your profiles'
        );
      } else if (!!relationship?.profile) {
        setSelectedInfoText(
          `This dimension is one that ${relationship.profile.info.first_name} has listed and you do not`
        );
      }
    }
  }, [selectedElement, relationships, user.profile]);

  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-hidden">
        {!!user.profile && (
          <DimensionsScene
            profile={user.profile}
            onSelectedChange={onSelectedChange}
            filterTypes={filterTypes}
            relationships={relationships}
            relationshipViewMode={selectedViewMode.id}
          />
        )}
      </div>
      <div className="relative flex-1 pointer-events-none z-10 min-h-full w-full max-w-screen-2xl mx-auto flex flex-col justify-between py-14 px-4">
        <div className="flex items-start justify-between">
          <div className="pointer-events-auto">
            <DimensionsSwitcher onFilterClick={onFilterClick} />
          </div>
          <div className="text-right">
            {!!relationships && relationships.length > 0 ? (
              <div className="text-left -mt-6 pointer-events-auto">
                <DropdownComponent
                  items={viewModeDropdownItems}
                  selectedItem={selectedViewMode}
                  label="View Mode"
                  onFilterClick={onViewModeChange}
                />
              </div>
            ) : isAnotherUser ? (
              <Link
                href={{
                  pathname: '/relationships',
                  query: { guids: [user.profile?.info.uid].join(',') }
                }}
              >
                <Button type="button" className="pointer-events-auto">
                  View Relationship
                </Button>
              </Link>
            ) : (
              <Link href="/edit">
                <Button type="button" className="pointer-events-auto">
                  Edit Profile
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between">
          <div className="mt-4 md:mt-0">
            <UserAvatar
              isAnotherUser={isAnotherUser}
              user={user.profile?.info!}
              color="white"
            />
            {!!relationships &&
              relationships.map((u, i) =>
                !!u.profile?.info ? (
                  <UserAvatar
                    key={`user-avatar-${i}`}
                    isAnotherUser={true}
                    user={u.profile.info}
                    color="white"
                    className="ms-3 lg:ms-5"
                  />
                ) : undefined
              )}
          </div>
          <div>
            {!!selectedElement && (
              <DimensionDetailCard
                type={selectedElement.type}
                detail={selectedElement.element}
                infoText={selectedInfoText}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dimensions;
