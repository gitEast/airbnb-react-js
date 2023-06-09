import React, { memo } from 'react';
import { RoomsWrapper } from './style';
import RoomItem from '../room-item';

const SectionRooms = memo((props) => {
  const { list, itemWidth = '25%' } = props;

  return (
    <RoomsWrapper>
      {list.slice(0, 8).map((item) => (
        <RoomItem key={item.id} item={item} itemWidth={itemWidth} />
      ))}
    </RoomsWrapper>
  );
});

export default SectionRooms;
