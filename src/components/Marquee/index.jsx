import { useEffect, useRef } from 'react'
import styles from "./Marquee.module.css"

export default function Marquee() {
  const marqueeRef = useRef(null)
  const speed = .1
  let marqueeInterval = useRef(null)
  
  useEffect(() => {
    const parent = marqueeRef.current
    const clone = parent.innerHTML

    new Array(10).fill(0).forEach(_ => parent.insertAdjacentHTML('beforeend', clone))

    let i = 0
    const startMarquee = () => {
      marqueeInterval.current = setInterval(() => {
        parent.style.transform = `translateX(-${i}px)`
        if (i > parent.clientWidth) {
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
      className={`${styles.marquee} col-span-full min-w-full bg-black text-white py-1 overflow-hidden whitespace-nowrap`}
      
    >
      <div ref={marqueeRef}>
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
    </div>
  )
}