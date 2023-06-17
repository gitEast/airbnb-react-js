import { styled } from 'styled-components';

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  .loading-cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
