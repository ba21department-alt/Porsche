import { Search, User, Menu } from 'lucide-react'
import { Button } from './ui/button'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-black/30 border border-white/15 rounded-2xl px-8 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Porsche Crest Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                {/* Porsche Crest Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-xs">P</span>
                </div>
                <div className="text-white text-2xl font-bold tracking-wider uppercase">
                  Porsche
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {['Models', 'Electric', 'Experience', 'Configure', 'Dealers', 'Motorsport', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] uppercase text-sm tracking-wide font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:bg-white/10 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-3 text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:bg-white/10 rounded-full">
                <User className="w-5 h-5" />
              </button>
              <Button className="bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-500 hover:to-cyan-500 border border-white/25 backdrop-blur-sm rounded-full px-8 py-3 text-white font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Build Your Porsche</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <button className="lg:hidden p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}