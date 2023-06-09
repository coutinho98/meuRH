import styled from "styled-components";

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;
  margin-top: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.darker};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
