import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import IconMoreArrow from 'assets/svg/icon-more-arrow';

import { FooterWrapper } from './style';

const SectionFooter = memo((props) => {
  const { tab } = props;

  const navigate = useNavigate();
  function handleMoreClick() {
    navigate('/entire');
  }

  return (
    <FooterWrapper color={tab ? '#00848A' : '#000'} onClick={handleMoreClick}>
      <span className="look-more">
        {tab ? `查看更多${tab}房源` : '查看全部'}
      </span>
      <IconMoreArrow />
    </FooterWrapper>
  );
});

export default SectionFooter;
