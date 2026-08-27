import { motion } from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import step1Photo from '../assets/figma/step1-active-photo.jpg'
import step2Photo from '../assets/figma/step2-active-photo.png'
import step3Photo from '../assets/figma/step3-active-photo.png'
import step4Photo from '../assets/figma/step4-active-photo.png'
import activityIcon from '../assets/figma/step1-activity-icon.svg'
import eyeIcon from '../assets/figma/step2-eye-icon.svg'
import listChecksIcon from '../assets/figma/step3-listchecks-icon.svg'
import trendingUpIcon from '../assets/figma/step4-trendingup-icon.svg'

const steps = [
  {
    n: '01.',
    title: 'Run an advanced panel',
    body: 'A comprehensive biomarker panel that captures the full picture - hormones, metabolics, inflammation, and more.',
    icon: activityIcon,
    image: step1Photo,
  },
  {
    n: '02.',
    title: 'Interpret the signal',
    body: 'Physician review translates labs, symptoms, and goals into clinical context.',
    icon: eyeIcon,
    image: step2Photo,
  },
  {
    n: '03.',
    title: 'Engineer your protocol',
    body: 'A tailored protocol built from your unique data - supplements, nutrition, lifestyle shifts, all sequenced for impact.',
    icon: listChecksIcon,
    image: step3Photo,
  },
  {
    n: '04.',
    title: 'Recalibrate as you change',
    body: 'As your body evolves, so does your plan. Ongoing data keeps your protocol aligned with where you are now.',
    icon: trendingUpIcon,
    image: step4Photo,
    imagePosition: 'object-top',
  },
]

export default function HowBloodworkWorks() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-cream px-6 py-16 md:px-[82px]">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-3 text-center">
        <Typewriter
          as="p"
          triggerOnView
          startDelay={150}
          speed={35}
          text="How it works"
          className="text-lg font-bold uppercase tracking-[2.2px] text-orange-3"
        />
        <FadeIn as="h2" className="max-w-2xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[48px]" delay={0.1}>
          We turn bloodwork into a wellness plan.
        </FadeIn>
        <Reveal delay={0.2} as="p" className="max-w-xl text-base leading-relaxed text-[#6e6e6e] md:text-lg">
          Your next step: a clinical roadmap designed to move you from baseline to measurable progress.
        </Reveal>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1200px] flex-col items-stretch gap-4 md:flex-row md:justify-center">
        {steps.map((s, i) => {
          const isActive = active === i
          return (
            <motion.button
              key={s.n}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              layout
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex overflow-hidden rounded-[26px] border text-left backdrop-blur-md ${
                isActive
                  ? 'h-[330px] flex-col justify-end border-white/90 p-4 md:h-[460px] md:flex-[2.2] md:p-0'
                  : 'h-16 flex-row items-center gap-3 border-orange px-5 md:h-[460px] md:flex-1 md:flex-col md:items-stretch md:justify-between md:gap-4 md:px-4 md:py-4'
              }`}
              style={
                isActive
                  ? {}
                  : {
                      backgroundImage:
                        'linear-gradient(170deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)',
                    }
              }
            >
              {isActive && (
                <>
                  <img
                    src={s.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover ${s.imagePosition || 'object-center'}`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(183deg, rgba(255,255,255,0) 3%, rgba(139,135,134,0.13) 35%, rgba(24,15,13,0.5) 73%, rgba(24,15,13,0.5) 98%)',
                    }}
                  />
                </>
              )}

              <span
                className={`relative z-10 shrink-0 font-bold ${
                  isActive
                    ? 'p-4 text-4xl text-white md:absolute md:right-2 md:top-2 md:text-[52px]'
                    : 'text-2xl text-gradient-orange md:text-[52px]'
                }`}
              >
                {s.n}
              </span>

              {isActive ? (
                <div className="relative z-10 flex flex-col gap-4 p-4 md:p-8">
                  <img src={s.icon} alt="" className="h-10 w-10" />
                  <div>
                    <p className="text-2xl font-bold text-white md:text-[40px]">{s.title}</p>
                    <p className="mt-2 max-w-[386px] text-sm font-bold text-white">{s.body}</p>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 flex min-w-0 flex-1 items-center gap-3 md:flex-none md:flex-col md:items-start md:gap-4">
                  <p className="order-1 min-w-0 flex-1 truncate text-sm font-bold text-[#233038] md:order-2 md:min-h-[58px] md:flex-none md:whitespace-normal md:text-[19px]">
                    {s.title}
                  </p>
                  <img src={s.icon} alt="" className="order-2 h-6 w-6 shrink-0 md:order-1 md:h-10 md:w-10" />
                </div>
              )}
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
