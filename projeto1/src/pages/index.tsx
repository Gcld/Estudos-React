// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Topo from '@/components/Topo'

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