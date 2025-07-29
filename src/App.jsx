import './App.css'
import ObserverProvider from './components/ObserverProvider.jsx'
import AboutMe from "./components/AboutMe"
import BodyParts from "./components/BodyParts"
import Budget from './components/Budget'
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import NavBar from "./components/Navbar"
import TipsAndCare from "./components/TipsAndCare"

export default function App() {
  return (
    <ObserverProvider>
      <div className='
            grid 
            grid-cols-10 
            overflow-hidden 
            bg-gradient-to-b 
            from-slate-50 
            via-zinc-200 
            to-blue-50
            max-w-[2048px]
            mx-auto
            '>
        <Marquee />
        <NavBar />
        <Hero />
        <Budget />
        <BodyParts />
        <TipsAndCare />
        <Gallery />
        <AboutMe />
        <Footer />
      </div>

    </ObserverProvider>
  )
}