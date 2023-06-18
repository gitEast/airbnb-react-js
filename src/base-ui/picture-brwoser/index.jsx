import React, { memo, useEffect, useState } from 'react';
import IconClose from 'assets/svg/icon-close';
import IconArrowLeft from 'assets/svg/icon-arrow-left';
import IconArrowRight from 'assets/svg/icon-arrow-right';
import IconTriangleTop from 'assets/svg/icon-triangle-top';
import IconTriangleBottom from 'assets/svg/icon-triangle-bottom';
import Indicator from '../indicator';
import { BrowserWrapper } from './style';
import classNames from 'classnames';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [isShowIndicator, setIsShowIndicator] = useState(true);

  function handleCloseBtnClick() {
    closeClick && closeClick();
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  function handleControlClick(isRight) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex >= pictureUrls.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsRight(isRight);
  }

  function handleCurrentIndexChange(index) {
    setCurrentIndex(index);
    setIsRight(index > currentIndex ? true : false);
  }

  function handleIsShowIndicatorChange() {
    setIsShowIndicator(!isShowIndicator);
  }

  return (
    <BrowserWrapper $isRight={isRight} $isShowIndicator={isShowIndicator}>
      <div className="top">
        <div className="close-btn" onClick={handleCloseBtnClick}>
          <IconClose />
        </div>
      </div>
      <div className="center">
        <div className="control">
          <div className="btn left" onClick={() => handleControlClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => handleControlClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="pic-wrapper">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={250}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <div className="desc">
            <span className="left">
              {currentIndex + 1}/{pictureUrls.length}: room Apartment 图片
              {currentIndex + 1}
            </span>
            <div className="right" onClick={handleIsShowIndicatorChange}>
              <span>{isShowIndicator ? '隐藏' : '显示'}照片列表</span>
              {isShowIndicator ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="indicator-wrapper">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((url, index) => (
                <div
                  key={url}
                  className={classNames('item', {
                    active: currentIndex === index
                  })}
                  onClick={() => handleCurrentIndexChange(index)}
                >
                  <img src={url} alt="" />
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

export default PictureBrowser;
