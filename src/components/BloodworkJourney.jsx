import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import timelineNode from '../assets/figma/timeline-node.svg'
import stepCheck from '../assets/figma/step-check.svg'

const days = [
  { label: 'Day 1', active: false },
  { label: 'Day 5', active: false },
  { label: 'Day 10', active: true },
]

const steps = [
  {
    n: 'Step 1:',
    title: 'Complete Bloodwork',
    bullets: ['Visit a partner lab (Quest/BioReference)', 'Over 100 biomarkers tested in one draw'],
  },
  {
    n: 'Step 2:',
    title: 'Receive Full Analysis',
    bullets: ['Detailed breakdown of every biomarker', 'Identify deficiencies and imbalances'],
  },
  {
    n: 'Step 3:',
    title: 'Begin Your Game Plan',
    bullets: ['Personalized plan from medical staff', 'Optional coaching and therapies to help expedite your results'],
  },
]

const DAY_WINDOWS = [
  [0.02, 0.14],
  [0.14, 0.26],
  [0.26, 0.38],
]
const CARD_WINDOWS = [
  [0.05, 0.2],
  [0.17, 0.32],
  [0.29, 0.44],
]

function TimelineDay({ d, scrollYProgress, windowRange, position, total }) {
  const opacity = useTransform(scrollYProgress, windowRange, [0, 1])
  const scale = useTransform(scrollYProgress, windowRange, [0.5, 1])
  const leftPercent = (position / (total - 1)) * 100
  const badgeTranslateX = position === 0 ? '0%' : position === total - 1 ? '-100%' : '-50%'

  return (
    <motion.div style={{ opacity, scale, left: `${leftPercent}%` }} className="absolute bottom-0">
      <span
        style={{ transform: `translateX(${badgeTranslateX})` }}
        className={`absolute bottom-[22px] whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold ${
          d.active ? 'bg-orange-2 text-white' : 'border border-orange-2 bg-cream text-orange-2'
        }`}
      >
        {d.label}
      </span>
      <img src={timelineNode} alt="" className="absolute bottom-0 h-[10px] w-[10px] max-w-none -translate-x-1/2" />
    </motion.div>
  )
}

function StepCard({ s, scrollYProgress, windowRange }) {
  const opacity = useTransform(scrollYProgress, windowRange, [0, 1])
  const rotateX = useTransform(scrollYProgress, windowRange, [-90, 0])

  return (
    <motion.div
      style={{ opacity, rotateX, transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
      className="h-full"
    >
      <div className="flex h-full flex-col gap-5 rounded-2xl border border-[#f4ac63] bg-white p-8 shadow-[0px_12px_16px_rgba(245,79,43,0.04)]">
        <p className="text-xl font-bold tracking-[-0.5px] text-[#1c1c1e]">
          <span className="font-extrabold text-orange-2">{s.n} </span>
          {s.title}
        </p>
        <div className="flex flex-col gap-3">
          {s.bullets.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] bg-orange/[0.08]">
                <img src={stepCheck} alt="" className="h-[10px] w-[10px]" />
              </span>
              <p className="text-sm font-medium leading-relaxed text-[#5e5e62]">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function BloodworkJourney() {
  const blockRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: blockRef, offset: ['start 0.85', 'end 0.4'] })
  const lineScaleX = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section className="bg-white px-6 py-16 md:px-[120px] md:py-20">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <Typewriter
            as="p"
            triggerOnView
            startDelay={150}
            speed={35}
            text="YOUR BLOODWORK JOURNEY"
            className="text-base font-bold uppercase tracking-[1.5px] text-orange-3"
          />
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight text-[#1c1c1e] sm:text-4xl md:text-[48px]">
              What happens{' '}
              <FadeIn as="span" className="font-serif font-medium italic text-orange-2" delay={0.3}>
                next?
              </FadeIn>
            </h2>
          </Reveal>
        </div>

        <div ref={blockRef} className="flex w-full flex-col items-center gap-14">
          <div className="w-full px-6 md:px-12">
            <div className="relative h-[70px]">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-2/15" />
              <motion.div
                style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
                className="absolute bottom-0 left-0 right-0 h-px bg-orange-2/40"
              />
              {days.map((d, i) => (
                <TimelineDay
                  key={d.label}
                  d={d}
                  scrollYProgress={scrollYProgress}
                  windowRange={DAY_WINDOWS[i]}
                  position={i}
                  total={days.length}
                />
              ))}
            </div>
          </div>

          <div
            className="drop-shadow-[0px_4px_2px_rgba(244,172,99,0.21)] grid w-full gap-6 md:grid-cols-3"
            style={{ perspective: 1200 }}
          >
            {steps.map((s, i) => (
              <StepCard key={s.title} s={s} scrollYProgress={scrollYProgress} windowRange={CARD_WINDOWS[i]} />
            ))}
          </div>
        </div>

        <Reveal delay={0.2} as="p" className="max-w-[840px] text-center text-[13px] leading-relaxed text-[#5e5e62]">
          After payment, we send you instructions to complete your blood work. You can visit a local Quest/BioReference facility or schedule a mobile phlebotomist to come to you.
        </Reveal>
      </div>
    </section>
  )
}
