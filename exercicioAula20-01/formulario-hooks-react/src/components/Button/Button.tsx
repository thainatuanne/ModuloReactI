import React from 'react'
import { StyledButton } from '../Button/Button-Styles'

interface ButtonProps {
    type: 'button' | 'submit'
    children: React.ReactNode
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button
