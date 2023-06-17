import { styled } from 'styled-components';

export const RoomWrapper = styled.li`
  position: relative;
  width: ${(props) => props.$itemWidth};
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  cursor: pointer;

  .cover {
    position: relative;
    padding: 66.6% 0 0;
    border-radius: 4px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slider {
    position: relative;

    .control {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      z-index: 9;

      .btn {
        display: none;
        align-items: center;
        justify-content: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
        color: #fff;
        cursor: pointer;

        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }

      &:hover {
        .btn {
          display: flex;
        }
      }
    }

    .slick-arrow {
      display: none !important;
    }

    .cover {
      vertical-align: top;
    }

    .indicator-wrapper {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      width: 30%;
      margin: 0 auto;
      overflow: hidden;
      z-index: 9;

      .dot-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        cursor: pointer;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }

  .desc {
    margin: 10px 0 5px;
    color: #39576a;
    line-height: 18px;
    font-size: 12px;
    font-weight: 700;
  }

  .name {
    line-height: 25px;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
    line-height: 22px;
    color: ${(props) => props.theme.text.primaryColor};
    font-size: ${(props) => props.theme.text.fontSize};
  }

  .bottom {
    display: flex;
    align-items: center;
    height: 18px;
    color: #484848;
    font-size: 12px;
    font-weight: 600;

    .MuiRating-decimal {
      margin-right: -3px;
    }

    .slip {
      margin: 0px 1px 0 5px;
    }
  }
`;
