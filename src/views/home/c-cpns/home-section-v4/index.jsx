import React, { memo } from 'react';

import ScrollView from '@/base-ui/scroll-view';
import SectionHeader from 'components/section-header';
import LongforItem from 'components/longfor-item';

import { SectionV4Wrapper } from './style';

const HomeSectionV4 = memo((props) => {
  const { info } = props;
  const list = info.list ?? [];

  return (
    <SectionV4Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {list.map((item, idx) => (
            <LongforItem key={`${item.id}${idx}`} item={item} />
          ))}
        </ScrollView>
      </div>
    </SectionV4Wrapper>
  );
});

export default HomeSectionV4;
