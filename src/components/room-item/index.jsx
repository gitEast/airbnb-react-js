import React, { memo, useRef, useState } from 'react';
import { RoomWrapper } from './style';
import { Rating } from '@mui/material';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
import Slider from 'react-slick';
import IconArrowLeft from 'assets/svg/icon-arrow-left';
import IconArrowRight from 'assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
  const { item, itemWidth, itemClick } = props;

  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();

  function handleControlClick(e, isRight) {
    if (isRight) sliderRef.current.slickNext();
    else sliderRef.current.slickPrev();

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = item.picture_urls.length - 1;
    if (newIndex >= item.picture_urls.length) newIndex = 0;
    setSelectIndex(newIndex);
    e.stopPropagation();
  }

  const SingleImg = (
    <div className="cover">
      <img src={item.picture_url} alt="" />
    </div>
  );

  function SliderImgs() {
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="slider">
        <div className="control">
          <div
            className="btn left"
            onClick={(e) => handleControlClick(e, false)}
          >
            <IconArrowLeft width="24" height="24" />
          </div>
          <div
            className="btn right"
            onClick={(e) => handleControlClick(e, true)}
          >
            <IconArrowRight width="24" height="24" />
          </div>
        </div>
        <Slider ref={sliderRef} {...sliderSettings}>
          {item.picture_urls.map((url) => (
            <div key={url} className="cover">
              <img src={url} alt="" />
            </div>
          ))}
        </Slider>
        <div className="indicator-wrapper">
          <Indicator selectIndex={selectIndex}>
            {item.picture_urls.map((item, index) => (
              <div key={item} className="dot-wrapper">
                <div
                  className={classNames('dot', {
                    active: selectIndex === index
                  })}
                />
              </div>
            ))}
          </Indicator>
        </div>
      </div>
    );
  }

  function handleItemClick() {
    itemClick && itemClick();
  }

  return (
    <RoomWrapper $itemWidth={itemWidth} onClick={handleItemClick}>
      {item.picture_urls ? SliderImgs() : SingleImg}
      <div className="desc">{item.verify_info?.messages?.join('·')}</div>
      <div className="name">{item.name}</div>
      <div className="price">￥{item.price}/晚</div>
      <div className="bottom">
        <Rating
          defaultValue={item.star_rating ?? 5}
          precision={0.5}
          readOnly
          sx={{ fontSize: '12px', color: '#00848A', marginRight: '-2px' }}
        />
        <span className="slip">{item.reviews_count} </span>
        {item.bottom_info?.content && <span>·{item.bottom_info?.content}</span>}
      </div>
    </RoomWrapper>
  );
});

export default RoomItem;
