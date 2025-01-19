import styled from 'styled-components'

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: ${(props) => props.theme.padding * 2}px;

    & > img {
        width: 100%;
        max-width: 800px;
    }

    h1 {
        text-align: center;
        font-size: ${(props) => props.theme.fontSizes.xlarge};
        color: ${(props) => props.theme.info};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    h2 {
        text-align: center;
        font-size: ${(props) => props.theme.fontSizes.xlarge};
        color: ${(props) => props.theme.info};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    h3 {
        font-size: ${(props) => props.theme.fontSizes.large};
        color: ${(props) => props.theme.info};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    ul {
        list-style-type: none;
        padding-left: 20px;
        text-align: left;
        margin: 16px 0;
    }

    li {
        margin-bottom: 8px;
        color: ${(props) => props.theme.text};
    }
`
