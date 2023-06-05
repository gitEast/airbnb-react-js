import { styled } from 'styled-components';

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 1080px;
    padding: 48px 24px;
    margin: 0 auto;
    color: ${(props) => props.theme.text.secondaryColor};
    font-size: ${(props) => props.theme.text.fontSize};

    .service {
      display: flex;

      .item {
        flex: 1;

        .title {
          margin-bottom: 16px;
          color: ${(props) => props.theme.text.primaryColor};
          font-weight: 700;
        }

        .itm {
          margin-top: 6px;
          line-height: 22px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .statement {
      padding: 20px;
      margin-top: 30px;
      border-top: 1px solid #ebebeb;
      text-align: center;
    }
  }
`;
