import { styled } from 'styled-components';

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  padding: 6px 0 6px 16px;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  z-index: 9;

  .filter-list {
    display: flex;
    margin-left: -12px;
    font-size: 14px;
    line-height: 24px;

    > .item {
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      margin: 0 4px 0 8px;
      border-radius: 4px;
      cursor: pointer;

      &.active {
        border: 1px solid #008489;
        background: #008489;
        color: #ffffff;
      }
    }
  }
`;
