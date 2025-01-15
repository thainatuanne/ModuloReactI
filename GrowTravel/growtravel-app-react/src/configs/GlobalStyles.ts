import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.backgroundColor};
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    } 
`
