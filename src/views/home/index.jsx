import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchHomeDataAction } from 'store/modules/home';
import isEmptyObj from 'utils/isEmptyObj';

import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import HomeSectionV3 from './c-cpns/home-section-v3';
import HomeSectionV4 from './c-cpns/home-section-v4';

import { HomeWrapper } from './style';
import { changeHeaderConfigAction } from 'store/modules/main';

const Home = memo(() => {
  const dispatch = useDispatch();
  const {
    highScoreInfo,
    goodPriceInfo,
    discountInfo,
    hotRecommendInfo,
    plusInfo,
    longforInfo
  } = useSelector((state) => ({
    highScoreInfo: state.home.highScoreInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    plusInfo: state.home.plusInfo,
    longforInfo: state.home.longforInfo
  }));

  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmptyObj(discountInfo) && <HomeSectionV2 info={discountInfo} />}
        {!isEmptyObj(hotRecommendInfo) && (
          <HomeSectionV2 info={hotRecommendInfo} />
        )}
        <HomeSectionV4 info={longforInfo} />
        <HomeSectionV1 info={highScoreInfo} />
        <HomeSectionV1 info={goodPriceInfo} />
        <HomeSectionV3 info={plusInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
