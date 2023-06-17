import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import RoomItem from 'components/room-item';

import { RoomsWrapper } from './style';
import { useNavigate } from 'react-router-dom';

const EntireRooms = memo(() => {
  const navigate = useNavigate();
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  );

  function itemClick() {
    navigate('/detail');
  }

  return (
    <RoomsWrapper>
      <div className="title">{totalCount}多处房源</div>
      <div className="room-list">
        {roomList.map((item) => (
          <RoomItem
            key={item._id}
            item={item}
            itemWidth="20%"
            itemClick={itemClick}
          />
        ))}
      </div>
      {isLoading && <div className="loading-cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
