import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import runnerPhoto from '../assets/figma/final-cta-photo.png'

export default function FinalCTA() {
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <section className="px-4 pb-8 pt-4 sm:px-6 md:px-10">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-[1360px] flex-col overflow-hidden rounded-[24px] shadow-[0px_0px_25px_rgba(0,0,0,0.25)] md:flex-row"
      >
        <div className="relative h-[240px] w-full md:h-auto md:w-[480px] md:self-stretch">
          <img src={runnerPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div
          className="flex flex-1 flex-col justify-center px-5 py-10 sm:px-8 md:px-14 md:py-14"
          style={{
            backgroundImage: 'linear-gradient(169deg, rgb(252,240,236) 33.5%, rgb(244,172,99) 89%, rgb(244,95,43) 114%)',
          }}
        >
          <Reveal className="mb-6 w-fit rounded-full border border-[rgba(234,101,58,0.4)] bg-gradient-orange px-3.5 py-1.5">
            <span className="text-[11px] uppercase tracking-[1.5px] text-white">Clinical Management</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-xl text-[28px] font-bold leading-tight tracking-[-0.8px] text-[#233038] sm:text-3xl md:text-[48px]">
              The Protocol for optimal performance,
              <br />
              <span className="font-script block italic text-orange-3">built around your biology.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3} className="flex justify-center md:block">
            <a
              href="#choose"
              className="mt-9 inline-block rounded-full bg-[#233038] px-7 py-3.5 text-lg font-semibold text-white"
            >
              Start bloodwork today
            </a>
          </Reveal>
        </div>
      </motion.div>
    </section>
  )
}
