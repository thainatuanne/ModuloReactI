import styled from "styled-components";

export const FooterStyled = styled.footer`
    color: ${(prompt) => prompt.theme.textColor};
    text-align: center;
    padding: 20px 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;

    p {
        margin: 0;
    }
`;