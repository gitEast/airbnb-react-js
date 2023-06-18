import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import RoomItem from 'components/room-item';

import { RoomsWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from 'store/modules/detail';

const EntireRooms = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  );

  function itemClick(item) {
    dispatch(changeDetailInfoAction(item));
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
            itemClick={() => itemClick(item)}
          />
        ))}
      </div>
      {isLoading && <div className="loading-cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
