# 🧩 Módulo React I

## 📁 Sobre

Este repositório contém exercícios de fixação do **Módulo React I**, com o objetivo de reforçar conceitos fundamentais do React, como componentes, props, estados e roteamento.  
Os exercícios são voltados para reforçar o aprendizado através da prática.

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/) - Biblioteca JavaScript para criação de interfaces de usuário.
- [Vite](https://vitejs.dev/) - Ferramenta rápida de construção e bundling para projetos front-end.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática ao código.
- [React Router DOM](https://reactrouter.com/) - Biblioteca de roteamento para navegação em aplicações React.

---

## 🛠️ Instalação das Dependências

### 1. Crie o Projeto com Vite

```bash
npm create vite@latest meu-app-react -- --template react-ts (seu-nomequalquer-react) você escolhe a nome da pasta de acordo com o seu projeto
- O comando `npm create vite@latest` cria um novo projeto com o template React + TypeScript.

```

### 2. Entre na pasta do projeto

```bash
cd meu-app-react

**Explicação:**
- Após criar o projeto, o usuário precisa entrar na pasta do novo app.

---

```

### 3. Instale as dependências do projeto

```bash
npm install

**Explicação:**
- Instala as dependências do novo projeto criado com Vite.

---

```

### 4. Adicione o React Router DOM (se necessário)

```bash
npm install react-router-dom

**Explicação:**
- Se o projeto precisa de roteamento, o `react-router-dom` é instalado.

---

```

## ▶️ Executando o Projeto

Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

- `npm run dev` inicia o servidor de desenvolvimento.
- `yarn dev` é a alternativa para quem usa `yarn`.

---

## Usando Styled-Components no Projeto

## 📦 Instalação

### O styled-components é uma biblioteca que permite estilizar componentes React utilizando CSS-in-JS.

```bash
npm install styled-components

Como Utilizar o styled-components
O styled-components permite criar componentes com estilos CSS embutidos diretamente no JavaScript/TypeScript.

Aqui está um exemplo simples de uso:

import styled from "styled-components";

// Criando um componente Title estilizado
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Criando outro componente Wrapper estilizado
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Usando os componentes estilizados no React
function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
}

export default App;

```

### Para melhorar a experiência de desenvolvimento com o styled-components, é recomendado instalar o Babel Plugin, que oferece:

#### 1. Nomes de classes legíveis no navegador.

#### 2. Compatibilidade com SSR (Server-Side Rendering).

#### 3 .Tamanhos de pacotes menores.

```
Instalação do Babel Plugin:

npm install --save-dev babel-plugin-styled-components

Adicione a configuração no arquivo babel.config.js:

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["babel-plugin-styled-components"]
};

```
