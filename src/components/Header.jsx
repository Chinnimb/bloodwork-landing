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
      className="absolute left-0 right-0 top-0 z-30 bg-white/25 backdrop-blur-sm"
    >
      <div className="flex w-full items-center justify-between px-10 py-6">
        <a href="#" className="relative h-[23px] w-[128px]">
          <img src={logoPart1} alt="" className="absolute left-0 top-0 h-[23px]" />
          <img src={logoPart2} alt="protocol" className="absolute left-[33px] top-0 h-[23px]" />
          <img src={logoPart3} alt="" className="absolute left-[72px] top-0 h-[18px]" />
        </a>

        <motion.a
          href="https://partner.protocolhealthclub.com/general-health-a?am_id=alicia"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-orange rounded-[20px] px-4 py-2 text-sm font-medium text-white"
        >
          Start Bloodwork Today
        </motion.a>
      </div>
    </motion.div>
  )
}
