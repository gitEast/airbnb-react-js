import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.08) 0 1px 1px;

  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 99;
  }
`;
