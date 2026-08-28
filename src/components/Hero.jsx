import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const parallaxX = useSpring(useTransform(pointerX, [-1, 1], [10, -10]), { stiffness: 60, damping: 20 })
  const parallaxY = useSpring(useTransform(pointerY, [-1, 1], [6, -6]), { stiffness: 60, damping: 20 })

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }
  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate overflow-hidden bg-[#1a0f08]"
    >
      <div className="relative min-h-[560px] w-full overflow-hidden md:min-h-[860px]">
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute inset-[-2%]">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.07 }}
            transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={heroPhoto}
              alt=""
              style={{ y }}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.07, 1], x: [0, -10, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
              className="absolute inset-0 h-[130%] w-full object-cover"
            />
          </motion.div>

          <motion.div
            aria-hidden
            style={{ y: glowY }}
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{ opacity: 0.55, scale: 1.05 }}
            transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0 mix-blend-screen"
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
              style={{
                background:
                  'radial-gradient(38% 32% at 68% 42%, rgba(255,186,110,0.6) 0%, rgba(255,150,60,0.25) 35%, rgba(255,150,60,0) 70%)',
              }}
            />
          </motion.div>

          <motion.div
            aria-hidden
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 4, ease: 'easeOut' }}
            className="pointer-events-none absolute inset-0 bg-[#1a1410]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </motion.div>

        <div className="hidden md:block">
          <Header />
        </div>

        <div className="absolute inset-x-4 top-4 z-30 flex items-center justify-between rounded-full border border-white/25 bg-white/15 px-5 py-3 backdrop-blur-md md:hidden">
          <a href="#" className="relative h-5 w-[110px]">
            <img src={logoPart1} alt="" className="absolute left-0 top-0 h-5" />
            <img src={logoPart2} alt="protocol" className="absolute left-[29px] top-0 h-5" />
            <img src={logoPart3} alt="" className="absolute left-[63px] top-0 h-4" />
          </a>
          <motion.a
            href="https://partner.protocolhealthclub.com/general-health-a?am_id=alicia"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-orange rounded-full px-4 py-2 text-xs font-medium text-white"
          >
            Start Bloodwork
          </motion.a>
        </div>

        <div className="relative z-10 flex min-h-[560px] w-full flex-col justify-center px-6 pb-16 pt-28 sm:px-10 md:min-h-[860px] md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-4" />
            <span className="text-[11px] uppercase tracking-[1.98px] text-white/90">Protocol Health Club</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[880px] text-4xl font-bold leading-[1.08] text-white sm:text-5xl sm:leading-[1.02] md:text-[72px] md:tracking-[-1.8px]"
          >
            Advanced Labs &amp; Medical Consult
            <br />
            <Typewriter text="with Protocol Health Club." className="font-serif italic font-normal" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[1050px] text-lg font-semibold leading-relaxed text-white/75 md:text-2xl"
          >
            Bloodwork, clinical insight, and personalized protocols in one guided health club experience that raises your performance and longevity standards
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-start gap-5"
          >
            <motion.a
              href="https://partner.protocolhealthclub.com/general-health-a?am_id=alicia"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange flex w-full max-w-[420px] items-center justify-center gap-3 rounded-full px-10 py-4 text-xl font-bold text-white shadow-lg shadow-orange/30 sm:w-auto sm:min-w-[300px]"
            >
              Start Bloodwork Today
              <img src={arrowIcon} alt="" className="h-6 w-6" />
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
