import { ThemeProvider } from 'styled-components'
import theme from './configs/themes/theme'
import GlobalStyles from './configs/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header/Header'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Header />
                <AppRoutes></AppRoutes>
            </Router>
        </ThemeProvider>
    )
}

export default App
