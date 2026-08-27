import { motion } from 'framer-motion'
import logoPart1 from '../assets/figma/logo-part1.svg'
import logoPart2 from '../assets/figma/logo-part2.svg'
import logoPart3 from '../assets/figma/logo-part3.svg'

export default function Header() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-30 bg-white/25 backdrop-blur-sm"
    >
      <div className="flex w-full items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="relative h-5 w-[110px] md:h-[23px] md:w-[128px]">
          <img src={logoPart1} alt="" className="absolute left-0 top-0 h-full" />
          <img src={logoPart2} alt="protocol" className="absolute left-[26%] top-0 h-full" />
          <img src={logoPart3} alt="" className="absolute left-[56%] top-0 h-[78%]" />
        </a>

        <button type="button" aria-label="Menu" className="flex h-9 w-9 flex-col items-center justify-center gap-1.5">
          <span className="h-[2px] w-6 rounded-full bg-white" />
          <span className="h-[2px] w-6 rounded-full bg-white" />
        </button>
      </div>
    </motion.div>
  )
}
