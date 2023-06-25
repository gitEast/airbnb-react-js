import React, { memo, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CenterWrapper } from './style';
import SearchBar from './c-cpns/search-bar';
import SearchTabs from './c-cpns/search-tabs';
import SearchSections from './c-cpns/search-sections';
import searchTitleData from 'assets/data/search_titles.json';

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = searchTitleData.map((item) => item.title);
  const handleTabClick = useCallback(function (index) {
    setTabIndex(index);
  }, []);

  return (
    <CenterWrapper>
      {/* {!isSearch ? (
        <SearchBar searchBarClick={searchBarClick} />
      ) : (
        <div className="search-detail">
          <SearchTabs tabs={tabs} tabClick={handleTabClick} />
          <SearchSections infos={searchTitleData[tabIndex].searchInfos} />
        </div>
      )} */}
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <SearchBar searchBarClick={searchBarClick} />
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs tabs={tabs} tabClick={handleTabClick} />
          <SearchSections infos={searchTitleData[tabIndex].searchInfos} />
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
