import { TitleStyled } from './TitleStyled'

interface TitleProps {
    texto?: string
}

function Title(props: TitleProps) {
    // !== null, undefined, "" ou 0

    // if(!props.texto) {
    //   return null
    // }

    // return <h1>{props.texto}</h1>;
    return (
        <>
            {props.texto ? (
                <TitleStyled>
                    <h1>{props.texto}</h1>
                </TitleStyled>
            ) : null}
        </>
    )
}

export default Title
