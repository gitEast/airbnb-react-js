import { styled } from 'styled-components';

export const PicturesWrapper = styled.div`
  position: relative;

  .picture-list {
    display: flex;
    height: 600px;

    &:hover {
      .cover {
        opacity: 1 !important;
      }
    }

    .picture-item {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        -webkit-transition: opacity 200ms ease;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        .cover {
          opacity: 0 !important;
        }
      }
    }

    .left {
      width: 50%;

      .picture-item {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .picture-item {
        width: 50%;
        height: 50%;
        border: 1px solid #000;
        box-sizing: border-box;
      }
    }
  }

  .show-btn {
    position: absolute;
    right: 15px;
    bottom: 15px;
    padding: 6px 15px;
    font-size: 14px;
    line-height: 22px;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
