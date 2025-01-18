import { ThemeProvider } from 'styled-components'
import { lightTheme } from './configs/themes/lightThemes'
import { GlobalStyle } from './configs/GlobalStyle'

import headerImg from './assets/header.png'
import imgSection1 from './assets/section1.jpeg'
import imgSection2 from './assets/section2.png'
import imgSection3 from './assets/section3.jpg'

import { HeaderStyled } from './components/Header/HeaderStyled'
import { SectionStyled } from './components/Section/SectionStyled'
import { SectionIconStyled } from './components/Section/SectionIconSyled'
import { FooterStyled } from './components/Footer/FooterStyled'

import { BiLaptop, BiCheckCircle } from 'react-icons/bi'

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />

            <HeaderStyled>
                <img src={headerImg} alt="Background do Header da Página - React" />
                <div>
                    <h1>Minha primeira página com React</h1>
                </div>
            </HeaderStyled>

            <main>
                <SectionIconStyled>
                    <div className="icons-container">
                        <div>
                            <span>
                                <BiLaptop />
                            </span>
                            <h3>Somente para desktop</h3>
                            <p>Vamos aprender como usar um framwork.</p>
                        </div>

                        <div>
                            <span className="bi bi-bricks"></span>
                            <h3>riado com componentes</h3>
                            <p>Utilizamos o Styled Components.</p>
                        </div>

                        <div>
                            <span>
                                <BiCheckCircle />
                            </span>
                            <h3>Fácil aproveitamento</h3>
                            <p>Estamos no caminho certo.</p>
                        </div>
                    </div>
                </SectionIconStyled>

                <SectionStyled
                    $reverse={false}
                    $gap={40}
                    $textAlign="left"
                    $maxContainerWidth={500}
                >
                    <div className="container-card">
                        <h3>O que é React?</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            voluptatem, tempora doloribus nulla quis totam sunt autem id magnam
                            tenetur dolores, deserunt natus quod ea dicta eos laudantium corporis
                            quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                            provident minus quasi quod esse voluptatem ipsam, facere velit nobis
                            quam pariatur necessitatibus, doloremque officia vel odio commodi
                            voluptate. Incidunt, eligendi.
                        </p>
                    </div>

                    <img src={imgSection1} alt="" />
                </SectionStyled>

                <SectionStyled
                    $reverse={false}
                    $gap={30}
                    $textAlign="left"
                    $maxContainerWidth={450}
                >
                    <img src={imgSection2} alt="" />

                    <div className="container-card2">
                        <h3>Sobre 2</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aliquam
                            vero sequi maxime neque, non, laborum velit dolor beatae quasi possimus
                            dolorum corrupti? Recusandae minus id iste eum quae. Atque. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Dolor, excepturi possimus?
                            Explicabo sed sit nobis minus cum eveniet accusantium laudantium
                            corporis, perspiciatis blanditiis! Ipsam similique nobis qui unde sequi
                            dolor?
                        </p>
                    </div>
                </SectionStyled>

                <SectionStyled
                    $reverse={false}
                    $gap={40}
                    $textAlign="left"
                    $maxContainerWidth={500}
                >
                    <div className="container-card3">
                        <h3>Sobre 3</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
                            blanditiis in officiis esse fuga quae minus aliquam repellat explicabo
                            voluptas! Quas, est nam? Vero optio nostrum natus asperiores
                            consequuntur. Doloremque. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita vitae a voluptatem est perspiciatis! Sapiente
                            cum, totam voluptates ipsum, repellat fuga nobis dolores, esse placeat
                            ea doloribus molestias similique sequi?
                        </p>
                    </div>

                    <img src={imgSection3} alt="" />
                </SectionStyled>
            </main>

            <FooterStyled>
                <div className="container">
                    <h3>Contato</h3>
                </div>
                <img src={headerImg} alt="" />

                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="copyright">
                    <p>&copy; Your Website 2020. All Rights Reserved.</p>
                    <div className="icons">
                        <span className="bi bi-facebook"></span>
                        <span className="bi bi-twitter"></span>
                        <span className="bi bi-instagram"></span>
                    </div>
                </div>
            </FooterStyled>
        </ThemeProvider>
    )
}

export default App
