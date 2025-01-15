import { GlobalStyles } from "./configs/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./configs/themes/light-theme";
import { HeaderStyled } from "./components/Header/HeaderStyled";
import { HomeStyled } from "./components/Home/HomeStyled";
import { ButtonStyled } from "./components/Button/ButtonStyled";

import imgHome from "./assets/home.svg";
import imgQuemSomos from "./assets/aeroporto.svg";
import imgSocial from "./assets/social.png";

import { AboutStyled } from "./components/About/AboutStyled";
import { SectionStyled } from "./components/Section/SectionStyled";
import { TableStyled } from "./components/Table/TableStyled";
import { FloatButtonStyled } from "./components/FloatButton/FloatButton";
import { FooterStyled } from "./components/Footer/FooterStyled";



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
        <HomeStyled>
          <img src={imgHome} alt="Buscar viagens pelo mundo" />

          <div>
            <h2>GrowTravel</h2>
            <p>O melhor serviço para você!</p>
            <ButtonStyled $primary> Saiba Mais!</ButtonStyled>
          </div>
        </HomeStyled>

        <AboutStyled>
          <img src={imgQuemSomos} alt="Aeroporto" />

          <div>
            <h2>Quem Somos</h2>
            <p>
              Somos apaixonados por criar experiências de viagem inesquecíveis.
              Nossa agência de turismo é formada por uma equipe experiente e
              dedicada, que busca transformar seus sonhos de viagem em
              realidade.
            </p>

            <p>
              Acreditamos que viajar é mais do que apenas conhecer novos
              lugares, é uma oportunidade de viver novas aventuras e criar
              memórias duradouras. Por isso, oferecemos um atendimento
              personalizado, com roteiros exclusivos e serviços de alta
              qualidade, para que você possa desfrutar de cada momento da sua
              viagem.
            </p>
          </div>
        </AboutStyled>

        <SectionStyled $reverse $gap={24} $textAlign="center">
          <div>
            <h2>Planos</h2>

            <TableStyled>
              <thead>
                <tr>
                  <th></th>
                  <th>Plano 1</th>
                  <th>Plano 2</th>
                  <th>Plano 3</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <th>Suporte 24h</th>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                </tr>

                <tr>
                  <th>Serviços de quarto</th>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                </tr>

                <tr>
                  <th>Guia turístico</th>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                </tr>

                <tr>
                  <th>Roteiro de trilhas</th>
                  <td className="error">❌</td>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                </tr>

                <tr>
                  <th>Serviço personalizado</th>
                  <td className="error">❌</td>
                  <td className="success">✅</td>
                  <td className="success">✅</td>
                </tr>

                <tr>
                  <th>Área VIP</th>
                  <td className="error">❌</td>
                  <td className="error">❌</td>
                  <td className="success">✅</td>
                </tr>
              </tbody>
            </TableStyled>
          </div>
        </SectionStyled>
      </main>

      <FloatButtonStyled>
        <img src={imgSocial} alt="Watsapp" />

      </FloatButtonStyled>

      <FooterStyled>

        <div>
          <p>&copy; Copyright 2024.</p>
        </div>
      </FooterStyled>
    </ThemeProvider>
  );
}