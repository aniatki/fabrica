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
import { useEffect, useRef } from "react"
import Tips from './Tips.jsx'

export default function TipsAndCare() {
  const preTattoo = [
    <Sun />,
    'Evitar pegar sol na região que será tatuada.',
    <Droplet />,
    'Utilizar hidratantes dias antes, para que a pigmentação ocorra de forma bem aplicada.',
    <Slice />,
    'Se você possui alergia a gilete, depile-se um dia antes da tatuagem de acordo com a sua preferência.',
    <BeerOff />,
    'Evitar ingerir bebidas alcoólicas e analgésicos no mínimo 3 dias antes da tatuagem.',
    <Salad />,
    'Realizar uma alimentação saudável e ir à sessão bem alimentado.',
    <Shirt />,
    'Ir com roupa confortável.',
    <Droplets />,
    'Não passar pomadas que prometem diminuir a dor durante a tatuagem, pois, o efeito varia de pessoa para pessoa e pode influenciar na pigmentação.',
  ]

  const duringTattoo = [
    <GlassWater />,
    'Durante a tatuagem, tenha o hábito de ir bebendo água, ajuda na hidratação da pele.',
    <ShieldAlert />,
    "Evite puxar o membro que está sendo tatuado, pois há uma grande chance de prejudicar a arte.",
    <Activity />,
    "No caso de sentir muita dor durante a tatuagem, comunique o tatuador e peça uma pausa.",
    <HeartHandshake />,
    'Fique em uma posição que seja confortável para você e o tatuador.',
    <BeerOff />,
    'Não ingerir bebidas alcoólicas durante a tatuagem.',
    <Lightbulb />,
    'E claro, conte sua próxima ideia de tatuagem para o tatuador desenvolver aquele trabalho exclusivo!',
  ]

  const postTattoo = [
    <Bubbles />,
    'Higienize bem as mãos antes de tocar na tatuagem. Sempre que for higienizar o local da tatuagem, utilize um sabonete neutro sem esfregar.',
    <FlaskConical />,
    'Durante a cicatrização, utilize na região da tatuagem medicamentos como: Bepantriz, Nebacetin, óleo de coco e/ou vaselina. Não coce ou arranque as casquinhas.',
    <WavesLadder />,
    'Evite frequentar durante o processo de cicatrização: piscinas, saunas, mar e rios.',
    <SunDim />,
    'Evite expor a tatuagem ao sol por 20 dias. Após a cicatrização completa, ao expor a tatuagem ao sol, utilize filtro solar.',
    <OctagonAlert />,
    'Não utilize produtos que contenham álcool, ácidos ou esfoliação na área da tatuagem.',
    <FishOff />,
    'Evite alimentos gordurosos, frutos do mar e carne de porco.',
  ]
  const divRef = useRef(null)
  const transitionClasses = ["intersect-once", "intersect:motion-preset-focus", "motion-delay-400", "motion-duration-1000"]

  useEffect(() => {
    if (divRef.current && divRef.current.children) {
      Array.from(divRef.current.children).forEach(child => {
        transitionClasses.forEach(c => child.classList.add(c))
      })
    }
  })

  return (
    <div
        ref={divRef} 
        id="tips&care" className='col-span-full px-4 md:px-0 md:col-span-8 md:col-start-2 grid grid-cols-subgrid gap-x-8 gap-y-16'>
      <h3 className='order-1 col-span-full text-4xl font-semibold text-center tracking-tighter'>Tips and Care</h3>

      <div className='order-2 col-span-full md:col-span-4 shadow-xl'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/1181366/pexels-photo-1181366.jpeg" alt="" />
      </div>
      <div className='order-3 col-span-full md:col-span-4'>
        <h4 className='mb-4 font-bold text-xl tracking-tight flex gap-2'>
          <AlarmClock />
          Pré-Tatuagem
        </h4>
        <Tips list={preTattoo} />
      </div>

      <div className='order-4 md:order-5 col-span-full md:col-span-4 shadow-xl'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/428105/pexels-photo-428105.jpeg" alt="" />
      </div>
      <div className='order-5 md:order-4 col-span-full md:col-span-4'>
        <h4 className='mb-4 font-bold text-xl tracking-tight flex gap-2'>
          <Clock12 />
          Durante a Tatuagem
        </h4>
        <Tips list={duringTattoo} />
      </div>

      <div className='order-6 col-span-full md:col-span-4 shadow-xl'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/7147836/pexels-photo-7147836.jpeg" alt="" />
      </div>
      <div className='order-7 col-span-full md:col-span-4'>
        <h4 className='mb-4 font-bold text-xl tracking-tight flex gap-2'>
          <ClockFading />
          Pós-Tatuagem
        </h4>
        <Tips list={postTattoo} />
      </div>

    </div>
  )
}