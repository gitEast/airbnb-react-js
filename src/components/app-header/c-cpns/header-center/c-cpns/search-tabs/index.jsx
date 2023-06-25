import React, { memo, useState } from 'react';
import { TabsWrapper } from './style';
import classNames from 'classnames';

const SearchTabs = memo((props) => {
  const { tabs, tabClick } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  function handleTabClick(index) {
    setActiveIndex(index);
    tabClick && tabClick(index);
  }

  return (
    <TabsWrapper>
      {tabs.map((tab, index) => (
        <div
          key={tab}
          className={classNames('tab', { active: activeIndex === index })}
          onClick={() => handleTabClick(index)}
        >
          <span className="text">{tab}</span>
          <span className="bottom"></span>
        </div>
      ))}
    </TabsWrapper>
  );
});

export default SearchTabs;
