import React, { memo } from 'react';

import { Pagination } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { PaginationWrapper } from './style';

import { fetchEntireDataAction } from 'store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const dispatch = useDispatch();
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }));

  const count = Math.ceil(totalCount / 20);
  const start = currentPage * 20 + 1;
  const end = (currentPage + 1) * 20;

  const handleChange = (event, value) => {
    window.scrollTo(0, 0);
    dispatch(fetchEntireDataAction(value - 1));
  };

  return (
    <PaginationWrapper>
      <Pagination
        count={count}
        page={currentPage + 1}
        onChange={handleChange}
      />
      <div className="desc">
        第 {start} - {end} 个房源，共超过 300 个
      </div>
    </PaginationWrapper>
  );
});

export default EntirePagination;
