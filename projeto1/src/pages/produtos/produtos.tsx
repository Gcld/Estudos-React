import Card from "@/components/Card"
import Topo from "@/components/Topo"

const produtos=[
    {
        produto:'Mouse',
        valor:49.90,
        desconto:0,
        disponivel: true
    },
    {
        produto:'Teclado',
        valor:69.90,
        desconto:10,
        disponivel: true
    },
    {
        produto:'Monitor',
        valor:649.90,
        desconto:0,
        disponivel: true
    },
    {
        produto:'CPU',
        valor:829.9,
        desconto:100,
        disponivel: true
    },
    {
        produto:'Cx.Som',
        valor:39.90,
        desconto:0,
        disponivel: true
    },
    {
        produto:'Microfone',
        valor:65.0,
        desconto:0,
        disponivel: true
    },
    ]

function calcDesc(v:number, d:number){
    return v - d
} 

function calcDesc2(v:number, d:number){
    return v - (d/2)
}

export default function produtosPagina(){
    return(     
        <div>
            <Topo/>
            <div className='flex justify-center gap-3'>
            {
            produtos.map((e:any)=>{
                if(e.disponivel)
                return(
                    // eslint-disable-next-line react/jsx-key
                    <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc} />
                )
            })
            }
            </div>
        </div>
    )
}