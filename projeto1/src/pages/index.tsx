// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const nome='Gabriel'
let empresa='Zaori'

function Topo(){
  return (
    <div>
      <div>Logo</div>
      <div>{empresa}</div>
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
