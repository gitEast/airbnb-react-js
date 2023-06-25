import { styled } from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;

  .tab {
    position: relative;
    height: 20px;
    margin: 10px 16px;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    &.active {
      .bottom {
        background: ${(props) => (props.theme.isAlpha ? '#fff' : '#333')};
      }
    }

    .text {
      color: ${(props) => (props.theme.isAlpha ? '#fff' : '#222')};
    }

    .bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8px;
      height: 2px;
    }
  }
`;
