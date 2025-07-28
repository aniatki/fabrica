import { BookmarkCheck } from "lucide-react"

export default function Budget() {
    const budget = [
        'Sua ideia.',
        'Imagens de referências da tatuagem.',
        'Tamanho em centímetros da tatuagem.',
        'Uma foto da região aonde será a tattoo.',
    ]
    return (

        <div id="orçamento" className="col-span-full mt-8 mb-20 px-4 md:px-0 md:col-span-8 md:col-start-2 grid grid-cols-subgrid gap-x-8 gap-y-16 font-medium tracking-tight">
            <h3 className="col-span-full text-4xl font-semibold text-center tracking-tighter intersect-once intersect:motion-preset-slide-up motion-duration-500 motion-delay-0 ">Como solicitar um orçamento de qualidade?</h3>
            <aside className="bg-linear-to-bl from-stone-400 to-slate-600 border-1 border-white/50 col-span-full md:col-span-4  shadow-xl text-white p-8 rounded-md intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-500">
                <div className="flex gap-2 items-center">
                    <BookmarkCheck />
                    <h4 className="text-3xl font-bold">Reserva!</h4>
                </div>
                <p className="text-md mt-8">
                    Para realizar um agendamento, pedimos um sinal na hora da reserva para garantir o dia e horário desejado. Proporcionando um atendimento exclusivo a cada cliente. Entre em contato para viver uma experiencia única, tatuando o que sempre sonhou.
                </p>
            </aside>
            <div className="
                    col-span-full 
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-4
                    md:col-span-4 
                    ">
                {budget.map((el, index) => (
                    <div key={index} className={`
                                        grid 
                                        grid-cols-6 
                                        gap-x-2 
                                        items-center col-span-full
                                        intersect-once intersect:motion-preset-slide-up motion-delay-${400} 
                                        motion-duration-500
                                        `}>
                        <span className="text-center col-start-1 col-span-1
                             block font-black text-amber-600 text-3xl">{index + 1}</span>
                        <p className="col-start-2 col-span-5">{el}</p>
                    </div>
                ))}
            </div>
            {/* <form className="
                    col-span-full 
                    grid 
                    gap-y-4 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-4
                    py-4
                    "
                action="">
                <label className="col-span-full " htmlFor="">Ideia
                    <input className="
                            bg-white 
                            outline-2 
                            outline-zinc-300 
                            w-full
                            rounded
                            "
                        type="text" />
                </label>

                <button className="col-span-1 sm:col-start-2 md:col-span-full md:col-start-1 md:ml-0 mt-4 py-1 font-bold transition bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-600/20 text-white rounded cursor-pointer" type="submit">Enviar</button>
            </form> */}
        </div>
    )
}