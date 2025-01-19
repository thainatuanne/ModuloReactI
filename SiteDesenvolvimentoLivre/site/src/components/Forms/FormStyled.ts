import styled from 'styled-components'

export const FormContainer = styled.form`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: ${(props) => props.theme.padding * 3}px;
`

export const Input = styled.input`
    padding: 8px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 4px;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.accent};
    }
`
