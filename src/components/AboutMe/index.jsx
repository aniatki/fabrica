import styles from "./AboutMe.module.css"
import avatar from "../../assets/avatar.png"
import { useEffect, useRef, useState } from "react"

export default function AboutMe() {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!timelineRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(timelineRef.current);

    return () => {
      observer.disconnect()
    };
  }, []);

  return (
    <div id="quemsou" className='col-span-full px-2 md:px-0 md:col-span-8 md:col-start-2 my-16 tracking-tight font-medium text-gray-700'>

      <h3 className='order-1 col-span-full text-4xl font-semibold text-center tracking-tighter'>Quem sou?</h3>
      <div className={`w-[4em] place-self-center my-4`}>
        <img className="intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 intersect:motion-blur-in-md mix-blend-luminosity" src={avatar} alt="" />
      </div>
      <p>
        Brasileiro, casado, apaixonado por desenhos e tatuagens desde a adolescência. Sempre com foco em proporcionar um resultado meus clientes, buscando uma evolução diaria em minha vida.
      </p>

      <div ref={timelineRef} className={`${styles.timeline}
          grid grid-cols-8 gap-x-8
          transition-all duration-700 ease-out will-change-transform
          ${isVisible ? styles.timelineGrow : ""}`}>

        <div className='col-span-4 col-start-1 row-start-1 text-right'>
          <h4 className="text-amber-600 font-bold">Começo!</h4>
          <p>Aos 17 anos eu iniciei a venda de desenhos encomendados para as pessoas taturem em estudios.</p>
        </div>

        <div className='col-span-4 col-start-5 row-start-2'>
          <h4 className="text-amber-600 font-bold">Primeira Tattoo!</h4>
          <p>Esse dia será inesquecível na minha vida...pois tudo tem um começo para obter progresso.</p>
        </div>

        <div className="col-span-4 col-start-1 row-start-3 text-right">
          <h4 className="text-amber-600 font-bold">2019</h4>
          <p>Junto de minha esposa, criamos o Telas Pet, seguimento de pinturas de pets feitas a mão em diversos tamanhos de telas e produtos.
          </p>
        </div>

        <div className='col-span-4 col-start-5 row-start-4'>
          <h4 className="text-amber-600 font-bold">2022</h4>
          <p>Em 2022 embarco em uma jornada chamada intercâmbio, morei 2 anos na Irlanda para viver uma experiência única.
          </p>
        </div>

        <div className='col-span-4 col-start-1 row-start-5 text-right'>
          <h4 className="text-amber-600 font-bold">2024</h4>
          <p>Retorno ao Brasil e com foco extremo em tatuagem e no estilo realista, realizando uma das minhas maiores paixões.
          </p>
        </div>

        <div className='col-span-4 col-start-5 row-start-6'>
          <h4 className="text-amber-600 font-bold leading-4">Curso de realismo realizado com sucesso</h4>
          <p>Esse ano foi muito marcante para minha vida, realizei diversas conquistas, e essa não foi diferente, tive a oportunidade de aperfeiçoar ainda mais o meu conhecimento de uma forma geral. Conheci muitas pessoas que fizeram eu evoluir durante o processo e que com certeza irei continuar seguindo o caminho que sempre acreditei, sempre com foco no objetivo e com Deus do meu lado, e ao lado da minha família.
          </p>
        </div>
        <div className='col-span-4 col-start-1 row-start-7 text-right mb-8'>
          <h4 className="text-amber-600 font-bold">Obrigado Deus!</h4>
          <p>
            Que as metas para 2025 sejam realizadas. Estou pronto para viver um caminho diferente e fazendo oque sempre amei, TATTOO.
          </p>
        </div>
      </div>
      <div className='text-3xl col-span-full row-start-7 p-4 text-center text-balance intersect-once intersect:motion-translate-y-in-100 motion-ease-bounce'>
        <p>Eu Fabricio, te convido a estar comigo nessa nova caminhada, acompanhando todo o meu progresso e fazendo sonhos e ideias de arte se tornarem realidade na pele.
        </p>
        <p>Muito bem vindo(a)!</p>
      </div>
    </div>
  )
}