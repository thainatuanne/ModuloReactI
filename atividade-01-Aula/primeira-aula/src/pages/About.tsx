import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #e8f6f3;
`

const Title = styled.h1`
    color: #16a085;
    font-size: 36px;
`

const Paragraph = styled.p`
    color: #34495e;
    font-size: 18px;
    text-align: center;
    max-width: 600px;
`

function About() {
    return (
        <Container>
            <Title>Quem somos</Title>
            <Paragraph>
                Somos uma equipe dedicada a fornecer a melhor experiência para nossos usuários.
            </Paragraph>
        </Container>
    )
}

export default About
