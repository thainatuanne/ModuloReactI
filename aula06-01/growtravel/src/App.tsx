import { GlobalStyles } from "./configs/GlobalStyles";
import { ThemeProvider } from "styled-components";
// import { darkTheme } from "./configs/themes/black-theme";
import { ButtonStyled } from "./components/Button/ButtonStyled";
import { lightTheme } from "./configs/themes/light-theme";
import { HeaderStyled } from "./components/Header/HeaderStyled";
import { AboutStyled } from "./components/About/AboutStyled";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <HeaderStyled>
        <nav>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Planos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </HeaderStyled>

      <main>
        <section>
          <img src="" alt="Buscar Viagem pelo mundo" />
          <div>
            <h2>GrowTravel</h2>
            <p>O melhor serviço para você!</p>
            <ButtonStyled $primary>Saiba Mais!</ButtonStyled>
          </div>
        </section>
      </main>

      <AboutStyled>
        <section>
          <img src="" alt="" />
          <div>
            <h2>Quem Somos</h2>
            <p>Somos apaixonados por criar experiências de viagem inesquecíveis. Nossa agência de turismo é formada por uma equipe experiente e dedicada, que busca transformar seus sonhos de viagem em realidade.</p>
            <p>Acreditamos que viajar é mais do que apenas conhecer novos lugares, é uma oportunidade de viver novas aventuras e criar memórias duradouras. Por isso, oferecemos um atendimento personalizado, com roteiros exclusivos e serviços de alta qualidade, para que você possa desfrutar de cada momento da sua viagem.</p>
          </div>
        </section>
      </AboutStyled>

    </ThemeProvider>
  );
}