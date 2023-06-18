import React, { memo, useState } from 'react';

import { PicturesWrapper } from './style';
import PictureBrowser from '@/base-ui/picture-brwoser';

const DetailPictures = memo((props) => {
  const { pictureUrls } = props;

  const [isShow, setIsShow] = useState(false);

  function handleShowBtnClick() {
    setIsShow(true);
  }

  function closeClick() {
    setIsShow(false);
  }

  return (
    <PicturesWrapper>
      <div className="picture-list">
        <div className="left">
          <div className="picture-item">
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {pictureUrls.slice(1, 5).map((url) => (
            <div key={url} className="picture-item">
              <img src={url} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="show-btn" onClick={handleShowBtnClick}>
        <span>查看照片</span>
      </div>
      {isShow && (
        <PictureBrowser pictureUrls={pictureUrls} closeClick={closeClick} />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
