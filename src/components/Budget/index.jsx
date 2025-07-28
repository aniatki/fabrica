export default function Budget() {
    return (
        <div id="orçamento" className="col-span-full mb-8 px-4 md:px-0 md:col-span-8 md:col-start-2 grid grid-cols-subgrid gap-x-8 gap-y-16 font-medium tracking-tight">
            <h3 className="col-span-full text-4xl font-semibold text-center tracking-tighter">Como solicitar um orçamento de qualidade?</h3>
            <aside className="col-span-full md:col-span-4 bg-gray-700 text-white p-8 rounded-md ">
                <h4 className="text-xl font-bold">Reserva!</h4>
                <p>
                    Para realizar um agendamento, pedimos um sinal na hora da reserva para garantir o dia e horário desejado. Proporcionando um atendimento exclusivo a cada cliente. Entre em contato para viver uma experiencia única, tatuando oque sempre sonhou.
                </p>
            </aside>
            <div className="col-span-full md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="grid grid-cols-6 gap-x-4 items-center col-span-full">
                    <span className="text-center col-start-1 col-span-1 block font-black text-amber-600 text-5xl">1</span>
                    <p className="col-start-2 col-span-5">Sua ideia.</p>
                </div>
                <div className="grid grid-cols-6 items-center col-span-full">
                    <span className="text-center  col-start-1 col-span-1 block font-black text-amber-600 text-5xl">2</span>
                    <p className="col-start-2 col-span-5">Imagens de referências da tatuagem.</p>
                </div>
                <div className="grid grid-cols-6 items-center col-span-full">
                    <span className="text-center  col-start-1 col-span-1 block font-black text-amber-600 text-5xl">3</span>
                    <p className="col-start-2 col-span-5">Tamanho em centímetros da tatuagem.</p>
                </div>
                <div className="grid grid-cols-6 items-center col-span-full">
                    <span className="text-center  col-start-1 col-span-1 block font-black text-amber-600 text-5xl">4</span>
                    <p className="col-start-2 col-span-5">Uma foto da região aonde será a tattoo.</p>
                </div>
            </div>
        </div>
    )
}