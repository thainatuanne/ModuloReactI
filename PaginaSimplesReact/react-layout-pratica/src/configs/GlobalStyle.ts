import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.6;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
        padding: ${(props) => props.theme.paddingDefault}px;
    }

    img {
        max-width: 100%;
        height: auto;
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
`
