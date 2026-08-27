import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from './Header'
import Typewriter from './Typewriter'
import heroPhoto from '../assets/figma/hero-photo.png'
import arrowIcon from '../assets/figma/hero-arrow-icon.svg'
import checkIcon from '../assets/figma/hero-check-icon.svg'
import logoPart1 from '../assets/figma/logo-part1.svg'
import logoPart2 from '../assets/figma/logo-part2.svg'
import logoPart3 from '../assets/figma/logo-part3.svg'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="px-3 pt-3 md:px-10 md:pt-6">
      <div className="relative mx-auto h-[560px] max-w-[1536px] overflow-hidden rounded-[24px] bg-[#1a0f08] sm:h-[620px] md:h-[760px]">
        <motion.img
          src={heroPhoto}
          alt=""
          style={{ y }}
          className="absolute inset-x-0 top-[-15%] h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        <Header />

        <div className="relative z-10 flex h-full w-full flex-col justify-center px-6 pt-24 sm:px-10 md:px-14 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-4" />
            <span className="text-[11px] uppercase tracking-[1.98px] text-white/90">Protocol Health Club</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[620px] text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-[64px] md:tracking-[-1.8px]"
          >
            Advanced Labs &amp; Medical Consult
            <br />
            <Typewriter text="with Protocol Health Club." className="font-serif italic font-normal" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[480px] text-base leading-relaxed text-white/80 md:text-lg"
          >
            Bloodwork, clinical insight, and personalized protocols in one guided health club experience that raises your performance and longevity standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-start gap-5"
          >
            <motion.a
              href="#choose"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange flex w-full max-w-[380px] items-center justify-center gap-3 rounded-full px-9 py-4 text-lg font-bold text-white shadow-lg shadow-orange/30 sm:w-auto sm:min-w-[280px]"
            >
              Start Bloodwork Today
              <img src={arrowIcon} alt="" className="h-5 w-5" />
            </motion.a>

            <div className="flex items-center gap-2 pl-1">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-[#d9d8d7]">
                <img src={checkIcon} alt="" className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-[#d9d8d7]">HSA/FSA Eligible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
