import { useEffect, useRef } from 'react'
import styles from "./Marquee.module.css"

export default function Marquee() {
  const marqueeRef = useRef(null)
  const speed = .1
  let marqueeInterval = useRef(null)

  useEffect(() => {
    const parent = marqueeRef.current
    const clone = parent.innerHTML
    parent.insertAdjacentHTML('beforeend', clone)
    parent.insertAdjacentHTML('beforeend', clone)

    const firstElement = parent.children[0]
    let i = 0

    const startMarquee = () => {
      marqueeInterval.current = setInterval(() => {
        firstElement.style.marginLeft = `-${i}px`
        if (i > firstElement.clientWidth) {
          i = 0
        }
        i += speed
      }, 0)
    }

    const stopMarquee = () => {
      clearInterval(marqueeInterval.current)
    }

    parent.addEventListener('mouseenter', stopMarquee)
    parent.addEventListener('mouseleave', startMarquee)

    startMarquee()

    return () => {
      clearInterval(marqueeInterval.current)
      parent.removeEventListener('mouseenter', stopMarquee)
      parent.removeEventListener('mouseleave', startMarquee)
    }
  }, [])

  return (
    <div
      className={`marquee col-span-full bg-black text-white py-1 overflow-hidden whitespace-nowrap ${styles.marquee}`}
      ref={marqueeRef}
    >
      <span 
        className="
            text-xs 
            font-extrabold 
            tracking-[.35em] 
            inline-block
            mr-8
            ">
        PET TATTOO R$500
      </span>
    </div>
  )
}
