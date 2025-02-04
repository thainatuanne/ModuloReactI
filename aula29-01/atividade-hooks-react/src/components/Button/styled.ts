import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 50%;
  padding: 24px;
  font-weight: 700;

  background: #2f5cbd;
  color: #ffffff;

  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  font-size: 16px;

  &:hover {
    filter: brightness(0.9);
  }
`;