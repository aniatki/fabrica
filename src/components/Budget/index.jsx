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
            <h3 className="col-span-full text-4xl font-semibold text-center tracking-tighter">Como solicitar um orçamento de qualidade?</h3>
            <aside className="bg-linear-to-bl from-amber-500 to-red-300 border-1 border-white/50 col-span-full md:col-span-4  shadow-xl text-black p-8 rounded-md ">
                <div className="flex gap-2 items-center">
                    <BookmarkCheck />
                    <h4 className="text-xl font-bold">Reserva!</h4>
                </div>
                <p>
                    Para realizar um agendamento, pedimos um sinal na hora da reserva para garantir o dia e horário desejado. Proporcionando um atendimento exclusivo a cada cliente. Entre em contato para viver uma experiencia única, tatuando oque sempre sonhou.
                </p>
            </aside>
            <div className="col-span-full md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                {budget.map((el, index) => (
                    <div key={index} className="grid grid-cols-6 gap-x-4 items-center col-span-full">
                        <span className="text-center col-start-1 col-span-1 block font-black text-amber-600 text-5xl">{index+1}</span>
                        <p className="col-start-2 col-span-5">{el}</p>
                    </div>    
                ))}
            </div>
        </div>
    )
}