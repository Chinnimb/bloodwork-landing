import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'
import Typewriter from './Typewriter'
import chevronIcon from '../assets/figma/faq-chevron-icon.svg'

const questions = [
  'What does the bloodwork include?',
  'Do I need symptoms to start?',
  'What happens after I get my results?',
  'Can this help with energy, weight, sleep, or recovery?',
  'Is this personalized?',
]

const answers = {
  'What does the bloodwork include?': [
    'A comprehensive panel covering hormones, metabolism, inflammation, nutrients, and recovery markers, over 100 biomarkers in a single draw.',
  ],
  'Do I need symptoms to start?': [
    'No. Plenty of members feel fine and just want a clear, measurable baseline. Bloodwork often reveals things you cannot feel yet.',
  ],
  'What happens after I get my results?': [
    'Your results go to a licensed physician who reviews everything and schedules a consultation to walk through what your labs mean and what to do next.',
  ],
  'Can this help with energy, weight, sleep, or recovery?': [
    'Yes. Those are exactly the areas bloodwork is best at explaining, since they are usually driven by hormones, metabolic markers, or nutrient deficiencies that show up clearly in labs.',
  ],
  'Is this personalized?': [
    'Completely. Nothing is prescribed or recommended before your labs are on the table, and your protocol is built specifically from your results, not a generic template.',
  ],
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:px-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-[300px_1fr] md:gap-16">
        <div>
          <Typewriter
            triggerOnView
            startDelay={150}
            speed={35}
            text="Questions"
            className="text-lg font-bold uppercase tracking-[2.2px] text-orange-3"
          />
          <Reveal delay={0.05} as="h2" className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[48px]">
            Everything you need before you begin.
          </Reveal>
        </div>

        <div className="divide-y divide-[#e6dcd4] border-b border-[#e6dcd4]">
          {questions.map((q, i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <motion.button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium tracking-[-0.45px] text-[#180f0d] md:text-xl">{q}</span>
                  <motion.img
                    src={chevronIcon}
                    alt=""
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-4 w-4 shrink-0"
                  />
                </motion.button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 pb-6 text-base leading-relaxed text-[#47474d]">
                        {answers[q].map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
