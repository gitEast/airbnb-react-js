import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.08) 0 1px 1px;
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    background: ${(props) => (props.theme.isAlpha ? 'transparent' : '#fff')};
  }

  .content {
    position: relative;
    background: ${(props) => (props.theme.isAlpha ? 'transparent' : '#fff')};
    z-index: 9;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchDetailBgWrapper = styled.div`
  height: ${(props) => (props.isSearch ? '100px' : '0')};
  transition: height 250ms ease;
`;
