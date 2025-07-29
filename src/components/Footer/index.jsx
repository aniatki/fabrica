import signature from "/white.webp"

export default function Footer() {
    return (
        <footer className='bg-linear-to-bl from-stone-400 to-slate-600  col-span-full font-medium py-8 text-zinc-400 tracking-tight text-xs text-balance text-center'>
          <div className='justify-center flex items-center flex-row'>
            <p className='text-4xl tracking-tightest font-light text-zinc-400'>fabricio's tattoo</p>
            <img className='max-w-16 mix-blend-lighten invert opacity-20' src={signature} alt="" />
          </div>
          <p>Created by <a className='underline underline-offset-2 hover:text-zinc-200' href="https://atki.ie/">Hasan Atki</a> &copy;{Date().slice(11, 15)}</p>
        </footer>
    )
}