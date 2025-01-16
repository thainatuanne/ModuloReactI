import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.6;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
        padding: ${(props) => props.theme.paddingDefault}px;
    }

    a {
        color: ${(props) => props.theme.linkColor};
        text-decoration: none;
        border-radius: ${(props) => props.theme.borderRadius};
    }

    a:hover {
        color: ${(props) => props.theme.linkHoverColor};
        text-decoration: underline;
    }
`;