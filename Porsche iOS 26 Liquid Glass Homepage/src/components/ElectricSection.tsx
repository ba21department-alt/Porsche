import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { Zap, ChevronRight } from 'lucide-react'

export default function ElectricSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black">
        {/* Electric-themed liquid effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Car Image */}
          <div className="relative">
            {/* Glass pedestal effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-3xl backdrop-blur-sm"></div>
            
            <div className="relative backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition-all duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630716059383-b3203bdda1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwdGF5Y2FuJTIwZWxlY3RyaWMlMjBsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzU1Njg5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Porsche Taycan Electric"
                className="w-full rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              
              {/* Electric glow accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full backdrop-blur-xl border border-blue-500/30 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-cyan-500/20 rounded-full backdrop-blur-xl border border-cyan-500/30 animate-pulse delay-500"></div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              {/* Electric icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
                The Future is
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Electric
                </span>
              </h2>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Unleashing Porsche performance with zero emissions. The Taycan represents a new era of electric luxury, delivering instant torque, whisper-quiet acceleration, and cutting-edge technology that redefines what it means to drive electric.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90">0-60 mph in 2.6 seconds</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                  <span className="text-white/90">Up to 301 miles of range</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-400"></div>
                  <span className="text-white/90">800V fast charging capability</span>
                </div>
              </div>
              
              <Button className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border border-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105">
                Discover Taycan
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}