import { ButtonStyled } from '../components/Button/ButtonStyled'
import { FormContainer, Input } from '../components/Forms/FormStyled'
import { SectionStyled } from '../components/Section/SectionStyled'
import { Description } from '../components/Title/Description'

const Contact: React.FC = () => {
    return (
        <main>
            <SectionStyled>
                <FormContainer>
                    <Description>
                        Preencha o formulário abaixo para entrar em contato conosco:
                    </Description>
                    <label htmlFor="name">Nome:</label>
                    <Input type="text" id="name" name="name" placeholder="Seu nome" />

                    <label htmlFor="email">Email:</label>
                    <Input type="email" id="email" name="email" placeholder="Seu email" />

                    <ButtonStyled type="submit">Enviar</ButtonStyled>
                </FormContainer>
            </SectionStyled>
        </main>
    )
}

export default Contact
