// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Topo from '@/components/Topo'
import Card from '@/components/Card';

const nome='Gabriel'
let empresa='Zaori'

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
        <Card produto={'Mouse'} valor={49.90} desconto = {10} funcao={calcDesc}/>
        <Card produto={'Teclado'} valor={69.90} desconto = {2} funcao={calcDesc}/>
        <Card produto={'Monitor'} valor={459.90} desconto = {0} funcao={calcDesc2}/>
        <Card produto={'CPU'} valor={759.90} desconto = {50} funcao={calcDesc2}/>
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