import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { Trophy, ChevronRight } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with racing imagery */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1621241757160-f0443b33e900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwcmFjaW5nJTIwdHJhY2slMjBleHBlcmllbmNlfGVufDF8fHx8MTc1NTY4OTAxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Porsche Racing Experience"
          className="w-full h-full object-cover opacity-30"
        />
        
        {/* Frosted glass overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Floating content card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl hover:shadow-[0_0_60px_rgba(239,68,68,0.3)] transition-all duration-500">
            {/* Trophy icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30 mb-8">
              <Trophy className="w-8 h-8 text-red-400" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
              Porsche
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Experience Centers
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Feel the thrill on world-class tracks with Porsche experts. Our Experience Centers offer the ultimate driving adventures, from track sessions to off-road excursions, all designed to unleash your inner racing driver.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-white/90">Professional driving instruction</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-white/90">Track-ready Porsche fleet</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-400"></div>
                <span className="text-white/90">Exclusive member benefits</span>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border border-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:scale-105">
              Book Your Experience
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}