import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colorPrimary: string // Cor principal do tema
        backgroundColor: string // Cor de fundo principal
        textColor: string // Cor padrão do texto
        paddingDefault: number // Espaçamento padrão
        borderRadius: string // Bordas arredondadas
        secondaryBackgroundColor: string // Cor de fundo secundária
        highlightColor: string // Cor de destaque para elementos
    }
}
