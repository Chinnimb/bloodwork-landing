import { motion, useInView } from 'framer-motion'
import { forwardRef, useRef } from 'react'

const Reveal = forwardRef(function Reveal(
  {
    children,
    as = 'div',
    delay = 0,
    y = 24,
    duration = 0.6,
    className = '',
    once = true,
    amount = 0.25,
    ...rest
  },
  forwardedRef
) {
  const Comp = motion[as] ?? motion.div
  const localRef = useRef(null)
  const inView = useInView(localRef, { once, amount })

  const setRefs = (node) => {
    localRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    <Comp
      ref={setRefs}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  )
})

export default Reveal
