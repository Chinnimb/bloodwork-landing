import Hero from './components/Hero'
import NormalNotOptimal from './components/NormalNotOptimal'
import WhatBloodworkShows from './components/WhatBloodworkShows'
import HowBloodworkWorks from './components/HowBloodworkWorks'
import WhyItMatters from './components/WhyItMatters'
import BloodworkJourney from './components/BloodworkJourney'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Hero />
      <NormalNotOptimal />
      <WhatBloodworkShows />
      <HowBloodworkWorks />
      <WhyItMatters />
      <BloodworkJourney />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
