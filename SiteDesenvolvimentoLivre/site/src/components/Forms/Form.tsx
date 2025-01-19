import { ButtonStyled } from '../Button/ButtonStyled'
import { FormContainer, Input } from './FormStyled'

const Form: React.FC = () => {
    return (
        <FormContainer>
            <label htmlFor="name">Name:</label>
            <Input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <Input type="email" id="email" name="email" />

            <ButtonStyled type="submit">Send</ButtonStyled>
        </FormContainer>
    )
}

export default Form
