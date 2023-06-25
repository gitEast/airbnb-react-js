import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-rooms';

import { EntireWrapper } from './style';

import { fetchEntireDataAction } from 'store/modules/entire/actionCreators';
import EntirePagination from './c-cpns/entire-pagination';
import { changeHeaderConfigAction } from 'store/modules/main';

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
