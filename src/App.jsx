import './App.css'
import Gallery from "./components/Gallery"
import Marquee from "./components/Marquee"
import NavBar from "./components/Navbar"
import TipsAndCare from "./components/TipsAndCare"

export default function App() {

  return (
    <div className='grid grid-cols-4 md:grid-cols-10 overflow-hidden bg-gray-100'>
      <Marquee />

      <NavBar />

      <main className='col-span-full text-balance text-center pt-28'>
        <h1 className='text-6xl text-gray-800 font-semibold leading-12 tracking-tight mx-auto mb-4 max-w-7xl '>An artist making dreams and ideas come true on skin.</h1>
        <h4 className='text-xl font-medium tracking-tighter text-gray-700'>No fluff, just results. Thoughtful design that makes your skin a work of art.</h4>
        <a className="
            block 
            w-max 
            mx-auto
            mt-4
            rounded-lg
            px-8
            py-2 
            bg-amber-600
            hover:bg-amber-700
            hover:shadow-amber-600/90
            text-lg 
            text-white 
            font-bold 
            tracking-tight 
            shadow-lg
            shadow-amber-600/40
            transition
            " 
            href="">Get Inspired</a>
      </main>

      <div className="image"></div>

      <TipsAndCare />

      <Gallery />
    </div>
  )
}