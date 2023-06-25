import React, { memo, useEffect } from 'react';
import { DetailWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import DetailPictures from './c-cpns/detail-pictures';
import { changeHeaderConfigAction } from 'store/modules/main';

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  });

  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
