import { ThemeProvider } from 'styled-components'
import { lightTheme } from './configs/themes/lightThemes'
import { GlobalStyle } from './configs/GlobalStyle'

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />

            <header></header>

            <main>
                <section></section>
            </main>

            <footer></footer>
        </ThemeProvider>
    )
}

export default App
