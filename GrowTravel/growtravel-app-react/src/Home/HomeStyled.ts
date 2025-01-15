import styled from "styled-components";

export const HomeStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 24px;
    text-align: center;
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