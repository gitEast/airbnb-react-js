import React, { memo } from 'react';
import { PicturesWrapper } from './style';

const DetailPictures = memo((props) => {
  const { pictureUrls } = props;

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
            <div className="picture-item">
              <img src={url} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
    </PicturesWrapper>
  );
});

export default DetailPictures;
