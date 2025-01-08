// import { Fragment } from "react/jsx-runtime"

interface TitleProps {
    texto?: string
}

function Title(props: TitleProps) {
    // if(props.texto) {
    //     return <h1>{props.texto}</h1>
    // } else {
    //     return <Fragment></Fragment>
    // }
    return <>{props.texto ? <h1>{props.texto}</h1> : <></>}</>
}

export default Title