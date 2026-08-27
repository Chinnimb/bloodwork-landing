import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import interpretPhoto from '../assets/figma/step2-active-photo.png'

const steps = [
  { n: '01', title: 'Run an advanced panel', desc: 'A comprehensive blood draw covers over 100 biomarkers across hormones, metabolism, and inflammation.' },
  { n: '02', title: 'Interpret the signal', desc: 'A physician reviews and translates your labs, symptoms, and goals into clinical context.', photo: interpretPhoto },
  { n: '03', title: 'Engineer your protocol', desc: 'A personalized plan is built from your results, not a generic template.' },
  { n: '04', title: 'Recalibrate as you change', desc: 'Follow-up bloodwork keeps your protocol aligned as your body responds.' },
]

export default function HowBloodworkWorks() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-10">
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

      <div className="mx-auto mt-12 flex max-w-[900px] flex-col gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={0.08 * i} className="flex flex-col gap-5 rounded-2xl border border-[#f4ac63]/40 bg-cream p-6 sm:flex-row sm:items-start md:p-8">
            <span className="text-3xl font-extrabold text-orange-2 md:text-4xl">{s.n}</span>
            <div className="flex-1">
              <p className="text-xl font-bold text-[#1a1a1a] md:text-2xl">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e6e] md:text-base">{s.desc}</p>
            </div>
            {s.photo && (
              <div className="h-[160px] w-full overflow-hidden rounded-xl sm:h-[120px] sm:w-[160px] sm:shrink-0">
                <img src={s.photo} alt="" className="h-full w-full object-cover" />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
