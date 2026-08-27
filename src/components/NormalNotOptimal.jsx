import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import rangeBarTrack from '../assets/figma/range-bar-track.svg'
import normalLine from '../assets/figma/range-normal-line.svg'

export default function NormalNotOptimal() {
  const barRef = useRef(null)
  const inView = useInView(barRef, { once: true, amount: 0.6 })

  return (
    <section className="bg-cream px-4 pb-16 pt-14 sm:px-6 md:px-10">
      <div className="w-full">
        <Typewriter
          as="p"
          triggerOnView
          startDelay={150}
          speed={35}
          text="Normal is not optimal"
          className="text-xl font-bold uppercase tracking-[3.6px] text-orange-3"
        />

        <Reveal delay={0.05} className="mt-6 max-w-5xl">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[56px]">
            &ldquo;Normal&rdquo; is far from optimal.
          </h2>
          <FadeIn as="p" className="text-gradient-orange mt-4 font-serif text-3xl md:text-[48px]" delay={0.3}>
            We hold your health to a higher, measurable standard.
          </FadeIn>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 w-full rounded-[28px]">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 text-center text-[#b08060]">
            <p className="text-sm font-bold tracking-[1px] sm:text-lg sm:tracking-[2.5px] md:text-xl">
              Normal in America today is sedentary, metabolically stressed, and one bad panel away from a diagnosis.
            </p>
            <p className="text-sm font-extrabold tracking-[1px] sm:text-lg sm:tracking-[2.5px] md:text-xl">
              Standard bloodwork only exists to catch disease, not to protect your health.
            </p>
            <p className="text-base font-extrabold text-[#461d0e] sm:text-xl md:text-2xl">Normal is a low bar for your health.</p>
          </div>

          <div
            ref={barRef}
            className="mx-auto mt-8 w-full max-w-[1347px] rounded-[20px] bg-white p-4 shadow-[0px_0px_12px_rgba(242,122,46,0.67)] sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 2.0 }}
              className="mb-3 flex items-start justify-between gap-2 sm:hidden"
            >
              <div className="text-left">
                <p className="text-sm font-bold text-[#233038]">Still &ldquo;In Range&rdquo;</p>
                <p className="text-[11px] text-[#9a8878]">Tired, Foggy, Flat</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#233038]">Optimal</p>
                <p className="text-[11px] text-[#9a8878]">Sharp, Strong, Energized</p>
              </div>
            </motion.div>

            <div className="relative hidden sm:block sm:h-[64px] md:h-[74px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 2.0 }}
                style={{ left: '37.17%' }}
                className="absolute top-0 w-max max-w-[190px] -translate-x-1/2 text-center"
              >
                <p className="text-lg font-bold text-[#233038] md:text-[22px]">Still &ldquo;In Range&rdquo;</p>
                <p className="text-sm text-[#9a8878] md:text-base">Tired, Foggy, Flat</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 2.5 }}
                style={{ left: '77.34%' }}
                className="absolute top-0 w-max max-w-[220px] -translate-x-1/2 text-center"
              >
                <p className="text-lg font-bold text-[#233038] md:text-[22px]">Optimal</p>
                <p className="text-sm text-[#9a8878] md:text-base">Sharp, Strong, Energized</p>
              </motion.div>
            </div>

            <div className="relative mt-2">
              <div className="overflow-hidden rounded-full">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                  transition={{ duration: 2.2, ease: [0.45, 0.05, 0.15, 1] }}
                >
                  <img src={rangeBarTrack} alt="" className="h-[18px] w-full sm:h-auto" />
                </motion.div>

                <motion.div
                  initial={{ left: '0%', opacity: 0 }}
                  animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
                  transition={{ duration: 2.2, ease: [0.45, 0.05, 0.15, 1], times: [0, 0.08, 0.85, 1] }}
                  className="pointer-events-none absolute top-0 h-full w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 2.0, ease: 'backOut' }}
                style={{ left: '37.17%', width: '2.3%' }}
                className="absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={inView ? { scale: [1, 1.18, 1] } : {}}
                  transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', delay: 2.35 }}
                  className="h-full w-full rounded-full border-[3px] border-white bg-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 2.5, ease: 'backOut' }}
                style={{ left: '77.34%', width: '2.3%' }}
                className="absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={inView ? { scale: [1, 1.18, 1] } : {}}
                  transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', delay: 2.85 }}
                  className="h-full w-full rounded-full border-[3px] border-white bg-white"
                />
              </motion.div>

              <motion.img
                src={normalLine}
                alt=""
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.85 } : {}}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="pointer-events-none absolute left-[10%] top-[26px] h-[6px] w-[76%] sm:top-[52px] sm:h-auto"
              />

              <motion.div
                initial={{ left: '37.17%', opacity: 0 }}
                animate={inView ? { left: ['37.17%', '37.17%', '77.34%', '77.34%'], opacity: [0, 1, 1, 0] } : {}}
                transition={{
                  duration: 2.4,
                  times: [0, 0.15, 0.85, 1],
                  delay: 3.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute top-1/2 z-10 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)]"
              />
            </div>

            <p className="mt-5 text-center text-[11px] uppercase tracking-[1px] text-[#9a8878] sm:text-sm sm:tracking-[2px]">
              Standard &ldquo;Normal&rdquo; Range
            </p>

            <div className="relative mt-3 h-6 sm:h-6">
              <div
                style={{ left: '67.59%', width: '19.51%' }}
                className="absolute top-0 h-[2px] rounded-full bg-orange-3 sm:top-1/2 sm:-translate-y-1/2"
              />
              <span
                style={{ left: 'calc(67.59% + 19.51% / 2)' }}
                className="absolute top-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[1px] text-orange-3 sm:hidden"
              >
                Optimal
              </span>
              <span
                style={{ left: 'calc(67.59% + 19.51% + 10px)' }}
                className="absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-sm font-bold uppercase tracking-[2px] text-orange-3 sm:block"
              >
                Optimal
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
