import { Button } from './ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced liquid gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900/80 to-black">
        {/* Multi-layered animated liquid waves */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Primary wave layer */}
            <div className="absolute top-1/2 left-0 w-96 h-32 bg-red-500/40 rounded-full blur-2xl animate-pulse transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/4 w-80 h-24 bg-orange-500/30 rounded-full blur-2xl animate-pulse delay-300 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-28 bg-red-600/35 rounded-full blur-2xl animate-pulse delay-600 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-88 h-26 bg-orange-600/30 rounded-full blur-2xl animate-pulse delay-900 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-96 h-32 bg-red-500/40 rounded-full blur-2xl animate-pulse delay-1200 transform -translate-y-1/2"></div>
            
            {/* Secondary shimmer layer */}
            <div className="absolute top-1/3 left-1/6 w-64 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-150 transform -translate-y-1/2"></div>
            <div className="absolute bottom-1/3 right-1/6 w-80 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-450 transform translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Flowing gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/15 to-transparent animate-pulse"></div>
        
        {/* Subtle particle effect overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse delay-800"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Enhanced CTA content in premium glass container */}
          <div className="backdrop-blur-xl bg-white/10 border border-red-500/25 rounded-3xl p-16 shadow-2xl hover:shadow-[0_0_80px_rgba(239,68,68,0.4)] transition-all duration-700 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8">
              <Sparkles className="w-8 h-8 text-orange-400/60 animate-pulse" />
            </div>
            <div className="absolute bottom-8 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full backdrop-blur-sm border border-white/20 animate-pulse delay-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 uppercase tracking-wider leading-none">
              Configure the 
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block mt-2">
                Porsche
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">
                of Your Dreams
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every detail, every option, every element crafted to your exact specifications.<br />
              <span className="text-lg text-white/60">Build your perfect Porsche today.</span>
            </p>
            
            {/* Enhanced CTA with multiple effects */}
            <Button className="relative bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border border-white/25 backdrop-blur-sm rounded-full px-16 py-8 text-white text-2xl font-medium transition-all duration-300 hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] hover:scale-110 group overflow-hidden">
              <span className="relative z-10 flex items-center">
                Build Now
                <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Multi-layer button effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-red-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 delay-200"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            
            {/* Additional info below CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Free delivery included</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-sm">Expert consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                <span className="text-sm">Exclusive warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}