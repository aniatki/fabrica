import './App.css'
import ObserverProvider from './components/ObserverProvider.jsx'
import AboutMe from "./components/AboutMe"
import Budget from './components/Budget'
import Gallery from "./components/Gallery"
import Marquee from "./components/Marquee"
import NavBar from "./components/Navbar"
import TipsAndCare from "./components/TipsAndCare"

export default function App() {
  return (
    <ObserverProvider>
      <div className='grid grid-cols-10 overflow-hidden bg-slate-50'>
        <Marquee />
        <NavBar />
        <main className='col-span-full text-balance text-center pt-28'>
          <h1 className='text-4xl md:text-6xl text-gray-800 font-semibold leading-8 md:leading-12 tracking-tighter md:tracking-tight mx-auto mb-4 max-w-7xl '>Um artista fazendo sonhos e  ideas se tornarem realidade na pele.</h1>
          <h4 className='intersect:motion-preset-slide-up motion-delay-0 motion-duration-500 font-medium tracking-tighter text-gray-700'>Sem enrolação, só resultados. Tatuagens que transformam sua pele em uma obra de arte.
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
              intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-500
              "
            href="">Inspire-se</a>
        <div className="image bg-size-[100%] md:bg-cover"></div>
        </main>
        <Budget />
        <TipsAndCare />
        <Gallery />
        <AboutMe />
        <footer className='col-span-full font-medium tracking-tight text-xs text-balance text-center pb-8'>
          Created by <a href="https://atki.ie/">Hasan Atki &copy; {Date().slice(11,15)}</a>
          </footer>
      </div>
    </ObserverProvider>
  )
}