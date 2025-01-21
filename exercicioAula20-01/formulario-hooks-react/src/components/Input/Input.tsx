import React from 'react'
import { StyledInput } from '../Input/Input-Styles'

interface InputProps {
    type: string
    name: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange }) => {
    return (
        <StyledInput
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
