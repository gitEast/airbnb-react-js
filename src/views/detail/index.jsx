import React, { memo } from 'react';
import { DetailWrapper } from './style';
import { shallowEqual, useSelector } from 'react-redux';
import DetailPictures from './c-cpns/detail-pictures';

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  );

  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
