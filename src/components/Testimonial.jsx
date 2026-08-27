import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import testimonialPhoto from '../assets/figma/testimonial-photo.png'

export default function Testimonial() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 py-6 sm:px-6 md:px-10">
      <div className="relative mx-auto h-[420px] max-w-[1460px] overflow-hidden rounded-[20px] sm:h-[480px] md:h-[560px]">
        <motion.img
          src={testimonialPhoto}
          alt=""
          style={{ y }}
          className="absolute inset-x-0 top-[-15%] h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal delay={0.1} className="max-w-3xl">
            <p className="font-script text-3xl leading-snug text-white md:text-[48px]">
              &ldquo;For the first time, my treatment plan actually made sense.{' '}
              <span className="italic">Labs, symptoms, root cause &mdash; all connected.&rdquo;</span>
            </p>
          </Reveal>
          <Reveal delay={0.2} as="p" className="mt-8 text-sm uppercase tracking-[2.52px] text-white/80">
            Andrew R. &middot; Member since 2024
          </Reveal>
        </div>
      </div>
    </section>
  )
}
