import React, { memo, useState } from 'react';
import { TabsWrapper } from './style';
import classNames from 'classnames';
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = memo((props) => {
  const { tabs = [], tabClick } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  function handleTabClick(tab, index) {
    setActiveIndex(index);
    tabClick(tab, index);
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabs.map((tab, index) => (
          <li
            key={tab}
            className={classNames('tab', { active: index === activeIndex })}
            onClick={() => handleTabClick(tab, index)}
          >
            {tab}
          </li>
        ))}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
