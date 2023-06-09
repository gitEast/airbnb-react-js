import React, { memo } from 'react';
import { RoomWrapper } from './style';
import { Rating } from '@mui/material';

const RoomItem = memo((props) => {
  const { item, itemWidth } = props;

  return (
    <RoomWrapper $itemWidth={itemWidth}>
      <div className="cover">
        <img src={item.picture_url} alt="" />
      </div>
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
