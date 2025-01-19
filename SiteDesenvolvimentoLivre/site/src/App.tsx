import { ThemeProvider } from "styled-components"
import theme from "./configs/themes/theme"
import GlobalStyles from "./configs/GlobalStyles"

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />

            <header>

            </header>

            <main>
                <section>

                </section>
            </main>

            <footer>

            </footer>

        </ThemeProvider>
    )
}

export default App