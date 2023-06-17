import React, { memo, useState } from 'react';

import Indicator from '@/base-ui/indicator';
import { DemoWrapper } from './style';

const Demo = memo(() => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const [selectIndex, setSelectIndex] = useState(0);

  function handleItemClick(index, item) {
    setSelectIndex(index);
  }

  return (
    <DemoWrapper>
      <h1>Demo Page</h1>
      <button>上一个</button>
      <button>下一个</button>
      <div className="wrapper">
        <Indicator selectIndex={selectIndex}>
          {items.map((item, index) => (
            <div
              key={item}
              className="item"
              onClick={() => handleItemClick(index, item)}
            >
              {item}
            </div>
          ))}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
