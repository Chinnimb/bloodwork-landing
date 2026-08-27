import { Activity, Flame, Leaf, RotateCcw, Sparkles, Zap } from 'lucide-react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'

const cards = [
  { icon: Zap, name: 'Energy', desc: 'See what is actually draining you, from thyroid to iron to sleep quality.' },
  { icon: Activity, name: 'Metabolism', desc: 'Signals that regulate weight and metabolic health, made visible.' },
  { icon: Sparkles, name: 'Hormones', desc: 'Patterns that affect mood, libido, and body composition over time.' },
  { icon: Flame, name: 'Inflammation', desc: 'Hidden stress on your system that shows up before symptoms do.' },
  { icon: Leaf, name: 'Nutrients', desc: 'Deficiencies in key inputs your energy, mood, and immune system rely on.' },
  { icon: RotateCcw, name: 'Recovery', desc: 'Insights into how well your body is bouncing back and healing.' },
]

export default function WhatBloodworkShows() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-3 text-center">
        <Typewriter
          as="p"
          triggerOnView
          startDelay={150}
          speed={35}
          text="What bloodwork shows you"
          className="text-lg font-bold uppercase tracking-[2.2px] text-orange-3"
        />
        <FadeIn as="h2" className="max-w-2xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[48px]" delay={0.1}>
          What bloodwork can reveal
        </FadeIn>
        <Reveal delay={0.2} as="p" className="max-w-xl text-base leading-relaxed text-[#6e6e6e] md:text-lg">
          Your labs can uncover the hidden signals behind how you feel, perform, and recover.
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.name} delay={0.05 * i} className="rounded-2xl border border-[#f4ac63]/40 bg-white p-4 shadow-[0px_8px_24px_rgba(0,0,0,0.04)] sm:p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-2/10 text-orange-2 sm:h-11 sm:w-11">
              <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <p className="mt-3 text-base font-bold text-[#1a1a1a] sm:mt-4 sm:text-lg">{c.name}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#6e6e6e] sm:mt-2 sm:text-sm">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
