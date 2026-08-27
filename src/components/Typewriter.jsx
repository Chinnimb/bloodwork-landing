import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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
  const Comp = motion[as] ?? motion.span

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
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={shouldStart ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {text.slice(0, count)}
      <span className={`inline-block w-[2px] translate-y-[0.1em] bg-current align-middle ${done ? 'animate-pulse' : 'opacity-100'}`}>
        &nbsp;
      </span>
    </Comp>
  )
}
