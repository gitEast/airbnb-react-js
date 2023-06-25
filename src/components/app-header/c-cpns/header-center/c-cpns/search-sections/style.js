import { styled } from 'styled-components';

export const SectionsWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 850px;
  height: 66px;
  border-radius: 32px;
  border: 1px solid #ddd;
  background-color: #fff;

  .info-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    border-radius: 32px;
    &:hover {
      background-color: #eee;
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #222;
      }

      .desc {
        line-height: 22px;
        font-size: 14px;
        color: #666;
      }
    }

    .divider {
      width: 1px;
      height: 32px;
      background-color: #ddd;
    }
  }
`;
