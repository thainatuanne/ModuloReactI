interface CardProdutoPops {
    titulo: string
    descricao: string
    preco: number
}

function CardProduto(props: CardProdutoPops) {
    return (
        <div className="container-card">
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <p>
                {props.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </p>
        </div>
    )
}

export default CardProduto
