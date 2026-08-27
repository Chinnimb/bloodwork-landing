import { BarChart3, Circle, Grip, Target, TrendingUp, Waves } from 'lucide-react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'

const cards = [
  { icon: BarChart3, name: 'Energy', desc: 'Markers connected to fatigue, stamina, and daily performance.' },
  { icon: Target, name: 'Metabolism', desc: 'Signals that may explain weight resistance or blood sugar shifts.' },
  { icon: Waves, name: 'Hormones', desc: 'Patterns that influence mood, libido, sleep, and recovery.' },
  { icon: Grip, name: 'Inflammation', desc: 'Hidden stress signals that can affect long-term health.' },
  { icon: Circle, name: 'Nutrients', desc: 'Deficiencies that may impact energy, focus, and resilience.' },
  { icon: TrendingUp, name: 'Recovery', desc: 'Insights into muscle stress, repair, and training readiness.' },
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
          What bloodwork <span className="font-serif italic text-orange-2">can reveal?</span>
        </FadeIn>
        <Reveal delay={0.2} as="p" className="max-w-xl text-base leading-relaxed text-[#6e6e6e] md:text-lg">
          Your labs can uncover the hidden signals behind how you feel, perform, recover, and age.
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal
            key={c.name}
            delay={0.05 * i}
            className="rounded-2xl border border-orange-2/50 bg-white p-4 shadow-[0px_16px_24px_-8px_rgba(242,122,46,0.25)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-bold text-[#1a1a1a] sm:text-lg">{c.name}</p>
              <c.icon className="h-5 w-5 shrink-0 text-orange-2" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#6e6e6e] sm:mt-3 sm:text-sm">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
