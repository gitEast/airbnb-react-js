import { styled } from 'styled-components';

export const TabsWrapper = styled.div`
  .tab {
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    text-align: center;
    font-size: 17px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.active,
    &:hover {
      color: #fff;
      background-color: #00848a;
    }
  }
`;
