import React, { useState } from 'react'
import FormContainer from '../FomContainer/FormContainer'
import Input from '../Input/Input'
import Button from '../Button/Button'

interface FormProps {
    onSubmit: (data: { firstName: string; lastName: string; email: string }) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' })

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    function handleFormSubmit(event: React.FormEvent) {
        event.preventDefault()
        onSubmit(formData)
        setFormData({ firstName: '', lastName: '', email: '' })
    }

    return (
        <FormContainer onSubmit={handleFormSubmit}>
            <Input
                type="text"
                name="firstName"
                placeholder="Nome"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <Input
                type="text"
                name="lastName"
                placeholder="Sobrenome"
                value={formData.lastName}
                onChange={handleInputChange}
            />
            <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
            />
            <Button type="submit">Enviar</Button>
        </FormContainer>
    )
}

export default Form
