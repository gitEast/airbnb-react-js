import { styled } from 'styled-components';

export const BarWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 24px;
  cursor: pointer;
  ${(props) => props.theme.mixin.boxShadow}

  .text {
    padding-left: 16px;
    font-size: ${(props) => props.theme.text.fontSize};
    font-weight: 600;
  }

  .icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
    color: #fff;
  }
`;
