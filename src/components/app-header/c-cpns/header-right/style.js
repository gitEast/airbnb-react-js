import { styled } from 'styled-components';

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btns {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.text.fontSize};
    font-weight: 600;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    color: #484848;
    ${(props) => props.theme.mixin.boxShadow}
  }
`;
