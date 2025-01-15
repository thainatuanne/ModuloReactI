import { GlobalStyles } from "./configs/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./configs/themes/light-theme";
import { HeaderStyled } from "./components/Header/HeaderStyled";
import { ButtonStyled } from "./components/Button/ButtonStyled";

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
              <a href="#">Serviços</a>
              </li>
            <li>
              <a href="#">Planos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </HeaderStyled>

      <main>
        <section>
          
          <img src="" alt="" />

          <div>
            <h2>GrowTravel</h2>
            <p></p>
            <p></p>
            <ButtonStyled $primary> Saiba Mais!</ButtonStyled>
          </div>
        </section>
      </main>

      <footer>

      </footer>

    </ThemeProvider>
  );
}