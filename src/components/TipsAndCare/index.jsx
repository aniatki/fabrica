import {
  Sun,
  Droplet,
  Slice, 
  BeerOff, 
  Salad, 
  Shirt, 
  Droplets, 
  GlassWater, 
  ShieldAlert,
  Activity,
  HeartHandshake,
  Lightbulb,
  Bubbles,
  FlaskConical,
  WavesLadder,
  SunDim,
  OctagonAlert,
  FishOff,
  AlarmClock,
  Clock12,
  ClockFading,
} from "lucide-react"

import Tips from './Tips.jsx'

export default function TipsAndCare() {

  const preTattoo = [
    <Sun />,
    'Avoid sunshine in the tattoo area.',
    <Droplet />,
    'Use moisturizer a few days before to allow pigmentation to be applied.',
    <Slice />,
    'If you have a razor allergy, shave the day before your tattoo, according to your preference.',
    <BeerOff />,
    'Avoid alcoholic beverages and pain suppressants at least 3 days before your tattoo.',
    <Salad />,
    'Eat healthy and arrive well-fed to your session.',
    <Shirt />,
    'Wear comfortable clothing.',
    <Droplets />,
    'Do not apply ointments that promise pain reduction during the tattoo. Effect varies from person to person and they can influence pigmentation.',
  ]
  const duringTattoo = [
    <GlassWater />,
    'While getting your tattoo, make it a habit to drink water. It helps hydrate your skin.',
    <ShieldAlert />,
    "Avoid pulling on the limb being tattooed, as there's a high chance of damage to the artwork.",
    <Activity />,
    "If you feel a lot of pain, let the tattoo artist know and ask for a break.",
    <HeartHandshake />,
    'Stay in a position that is comfortable for you and the tattoo artist.',
    <BeerOff/>,
    'Do not drink alcoholic beverages during the tattoo.',
    <Lightbulb />,
    'Tell the artist about your next tattoo idea so the artist can develop that unique work!',
  ]
  const postTattoo = [
    <Bubbles />,
    'Clean your hands thoroughly before touching your tattoo. When cleaning the tattoo area, always use a mild soap without rubbing.',
    <FlaskConical />,
    'While healing, use medications such as Bepantriz, Nebacetim, Coconut Oil, and/or Petroleum Jelly on the tattoo area.',
    <WavesLadder />,
    'Do not scratch or pick at scabs. Avoid swimming pools, saunas, the ocean, and rivers during the healing process.',
    <SunDim/>,
    'Avoid exposing the tattoo to the sun for 20 days. After healing is complete, when exposing your tattoo to the sun, use sunscreen.',
    <OctagonAlert />,
    'Do not use products containing alcohol, green acids, or exfoliation on the tattoo area.',
    <FishOff />,
    'Avoid fatty foods and seafood.',
  ]

  return (
    <div className='col-span-full px-4 md:px-0 md:col-span-8 md:col-start-2 grid grid-cols-subgrid gap-x-8 gap-y-16'>
      <h3 className='order-1 col-span-full text-4xl font-semibold text-center tracking-tighter'>Tips and Care</h3>

      <div className='order-2 col-span-full md:col-span-4 shadow-xl'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4123838/pexels-photo-4123838.jpeg?_gl=1*1k2ncpy*_ga*MjA5NzUxMTEzMi4xNzUyMTc5MDEw*_ga_8JE65Q40S6*czE3NTM1MzgyMDAkbzgkZzEkdDE3NTM1MzkwODgkajE2JGwwJGgw" alt="" />
      </div>
      <div className='order-3 col-span-full md:col-span-4'>
        <h4 className='mb-4 font-bold text-xl tracking-tight flex gap-2'>
          <AlarmClock />
          Pré-Tattoo
        </h4>
        <Tips list={preTattoo} />
      </div>

      <div className='order-4 md:order-5 col-span-full md:col-span-4 shadow-xl'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4123838/pexels-photo-4123838.jpeg?_gl=1*1k2ncpy*_ga*MjA5NzUxMTEzMi4xNzUyMTc5MDEw*_ga_8JE65Q40S6*czE3NTM1MzgyMDAkbzgkZzEkdDE3NTM1MzkwODgkajE2JGwwJGgw" alt="" />
      </div>
      <div className='order-5 md:order-4 col-span-full md:col-span-4'>
        <h4 className='mb-4 font-bold text-xl tracking-tight flex gap-2'>
          <Clock12 />
          Durante a Tattoo
        </h4>
        <Tips list={duringTattoo} />
      </div>

      <div className='order-6 col-span-full md:col-span-4 shadow-xl'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4123838/pexels-photo-4123838.jpeg?_gl=1*1k2ncpy*_ga*MjA5NzUxMTEzMi4xNzUyMTc5MDEw*_ga_8JE65Q40S6*czE3NTM1MzgyMDAkbzgkZzEkdDE3NTM1MzkwODgkajE2JGwwJGgw" alt="" />
      </div>
      <div className='order-7 col-span-full md:col-span-4'>
        <h4 className='mb-4 font-bold text-xl tracking-tight flex gap-2'>
          <ClockFading />
          Post-Tattoo
        </h4>
        <Tips list={postTattoo} />
      </div>

    </div>
  )
}