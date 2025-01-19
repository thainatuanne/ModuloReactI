import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string
        secondary: string
        accent: string
        background: string
        text: string
        info: string
        padding: number

        fontSizes: {
            small: string
            medium: string
            large: string
            xlarge: string
        }
    }
}
