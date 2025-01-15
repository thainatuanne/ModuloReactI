import styled from "styled-components";

export const AboutStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: left;
    gap: 24px;
    padding: 48px 24px;
    border-bottom: 1px solid #e8e8e8;

    & > img {
        width: 40%;
    }

    & > div {
        width: 50%;

        h2 {
            font-size: 48px;
            margin: 8px 0 24px 0;
        }
    }
`;