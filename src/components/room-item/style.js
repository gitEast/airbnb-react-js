import { styled } from 'styled-components';

export const RoomWrapper = styled.li`
  width: ${(props) => props.$itemWidth};
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;

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
