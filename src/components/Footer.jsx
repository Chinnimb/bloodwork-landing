import footerLogo1 from '../assets/figma/footer-logo-part1.svg'
import footerLogo2 from '../assets/figma/footer-logo-part2.svg'
import footerLogo3 from '../assets/figma/footer-logo-part3.svg'

const legalLinks = [
  { label: 'Terms Of Use', href: 'https://protocolhealthclub.com/terms-of-service' },
  { label: 'Privacy Policy', href: 'https://protocolhealthclub.com/privacy-policy' },
  { label: 'Refund Policy', href: 'https://protocolhealthclub.com/refund-cancel' },
]

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-6">
        <div className="relative aspect-[382/69] w-full max-w-[280px]">
          <img src={footerLogo1} alt="" className="absolute left-0 top-0 h-full" />
          <img src={footerLogo2} alt="Protocol" className="absolute left-[25.65%] top-0 h-full" />
          <img src={footerLogo3} alt="" className="absolute left-[56.54%] top-0 h-[76.81%]" />
        </div>

        <div className="flex items-center gap-6 text-xs text-white/80">
          {legalLinks.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1536px] border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[1px] text-white/60">
        © Copyright Protocol Health 2026, All Rights Reserved
      </div>
    </footer>
  )
}
