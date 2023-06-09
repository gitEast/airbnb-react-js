import React, { memo, useCallback, useState } from 'react';
import { SectionV2Wrapper } from './style';
import SectionHeader from 'components/section-header';
import SectionTabs from 'components/section-tabs';
import SectionRooms from 'components/section-rooms';
import SectionFooter from 'components/section-footer';

const HomeSectionV2 = memo((props) => {
  const { info } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const tabs = info.dest_address?.map((item) => item.name);

  const handleTabClick = useCallback((tab, index) => {
    setTabIndex(index);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <SectionTabs tabs={tabs} tabClick={handleTabClick} />
      <SectionRooms list={info.dest_list[tabs[tabIndex]]} itemWidth="33.33%" />
      <SectionFooter tab={tabs[tabIndex]} />
    </SectionV2Wrapper>
  );
});

export default HomeSectionV2;
