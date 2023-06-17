import React, { memo } from 'react';
import { ItemWrapper } from './style';

const LongforItem = memo((props) => {
  const { item } = props;

  return (
    <ItemWrapper>
      <div className="inner">
        <img src={item.picture_url} alt="" />
        <div className="cover"></div>
        <div className="info">
          <div className="city">{item.city}</div>
          <div className="price">均价 {item.price}</div>
        </div>
      </div>
    </ItemWrapper>
  );
});

export default LongforItem;
