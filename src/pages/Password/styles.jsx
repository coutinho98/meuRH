import styled from "styled-components";

export const Container = styled.header`
  a {
    text-decoration: none;
    align-items: center;
    display: flex;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  img {
    margin-right: 8px;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
