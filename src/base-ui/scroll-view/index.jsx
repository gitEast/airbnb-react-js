import React, { memo, useEffect, useRef, useState } from 'react';

import IconArrowLeft from 'assets/svg/icon-arrow-left';
import IconArrowRight from 'assets/svg/icon-arrow-right';

import { ViewWrapper } from './style';

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef = useRef();
  const totalDistantRef = useRef();

  useEffect(() => {
    totalDistantRef.current =
      scrollContentRef.current.scrollWidth -
      scrollContentRef.current.clientWidth;
    setShowRight(totalDistantRef.current > 0);
  }, [props.children]);

  function handleLeftArrowClick() {
    handleArrowClick(posIndex - 1);
  }

  function handleRightArrowClick() {
    handleArrowClick(posIndex + 1);
  }

  function handleArrowClick(newIndex) {
    setPosIndex(newIndex);
    const translateX = scrollContentRef.current.children[newIndex].offsetLeft;
    scrollContentRef.current.style.transform = `translateX(-${translateX}px)`;
    setShowRight(totalDistantRef.current - translateX > 0);
    setShowLeft(translateX > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="arrow left" onClick={handleLeftArrowClick}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="arrow right" onClick={handleRightArrowClick}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <ul ref={scrollContentRef} className="scroll-content">
          {props.children}
        </ul>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
