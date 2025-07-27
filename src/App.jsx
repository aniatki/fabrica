import './App.css'
import Gallery from "./components/Gallery"
import Marquee from "./components/Marquee"
import NavBar from "./components/Navbar"
import TipsAndCare from "./components/TipsAndCare"

export default function App() {

  return (
    <div className='grid grid-cols-10 overflow-hidden bg-sky-50'>
      <Marquee />

      <NavBar />

      <main className='col-span-full text-balance text-center pt-28'>
        <h1 className='text-4xl md:text-6xl text-gray-800 font-semibold leading-8 md:leading-12 tracking-tighter md:tracking-tight mx-auto mb-4 max-w-7xl '>Um artista fazendo sonhos e  ideas se tornarem realidade na pele.</h1>
        <h4 className='font-medium tracking-tighter text-gray-700'>Sem enrolação, só resultados. Tatuagens que transformam sua pele em uma obra de arte.
        </h4>
        <a className="
            block 
            w-max 
            mx-auto
            mt-4
            rounded-full
            px-8
            py-2 
            bg-black
            hover:bg-amber-650
            hover:shadow-amber-600/40
            text-lg 
            text-white 
            font-bold 
            tracking-tight 
            shadow-lg
            shadow-gray-600/20
            hover:shadow-2xl
            transition
            "
          href="">Inspire-se</a>
      </main>


      <div className="image bg-size-[100%] md:bg-cover"></div>

      <TipsAndCare />

      <Gallery />

      <div className='col-span-full px-2 md:px-0 md:col-span-8 md:col-start-2 text-gray-800 my-16'>

        <h3 className='order-1 col-span-full text-4xl font-semibold text-center tracking-tighter'>Sobre Mim</h3>
        <p className='font-medium tracking-tight text-gray-700'>
          Sou um tatuador apaixonado pela arte e pela expressão pessoal. Com anos de experiência, especializo-me em transformar ideias e sentimentos em tatuagens únicas e significativas.
          Meu estilo combina precisão, criatividade e atenção aos detalhes, garantindo que cada peça seja exclusiva e reflita a personalidade de quem a carrega.
          Trabalho com técnicas variadas, desde o tradicional ao realismo, sempre priorizando a qualidade, higiene e conforto dos meus clientes.
          Para mim, tatuar é mais do que um ofício—é uma forma de contar histórias na pele.</p>
      </div>

    </div>
  )
}