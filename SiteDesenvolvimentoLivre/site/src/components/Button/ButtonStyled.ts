import styled from 'styled-components'

export const ButtonStyled = styled.button`
    padding: 10px 20px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    background-color: ${(props) => props.theme.primary};
    width: 50%;
    height: auto;
    margin: 0 auto;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.accent};
    }
`
