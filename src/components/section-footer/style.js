import { styled } from 'styled-components';

export const FooterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 15px 0 10px;
  color: ${(props) => props.color};
  font-size: 17px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  .look-more {
    margin-right: 5px;
    font-weight: 600;
  }
`;
