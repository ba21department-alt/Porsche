import { ImageWithFallback } from './figma/ImageWithFallback'
import { ChevronRight, Calendar, Zap, Trophy } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'Porsche Mission X Concept Unveiled',
    summary: 'The future of hypercar design showcases next-generation electric propulsion and aerodynamics.',
    image: 'https://images.unsplash.com/photo-1748500714823-db9a9b90fa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwY29uY2VwdCUyMGNhciUyMGZ1dHVyaXN0aWMlMjBkZXNpZ258ZW58MXx8fHwxNzU1Njg5NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Innovation',
    date: 'Dec 15, 2024',
    icon: Zap,
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    title: 'Le Mans Victory: Porsche 963 Dominates',
    summary: 'Historic triumph at the 24 Hours of Le Mans marks Porsche\'s return to endurance racing glory.',
    image: 'https://images.unsplash.com/photo-1663133542718-7ae2d430563f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwbW90b3JzcG9ydCUyMHZpY3RvcnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTU2ODk2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Motorsport',
    date: 'Dec 10, 2024',
    icon: Trophy,
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    id: 3,
    title: 'Sustainable Manufacturing Initiative',
    summary: 'Porsche commits to carbon-neutral production across all facilities by 2030.',
    image: 'https://images.unsplash.com/photo-1745196068411-a395e0b2c5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwbHV4dXJ5JTIwaW50ZXJpb3IlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc1NTY4OTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sustainability',
    date: 'Dec 8, 2024',
    icon: Calendar,
    gradient: 'from-green-500/20 to-emerald-500/20'
  }
]

export default function NewsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Dynamic lighting effects */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/15 rounded-3xl px-12 py-6 mb-8">
            <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase tracking-wider">
              Porsche Today
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Latest innovations, motorsport victories, and breakthrough technologies shaping the future of automotive excellence.
          </p>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <article
                key={item.id}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* News Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/20 border border-white/30 rounded-full px-4 py-2">
                      <IconComponent className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Date */}
                  <div className="absolute top-4 right-4">
                    <div className="backdrop-blur-sm bg-black/40 border border-white/20 rounded-full px-3 py-1">
                      <span className="text-white/90 text-xs">{item.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {item.summary}
                  </p>
                  
                  {/* Read More Link */}
                  <button className="flex items-center text-white group/btn hover:text-blue-400 transition-colors duration-300">
                    <span className="font-medium mr-2">Read More</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                
                {/* Prism edge effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-t-3xl"></div>
                </div>
              </article>
            )
          })}
        </div>
        
        {/* View All News CTA */}
        <div className="text-center mt-16">
          <button className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 group">
            <span className="mr-2">View All News</span>
            <ChevronRight className="inline w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}