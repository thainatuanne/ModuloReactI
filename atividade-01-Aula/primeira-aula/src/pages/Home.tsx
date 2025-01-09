import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 36px;
`;

function Home() {
  return (
    <Container>
      <Title>Bem-vindo à página inicial</Title>
    </Container>
  );
}

export default Home;
