import styled from "styled-components";

interface SectionStyledProps {
    $reverse?: boolean;
    $gap?: number;
    $textAlign?: "left" | "center" | "right";
}

export const SectionStyled = styled.section<SectionStyledProps>`
    flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
    gap: ${(props) => `${props.$gap}px`};
    text-align: ${(props) => props.$textAlign};
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 48px 24px;
    border-bottom: 1px solid #e8e8e8;

    & > img {
        width: 40%;
    }

    & > div {        
        h2 {
            font-size: 48px;
            margin: 8px 0 24px 0;
        }
    }
`;