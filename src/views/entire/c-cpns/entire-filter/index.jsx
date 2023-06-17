import React, { memo, useState } from 'react';
import classNames from 'classnames';

import { FilterWrapper } from './style';

import filterData from 'assets/data/filter_data.json';

const EntireFilter = memo(() => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  function handleItemClick(item) {
    const newSelected = new Set([...selectedItems]);
    if (newSelected.has(item)) {
      newSelected.delete(item);
    } else {
      newSelected.add(item);
    }
    setSelectedItems(newSelected);
  }

  return (
    <FilterWrapper>
      <ul className="filter-list">
        {filterData.map((item) => (
          <li
            key={item}
            className={classNames('item', { active: selectedItems.has(item) })}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </FilterWrapper>
  );
});

export default EntireFilter;
