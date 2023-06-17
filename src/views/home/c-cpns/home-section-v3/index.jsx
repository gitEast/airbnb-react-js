import React, { memo } from 'react';

import ScrollView from '@/base-ui/scroll-view';
import SectionHeader from 'components/section-header';
import RoomItem from 'components/room-item';

import { SectionV3Wrapper } from './style';

const HomeSectionV3 = memo((props) => {
  const { info } = props;
  const list = info.list ?? [];

  return (
    <SectionV3Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <div className="room-list">
        <ScrollView>
          {list.map((item) => (
            <RoomItem key={item.id} item={item} itemWidth="20%" />
          ))}
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  );
});

export default HomeSectionV3;
