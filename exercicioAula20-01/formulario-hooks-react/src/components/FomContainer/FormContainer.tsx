import React from 'react'
import { StyledFormContainer } from '../FomContainer/FormContainer-Styles'

interface FormContainerProps {
    children: React.ReactNode
    onSubmit: (event: React.FormEvent) => void
}

const FormContainer: React.FC<FormContainerProps> = ({ children, onSubmit }) => {
    return <StyledFormContainer onSubmit={onSubmit}>{children}</StyledFormContainer>
}

export default FormContainer
