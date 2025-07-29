import { ExternalLinkIcon } from 'lucide-react'

export default function Hero() {
    return (
        <main className='col-span-full text-balance text-center pt-28'>
            <h1 className='motion-preset-slide-up text-4xl md:text-6xl text-gray-800 font-semibold leading-8 md:leading-12 tracking-tighter md:tracking-tight mx-auto mb-4 max-w-7xl '>Um artista fazendo sonhos e  ideas se tornarem realidade na pele.</h1>
            <h4 className='intersect:motion-preset-slide-up motion-delay-0 motion-duration-500 font-medium tracking-tighter text-gray-700'>Sem enrolação, só resultados. Tatuagens que transformam sua pele em uma obra de arte.
            </h4>
            <a className="
              flex
              gap-2
              items-center
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
                href="https://api.whatsapp.com/message/7HMDLIUYKSH3B1?autoload=1&app_absent=0">
                Inspire-se
                <ExternalLinkIcon strokeWidth={3} size={20} />
            </a>
            <div className="image bg-size-[100%] md:bg-cover"></div>
        </main>
    )
}