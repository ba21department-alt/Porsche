import { ImageWithFallback } from './figma/ImageWithFallback'
import { ChevronRight } from 'lucide-react'

const models = [
  {
    name: '911',
    fullName: '911 Carrera S',
    image: 'https://images.unsplash.com/photo-1609005497355-48df8cb22c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwOTExJTIwbmlnaHQlMjBjaXR5JTIwZHluYW1pYyUyMGRyaXZpbmd8ZW58MXx8fHwxNzU1Njg5NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sports Car',
    specs: ['420 HP', '3.0s 0-60', '191 mph'],
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    name: 'Taycan',
    fullName: 'Taycan Turbo S',
    image: 'https://images.unsplash.com/photo-1709767225723-33c93bd5c4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwdGF5Y2FuJTIwZWxlY3RyaWMlMjBzaG93cm9vbSUyMHN0dWRpb3xlbnwxfHx8fDE3NTU2ODk2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Electric',
    specs: ['750 HP', '2.6s 0-60', '301 mi range'],
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    name: 'Cayenne',
    fullName: 'Cayenne Turbo',
    image: 'https://images.unsplash.com/photo-1547025603-ef800f02690e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwcmFjaW5nJTIwdHJhY2slMjBtb3Rpb24lMjBzcGVlZHxlbnwxfHx8fDE3NTU2ODk2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'SUV',
    specs: ['541 HP', '3.7s 0-60', '177 mph'],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    name: 'Macan',
    fullName: 'Macan GTS',
    image: 'https://images.unsplash.com/photo-1748500714823-db9a9b90fa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwY29uY2VwdCUyMGNhciUyMGZ1dHVyaXN0aWMlMjBkZXNpZ258ZW58MXx8fHwxNzU1Njg5NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Crossover',
    specs: ['434 HP', '4.7s 0-60', '169 mph'],
    gradient: 'from-purple-500/20 to-pink-500/20'
  }
]

export default function ModelsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Ambient lighting effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/15 rounded-3xl px-12 py-6 mb-8">
            <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase tracking-wider">
              Our Models
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover the complete Porsche lineup. From iconic sports cars to innovative electric vehicles.
          </p>
        </div>
        
        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <div
              key={model.name}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Model Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={model.image}
                  alt={model.fullName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-full px-4 py-2">
                    <span className="text-white text-sm font-medium uppercase tracking-wide">
                      {model.category}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
                    {model.name}
                  </h3>
                  <p className="text-white/70 text-lg">
                    {model.fullName}
                  </p>
                </div>
                
                {/* Specs */}
                <div className="space-y-2 mb-6">
                  {model.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${specIndex * 0.2}s` }}></div>
                      <span className="text-white/80 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <button className="flex items-center justify-between w-full text-white group/btn hover:text-blue-400 transition-colors duration-300">
                  <span className="font-medium">Explore Model</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${model.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}