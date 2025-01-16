import { ThemeProvider } from 'styled-components'
import { lightTheme } from './configs/themes/lightThemes'
import { GlobalStyle } from './configs/GlobalStyle'

import headerImg from './assets/header.png' 
import { HeaderStyled } from './components/Header/HeaderStyled'

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />

            <HeaderStyled>
                <img src={headerImg} alt="" />
                <div>
                    <h1>Minha primeira página com React</h1>
                </div>
                
            </HeaderStyled>

            <main>
                <section>
                    <img src="" alt="" />
                    <div>
                        <h2>O que é React</h2>
                    </div>
                </section>

                <section>
                    <img src="" alt="" />
                    <div>
                        <h2>Sobre 2</h2>
                    </div>
                </section>

                <section>
                    <img src="" alt="" />
                    <div>
                        <h2>Sobre 3</h2>
                    </div>
                </section>
            </main>

            <footer>
                <img src="" alt="" />
                <div>
                    <h3>Contato</h3>
                </div>

                <div>
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
                <div>
                    <p>&copy; Your Website 2020. All Rights Reserved.</p>
                </div>
            </footer>
        </ThemeProvider>
    )
}

export default App
