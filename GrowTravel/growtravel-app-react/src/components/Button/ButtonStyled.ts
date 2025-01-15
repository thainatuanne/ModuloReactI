import styled, { css } from "styled-components";

interface ButtonStyledProps {
  $primary?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  color: ${(props) => props.theme.colorPrimary};
  background-color: transparent;

  border: 1px solid ${(props) => props.theme.colorPrimary};
  font-size: 16px;
  border-radius: 48px;
  padding: 18px 48px;
  margin: 24px 0;

  ${(props) => {
    if (props.$primary) {
      return css`
        color: #ffff;
        background-color: ${(props) => props.theme.colorPrimary};
      `;
    }
  }}

  &:hover {
    cursor: pointer;
  }
`;