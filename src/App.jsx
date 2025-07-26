import './App.css'
import Grid from "./components/Grid"
import Marquee from "./components/Marquee"
import NavBar from "./components/Navbar"

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

      <div className='col-start-2 col-span-8'>
        <h3 className='w-full text-4xl font-semibold text-center tracking-tight mb-8'>Tips and Care</h3>

        <div className='flex gap-8 mb-8'>
          <div className='lg:max-h-[11lh]'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4123838/pexels-photo-4123838.jpeg?_gl=1*1k2ncpy*_ga*MjA5NzUxMTEzMi4xNzUyMTc5MDEw*_ga_8JE65Q40S6*czE3NTM1MzgyMDAkbzgkZzEkdDE3NTM1MzkwODgkajE2JGwwJGgw" alt="" />
          </div>
          <div className=''>
            <h4 className='mb-4 font-bold text-xl tracking-tight'>Pre-Tattoo</h4>
            <p className='font-medium tracking-tight leading   text-gray-700'>Avoid sunshine in the tattoo area. Use moisturizer a few days before to allow pigmentation to be applied. If you have a razor allergy, shave the day before your tattoo, according to your preference. Avoid alcoholic beverages and pain suppressants at least 3 days before your tattoo. Eat healthy and arrive well-fed to your session. Wear comfortable clothing. Do not apply ointments that promise pain reduction during the tattoo. Effect varies from person to person and they can influence pigmentation.</p>
          </div>
        </div>

        <div className='flex gap-8 mb-8'>
          <div className=''>
            <h4 className='mb-4 font-bold text-xl tracking-tight'>During Tattoo</h4>
            <p className='font-medium tracking-tight leading   text-gray-700'>While getting your tattoo, make it a habit to drink water. It helps hydrate your skin. Avoid pulling on the limb being tattooed, as there's a high chance of damage to the artwork. If you feel a lot of pain, let the tattoo artist know and ask for a break. Stay in a position that is comfortable for you and the tattoo artist. Do not drink alcoholic beverages during the tattoo. Tell the artist about your next tattoo idea so the artist can develop that unique work!</p>
          </div>
          <div className='lg:max-h-[11lh]'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4123838/pexels-photo-4123838.jpeg?_gl=1*1k2ncpy*_ga*MjA5NzUxMTEzMi4xNzUyMTc5MDEw*_ga_8JE65Q40S6*czE3NTM1MzgyMDAkbzgkZzEkdDE3NTM1MzkwODgkajE2JGwwJGgw" alt="" />
          </div>
        </div>

        <div className='flex gap-8 mb-8'>
          <div className='lg:max-h-[11lh]'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4123838/pexels-photo-4123838.jpeg?_gl=1*1k2ncpy*_ga*MjA5NzUxMTEzMi4xNzUyMTc5MDEw*_ga_8JE65Q40S6*czE3NTM1MzgyMDAkbzgkZzEkdDE3NTM1MzkwODgkajE2JGwwJGgw" alt="" />
          </div>
          <div className=''>
            <h4 className='mb-4 font-bold text-xl tracking-tight'>Post-Tattoo</h4>
            <p className='font-medium tracking-tight leading   text-gray-700'>Clean your hands thoroughly before touching your tattoo. When cleaning the tattoo area, always use a mild soap without rubbing. While healing, use medications such as Bepantriz, Nebacetim, Coconut Oil, and/or Petroleum Jelly on the tattoo area. Do not scratch or pick at scabs. Avoid swimming pools, saunas, the ocean, and rivers during the healing process. Avoid exposing the tattoo to the sun for 20 days. After healing is complete, when exposing your tattoo to the sun, use sunscreen. Do not use products containing alcohol, green acids, or exfoliation on the tattoo area. Avoid fatty foods and seafood.</p>
          </div>
        </div>

      </div>

      <Grid />
    </div>
  )
}