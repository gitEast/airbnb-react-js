import React, { memo } from 'react';
import { FooterWrapper } from './style';
import footerData from '@/assets/data/footer.json';

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item) => (
            <div key={item.name} className="item">
              <div className="title">{item.name}</div>
              <ul>
                {item.list.map((itm) => (
                  <li key={itm} className="itm">
                    {itm}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="statement">
          <span>
            © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
            全国旅游投诉渠道 12301
          </span>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
