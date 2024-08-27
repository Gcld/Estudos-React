// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Topo from '@/components/Topo'
import Card from '@/components/Card';

const nome='Gabriel'
let empresa='Zaori'

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
        <Card produto={'Mouse'} valor={'R$49,90'}/>
        <Card produto={'Teclado'} valor={'R$69,90'}/>
        <Card produto={'Monitor'} valor={'R$459,90'}/>
        <Card produto={'CPU'} valor={'R$759,90'}/>
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