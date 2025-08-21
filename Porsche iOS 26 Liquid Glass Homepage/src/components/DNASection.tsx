import { Palette, Lightbulb, Wrench, Crown } from 'lucide-react'

const dnaItems = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Timeless aesthetics that blend heritage with innovation'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering technology that pushes boundaries'
  },
  {
    icon: Wrench,
    title: 'Craftsmanship',
    description: 'Meticulous attention to every detail and component'
  },
  {
    icon: Crown,
    title: 'Legacy',
    description: '75+ years of racing excellence and automotive mastery'
  }
]

export default function DNASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        {/* Prism light effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/30 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-wider">
              Porsche 
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent ml-4">
                DNA
              </span>
            </h2>
          </div>
        </div>
        
        {/* DNA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dnaItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Prism edge effects */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-t-3xl"></div>
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-white/20 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Floating glass accent */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}