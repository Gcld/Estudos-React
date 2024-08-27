// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Topo from '@/components/Topo'
import Card from '@/components/Card';

const nome='Gabriel'
let empresa='Zaori'


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
export default function Home() {
    return (
      <div>
        <Topo/>
        <div style={testecss}>
          <div>Curso de react Next</div>
          <div>Typescript</div>
          <div style={{color:'#f00', backgroundColor:'#bbb'}}>React</div>
      </div>
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
  );
}

const testecss={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}