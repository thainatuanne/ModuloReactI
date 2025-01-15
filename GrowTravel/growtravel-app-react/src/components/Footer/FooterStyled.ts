import styled from 'styled-components'

export const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    text-align: center;
    width: 100%;
    min-height: 150px;
    padding: 24px 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;

    p {
        margin: 0;
        color: #909497;
    }

    & > a {
        color: ${(props) => props.theme.colorPrimary};
        text-decoration: none;
    }

    & > a:hover {
        text-decoration: underline;
    }
`
