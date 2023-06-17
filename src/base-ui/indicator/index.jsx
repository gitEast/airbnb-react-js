import React, { memo, useEffect, useRef } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = memo((props) => {
  const { selectIndex } = props;

  const list = useRef();

  useEffect(() => {
    const scrollWidth = list.current.scrollWidth;
    const clientWidth = list.current.clientWidth;
    const selectItem = list.current.children[selectIndex];
    let translateX =
      clientWidth * 0.5 - selectItem.clientWidth * 0.5 - selectItem.offsetLeft;
    if (translateX > 0) translateX = 0;
    if (translateX < clientWidth - scrollWidth) {
      translateX = clientWidth - scrollWidth;
    }

    list.current.style.transform = `translateX(${translateX}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div ref={list} className="indicator-list">
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
