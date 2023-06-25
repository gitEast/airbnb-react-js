import React, { memo } from 'react';
import { SectionsWrapper } from './style';

const SearchSections = memo((props) => {
  const { infos } = props;
  return (
    <SectionsWrapper>
      {infos.map((info, idx) => (
        <div className="info-wrapper">
          <div key={info.title} className="info">
            <div className="title">{info.title}</div>
            <div className="desc">{info.desc}</div>
          </div>
          {idx < infos.length - 1 && <div className="divider" />}
        </div>
      ))}
    </SectionsWrapper>
  );
});

export default SearchSections;
