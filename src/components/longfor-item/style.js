import { styled } from 'styled-components';

export const ItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;

  .inner {
    position: relative;
    padding: 8px;

    img {
      width: 100%;
    }

    .cover {
      position: absolute;
      top: 8px;
      bottom: 8px;
      left: 8px;
      right: 8px;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }

    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom: 32px;
      text-align: center;
      color: #fff;

      .city {
        font-size: 18px;
        font-weight: 600;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`;
