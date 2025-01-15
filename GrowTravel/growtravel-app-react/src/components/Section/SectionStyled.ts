import styled, { css } from "styled-components";

interface SectionStyledProps {
  $reverse?: boolean;
  $gap: number;
  $textAlign: "left" | "center" | "right";
  $maxContainerWidth?: number;
}

export const SectionStyled = styled.section<SectionStyledProps>`
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  gap: ${(props) => `${props.$gap}px`};
  text-align: ${(props) => props.$textAlign};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
  border-bottom: 1px solid #cccccc;

  & > img {
    width: 40%;
  }

  & > div {
    ${(props) =>
      props.$maxContainerWidth &&
      css`
        width: ${props.$maxContainerWidth + "%"};
      `};

    h2 {
      font-size: 48px;
      margin: 8px 0 24px 0;
    }
  }
`;