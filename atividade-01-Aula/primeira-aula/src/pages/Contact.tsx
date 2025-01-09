import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa"; // Importando o ícone do WhatsApp

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff9e6;
`;

const Title = styled.h1`
  color: #f39c12;
  font-size: 36px;
`;

const Paragraph = styled.p`
  color: #7f8c8d;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Espaço entre o ícone e o texto */
  background-color: #25d366;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #20b858;
  }
`;

function Contact() {
  return (
    <Container>
      <Title>Contate-nos</Title>
      <Paragraph>
        Sinta-se à vontade para entrar em contato conosco por meio de nossos canais oficiais.
      </Paragraph>
      <WhatsAppButton
        href="https://wa.me/5551999802061?text=Olá, gostaria de mais informações!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} /> WhatsApp
      </WhatsAppButton>
    </Container>
  );
}

export default Contact;