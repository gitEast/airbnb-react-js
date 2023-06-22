import { styled } from 'styled-components';

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  color: ${(props) => props.theme.color.primary};

  .logo {
    cursor: pointer;
  }
`;
