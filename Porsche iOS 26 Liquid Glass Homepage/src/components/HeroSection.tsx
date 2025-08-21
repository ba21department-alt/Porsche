import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Hero Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609005497355-48df8cb22c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwOTExJTIwbmlnaHQlMjBjaXR5JTIwZHluYW1pYyUyMGRyaXZpbmd8ZW58MXx8fHwxNzU1Njg5NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Porsche 911 Dynamic Driving"
          className="w-full h-full object-cover"
        />
        
        {/* Liquid Glass Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-red-500/10"></div>
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Hero Content */}
        <div className="mb-16">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 uppercase tracking-wider leading-none">
            Porsche.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
              Reimagined
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">for the Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Luxury engineering meets innovation,<br />
            performance without compromise.
          </p>
          
          {/* CTA Buttons with Liquid Ripple Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="relative bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-500 hover:to-cyan-500 border border-white/25 backdrop-blur-sm rounded-full px-10 py-5 text-white text-lg font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:scale-105 group overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore Models
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Liquid ripple effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            
            <Button variant="outline" className="relative border-2 border-white/40 bg-white/10 backdrop-blur-sm rounded-full px-10 py-5 text-white text-lg font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 group overflow-hidden">
              <span className="relative z-10">Build Your Own</span>
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
            </Button>
          </div>
        </div>
        
        {/* Floating Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "0-60 MPH", value: "2.6s", accent: "from-blue-400 to-cyan-400" },
            { label: "TOP SPEED", value: "200+ mph", accent: "from-red-400 to-orange-400" },
            { label: "ELECTRIC RANGE", value: "301 mi", accent: "from-green-400 to-emerald-400" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}