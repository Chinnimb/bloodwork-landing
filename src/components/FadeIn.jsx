import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FadeIn({
  children,
  as = 'span',
  delay = 0.15,
  duration = 1.1,
  className = '',
  once = true,
  amount = 0.4,
}) {
  const Comp = motion[as] ?? motion.span
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })

  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </Comp>
  )
}
