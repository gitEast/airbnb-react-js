import React, { memo } from 'react';
import { FooterWrapper } from './style';
import IconMoreArrow from 'assets/svg/icon-more-arrow';

const SectionFooter = memo((props) => {
  const { tab } = props;

  return (
    <FooterWrapper color={tab ? '#00848A' : '#000'}>
      <span className="look-more">
        {tab ? `查看更多${tab}房源` : '查看全部'}
      </span>
      <IconMoreArrow />
    </FooterWrapper>
  );
});

export default SectionFooter;
