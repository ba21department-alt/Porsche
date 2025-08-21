import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ModelsSection from './components/ModelsSection'
import ElectricSection from './components/ElectricSection'
import ExperienceSection from './components/ExperienceSection'
import DNASection from './components/DNASection'
import NewsSection from './components/NewsSection'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Models Showcase */}
      <ModelsSection />
      
      {/* Electric Future */}
      <ElectricSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Porsche DNA */}
      <DNASection />
      
      {/* News & Innovation */}
      <NewsSection />
      
      {/* CTA Banner */}
      <CTABanner />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}