import { styled } from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .MuiPaginationItem-page.MuiPaginationItem-root {
    &:hover {
      text-decoration: underline;
    }

    &.Mui-selected {
      background-color: #222;
      color: #fff;
    }
  }

  .desc {
    margin-top: 20px;
    font-size: 14px;
  }
`;
