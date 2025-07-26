import './App.css'
import Marquee from "./components/Marquee/Marquee.jsx"
import NavBar from "./components/NavBar.jsx"

export default function App() {

  return (
    <div className='grid grid-cols-4 md:grid-cols-10 overflow-hidden bg-gray-100'>
      <Marquee />

      <NavBar />

      <main className='col-span-full text-balance text-center pt-28'>
        <h1 className='text-6xl text-gray-800 font-semibold leading-12 tracking-tight mx-auto mb-4 max-w-7xl '>An artist making dreams and ideas come true on skin.</h1>
        <h4 className='text-xl font-medium tracking-tighter text-gray-700'>No fluff, just results. Thoughtful design that makes your skin a work of art.</h4>
      </main>
      
      <div className="image"></div>
    </div>
  )
}