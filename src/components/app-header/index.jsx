import React, { memo } from 'react';
import classNames from 'classnames';
import { HeaderWrapper } from './style';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';
import { useSelector } from 'react-redux';

const AppHeader = memo(() => {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }));
  const { isFixed } = headerConfig;
  console.log(isFixed);

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
