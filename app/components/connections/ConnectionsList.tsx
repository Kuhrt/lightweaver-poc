'use client';

import { BasicInfo } from '@/models/user/BasicInfo';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../buttons/Button';
import SelectableConnection from './SelectableConnection';

export type ConnectionsListProps = {
  connections: BasicInfo[];
};

export const ConnectionsList = ({ connections }: ConnectionsListProps) => {
  const maxSelected = 5;
  const [selectedUids, setSelectedUids] = useState<string[]>([]);

  const onConnectionSelect = (selected: boolean, uid: string) => {
    if (
      selected &&
      !selectedUids.includes(uid) &&
      selectedUids.length < maxSelected
    ) {
      setSelectedUids([...selectedUids, uid]);
    } else if (!selected && selectedUids.includes(uid)) {
      setSelectedUids(selectedUids.filter((id) => id !== uid));
    }
  };

  return (
    <div className="pt-14 z-10 min-h-full w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center">
      <div className="lg:flex w-full lg:justify-between mb-32 relative">
        <div></div>
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <h1 className="text-center mt-0 mb-4">Connections</h1>
          <p className="text-2xl text-center mb-8">
            Select one or multiple connections (up to {maxSelected}) to view
            relationship profile
          </p>
        </div>
        <Link
          className={
            selectedUids.length < 1 ? 'pointer-events-none' : undefined
          }
          href={{
            pathname: '/relationships',
            query: { guids: selectedUids.join(',') }
          }}
        >
          <Button special disabled={selectedUids.length < 1}>
            View Relationship
          </Button>
        </Link>
      </div>
      <div className="max-w-[44rem] w-full">
        <ul className="w-full flex-1 flex-col gap-2">
          {connections.map((connection, i) => (
            <SelectableConnection
              key={`connection-${i}`}
              info={connection}
              className="mb-2"
              onToggle={onConnectionSelect}
              isSelected={selectedUids.includes(connection.uid)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConnectionsList;
