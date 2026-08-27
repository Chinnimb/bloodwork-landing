import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'

export default function NormalNotOptimal() {
  const barRef = useRef(null)
  const inView = useInView(barRef, { once: true, amount: 0.6 })

  return (
    <section className="bg-cream px-4 pb-16 pt-14 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-[900px]">
        <Typewriter
          as="p"
          triggerOnView
          startDelay={150}
          speed={35}
          text="Normal is not optimal"
          className="text-lg font-bold uppercase tracking-[2.2px] text-orange-3"
        />

        <Reveal delay={0.05} className="mt-4">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[44px]">
            &ldquo;Normal&rdquo; is far from optimal.
          </h2>
          <FadeIn as="p" className="text-gradient-orange mt-2 font-serif text-2xl italic md:text-3xl" delay={0.3}>
            We hold your health to a higher, measurable standard.
          </FadeIn>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 w-full rounded-[24px] border border-[#f4ac63]/40 bg-white p-6 shadow-[0px_16px_32px_rgba(0,0,0,0.06)] sm:p-8 md:p-10">
          <p className="text-center text-sm leading-relaxed text-[#6e6e6e] sm:text-base">
            Normal in America today is sedentary, metabolically unhealthy, and on a list of different prescriptions.
            Standard lab work is used only to detect disease, not prevent it.
          </p>
          <p className="mt-4 text-center text-lg font-bold text-[#1a1a1a] sm:text-xl">Normal is a low bar for your health.</p>

          <div ref={barRef} className="mt-8">
            <div className="flex items-start justify-between gap-2">
              <div className="text-left">
                <p className="text-sm font-bold text-[#233038] sm:text-base">Still &ldquo;In Range&rdquo;</p>
                <p className="text-xs text-[#9a8878] sm:text-sm">Feels Foggy. Fat.</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#233038] sm:text-base">Optimal</p>
                <p className="text-xs text-[#9a8878] sm:text-sm">Feels Sharp. Energized.</p>
              </div>
            </div>

            <div className="relative mt-4">
              <div className="h-4 overflow-hidden rounded-full">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                  transition={{ duration: 1.4, ease: [0.45, 0.05, 0.15, 1] }}
                  className="h-full w-full"
                  style={{ backgroundImage: 'linear-gradient(90deg, #b8341a 0%, #e0521c 40%, #f27a2e 100%)' }}
                />
              </div>

              {[15, 88].map((pos, i) => (
                <motion.div
                  key={pos}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 1.2 + i * 0.3, ease: 'backOut' }}
                  style={{ left: `${pos}%` }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={inView ? { scale: [1, 1.18, 1] } : {}}
                    transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', delay: 1.55 + i * 0.3 }}
                    className="h-7 w-7 rounded-full border-[3px] border-white bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.2)]"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-3 flex justify-between text-[11px] font-semibold uppercase tracking-[1px] text-[#9a8878] sm:text-xs">
              <span>Standard &ldquo;Normal&rdquo; Range</span>
              <span className="text-orange-2">Optimal</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
