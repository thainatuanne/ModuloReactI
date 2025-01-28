import React, { forwardRef } from 'react';
import { StyledInputField } from '../styles/StyledInput.styled'; // Importa o estilo

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
    ({ placeholder = 'Digite algo...', ...rest }, ref) => {
        return <StyledInputField ref={ref} placeholder={placeholder} {...rest} />;
    }
);

export default StyledInput;

// forwardRef permite que StyledInput receba uma referência do componente pai.
//  O <input> recebe ref={ref}, permitindo que ele seja acessado pelo pai.