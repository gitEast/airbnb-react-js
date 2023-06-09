import React, { memo } from 'react';
import { SectionV1Wrapper } from './style';
import SectionHeader from 'components/section-header';
import SectionRooms from 'components/section-rooms';
import SectionFooter from 'components/section-footer';

const HomeSectionV1 = memo((props) => {
  const { info } = props;

  const list = info.list?.slice(0, 8) ?? [];

  return (
    <SectionV1Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <SectionRooms list={list} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

export default HomeSectionV1;
