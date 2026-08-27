import { Check } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'

const points = [
  'We align how you feel with your lab results',
  'We show you what is happening and why',
  'We tell you exactly what to do next',
]

export default function WhyItMatters() {
  const barRef = useRef(null)
  const inView = useInView(barRef, { once: true, amount: 0.6 })

  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:px-10">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
        <div>
          <Typewriter
            as="p"
            triggerOnView
            startDelay={150}
            speed={35}
            text="Why it matters"
            className="text-lg font-bold uppercase tracking-[2.2px] text-orange-3"
          />
          <FadeIn as="h2" className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[44px]" delay={0.1}>
            From vague symptoms to exact next steps and peace of mind.
          </FadeIn>
          <Reveal delay={0.2} as="p" className="mt-5 max-w-lg text-base leading-relaxed text-[#6e6e6e] md:text-lg">
            Instead of guessing why your energy, weight, sleep, or recovery feel off, Protocol tells you exactly what your body is actually experiencing.
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.3 + i * 0.08} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-2/10 text-orange-2">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-base font-medium text-[#1a1a1a]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.25} className="rounded-[24px] border border-[#f4ac63]/40 bg-white p-6 shadow-[0px_16px_32px_rgba(0,0,0,0.06)] md:p-8">
          <p className="text-sm font-bold uppercase tracking-[1px] text-[#1a1a1a]">Biomarker Signal</p>
          <p className="mt-1.5 text-sm text-[#6e6e6e]">Energy, sleep, recovery, metabolism</p>

          <div ref={barRef} className="relative mt-8">
            <div className="h-2 overflow-hidden rounded-full bg-[#f2e3d8]">
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                transition={{ duration: 1.4, ease: [0.45, 0.05, 0.15, 1] }}
                className="h-full w-full"
                style={{ backgroundImage: 'linear-gradient(90deg, #f4c542 0%, #f4ac63 35%, #f27a2e 65%, #e0391a 100%)' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3, left: '0%' }}
              animate={inView ? { opacity: 1, scale: 1, left: '85%' } : {}}
              transition={{ duration: 1.4, ease: [0.45, 0.05, 0.15, 1] }}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={inView ? { scale: [1, 1.18, 1] } : {}}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                className="h-4 w-4 rounded-full border-[3px] border-white bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)]"
              />
            </motion.div>
          </div>

          <div className="mt-3 flex justify-between text-xs font-semibold uppercase tracking-[1px]">
            <span style={{ color: '#e0a800' }}>Low Signal</span>
            <span className="text-[#1a1a1a]">In Range</span>
            <span style={{ color: '#e0391a' }}>Optimal</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
