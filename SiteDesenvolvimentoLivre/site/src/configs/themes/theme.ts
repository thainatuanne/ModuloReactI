import { DefaultTheme } from 'styled-components/dist/types'

const theme: DefaultTheme = {
    primary: '#4CAF50',
    secondary: '#FF5722',
    accent: '#FFC107',
    background: '#F9F9F9',
    text: '#333333',
    info: '#17a2b8',
    padding: 16,

    fontSizes: {
        small: '12px',
        medium: '16px',
        large: '24px',
        xlarge: '32px',
    },

    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
    },
}

export default theme
