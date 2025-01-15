import styled, { css } from 'styled-components'

interface ButtonStyledProps {
    $primary?: boolean
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    /* FORMA 1   */
    /* background: ${(props) => (props.$primary ? '#bf4f74' : 'transparent')};
  color: ${(props) => (props.$primary ? '#ffff' : '#bf4f74')}; */

    color: ${(props) => props.theme.colorPrimary};
    background-color: transparent;

    border: 1px solid ${(props) => props.theme.colorPrimary};
    font-size: 16px;
    border-radius: 48px;
    padding: 18px 48px;
    margin: 24px 0;

    /* FORMA 1 - tá na doc */
    ${(props) => {
        if (props.$primary) {
            return css`
                color: #ffff;
                background-color: ${(props) => props.theme.colorPrimary};
            `
        }
    }}

    &:hover {
        cursor: pointer;
    }
`
