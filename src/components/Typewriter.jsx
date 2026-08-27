import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Typewriter({
  text,
  speed = 40,
  startDelay = 900,
  className = '',
  as = 'span',
  triggerOnView = false,
  once = true,
  amount = 0.6,
}) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })
  const shouldStart = triggerOnView ? inView : true
  const Comp = as

  useEffect(() => {
    if (!shouldStart) return undefined

    let i = 0
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay, shouldStart])

  return (
    <Comp ref={ref} className={className}>
      {text.slice(0, count)}
      <span className={`inline-block w-[2px] translate-y-[0.1em] bg-current align-middle ${done ? 'animate-pulse' : 'opacity-100'}`}>
        &nbsp;
      </span>
    </Comp>
  )
}
