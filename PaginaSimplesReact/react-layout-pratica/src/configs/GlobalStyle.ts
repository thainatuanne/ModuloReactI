import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.6;

        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
    }

    a {
        color: ${(props) => props.theme.colorPrimary};
        text-decoration: none;
    }

    a:hover {
        color: ${(props) => props.theme.highlightColor};
        text-decoration: underline;
    }
`
