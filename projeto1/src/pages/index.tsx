// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const nome='Gabriel'
let empresa='Zaori'

function Topo(){
  return (
    <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>   
      <div>Logo</div>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl'>{empresa}</div>
        <div className='subtituloTopo'>Curso de React</div>
      </div>
      <div>{nome}</div>
    </div>
  )
}
export default function Home() {
  return (
    <div>
      <Topo/>
      <div>Curso de react Next</div>
      <div>Typescript</div>
      <div>React</div>
    </div>
  );
}
