interface CardProps{
    produto: string
    valor: number
    desconto: number
}

export default function Card(props: CardProps){
    return(
        <div className='flex flex-col border border-red-700 rounded-sm p-1'>
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            <div>Desconto: {props.desconto}</div>
            <div>Preço Venda: R${props.valor - props.desconto}</div>
        </div>
    )
}