import { styled } from 'styled-components';

export const DemoWrapper = styled.div`
  margin-left: 20px;

  .wrapper {
    width: 200px;
    overflow: hidden;
    background: orange;

    .item {
      width: 30px;
      height: 20px;
      border: 1px solid #ccc;
      margin-top: 20px;
      margin-right: 5px;
      box-sizing: border-box;
      line-height: 19px;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;
