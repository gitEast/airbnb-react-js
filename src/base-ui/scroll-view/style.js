import { styled } from 'styled-components';

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .arrow {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    transform: translate(-50%, -50%);
    z-index: 9;
    cursor: pointer;

    &.left {
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`;
