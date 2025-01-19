import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fontSizes.medium};
    line-height: 1.6;
    padding: ${(props) => props.theme.padding}px;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }

  /* Responsividade */
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    body {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    body {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
  }
`

export default GlobalStyles
