import { ButtonStyled } from './ButtonStyled'

interface ButtonProps {
    texto: string
    funcaoDeClique?: () => void
}

function Button(parametro: ButtonProps) {
    return (
        <ButtonStyled>
            <button
                className="my-btn"
                onClick={
                    parametro.funcaoDeClique
                        ? parametro.funcaoDeClique
                        : () => {
                              console.log('Nada programado aqui')
                          }
                }
            >
                <span>🚀</span>
                {parametro.texto}
            </button>
        </ButtonStyled>
    )
}

export default Button
