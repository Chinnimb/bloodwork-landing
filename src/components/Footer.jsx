import footerLogo1 from '../assets/figma/footer-logo-part1.svg'
import footerLogo2 from '../assets/figma/footer-logo-part2.svg'
import footerLogo3 from '../assets/figma/footer-logo-part3.svg'

const legalLinks = [
  { label: 'Terms Of Use', href: 'https://protocolhealthclub.com/terms-of-service' },
  { label: 'Privacy Policy', href: 'https://protocolhealthclub.com/privacy-policy' },
  { label: 'Refund Policy', href: 'https://protocolhealthclub.com/refund-cancel' },
]

const consentLinks = [
  { label: 'Healthcare Informed Consent', href: 'https://protocolhealthclub.com/healthcare-informed-consent' },
  { label: 'Coaching Consent', href: 'https://protocolhealthclub.com/coaching-consent' },
  { label: 'Telemedicine/Telehealth Consultation', href: 'https://protocolhealthclub.com/telemedicine-telehealth-consultation' },
  { label: 'HIPAA Authorization', href: 'https://protocolhealthclub.com/hipaa-authorization' },
]

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="relative aspect-[382/69] w-full max-w-[280px] sm:max-w-[320px] md:mx-0 md:max-w-[300px]">
            <img src={footerLogo1} alt="" className="absolute left-0 top-0 h-full" />
            <img src={footerLogo2} alt="Protocol" className="absolute left-[25.65%] top-0 h-full" />
            <img src={footerLogo3} alt="" className="absolute left-[56.54%] top-0 h-[76.81%]" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 font-sans text-xs font-bold text-white/60 md:justify-start md:text-sm">
            <span>Personalized health.</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Elevated Standards.</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Real Results.</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 md:hidden" />

        <div className="flex w-full items-start gap-10 sm:w-auto md:gap-16">
          <div className="hidden w-px self-stretch bg-white/10 md:block" />

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 text-xs text-white/80 sm:w-auto sm:flex sm:gap-16 md:text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-white/40">Legal</p>
              {legalLinks.map((l) => (
                <a key={l.label} href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-white/40">Consent Forms</p>
              {consentLinks.map((l) => (
                <a key={l.label} href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1536px] border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[1px] text-white/80 md:text-left">
        © Copyright Protocol Health 2026, All Rights Reserved
      </div>
    </footer>
  )
}
