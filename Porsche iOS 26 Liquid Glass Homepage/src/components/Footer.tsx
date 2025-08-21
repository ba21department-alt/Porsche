import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dark glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <Mail className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider">
                Stay Ahead of the Curve
              </h3>
              <p className="text-white/70 mb-8">
                Exclusive Porsche news, innovation, and driving experiences delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="backdrop-blur-sm bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full px-8 py-3 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="text-white text-3xl font-bold tracking-wider uppercase mb-6">
                Porsche
              </div>
              <p className="text-white/60 mb-8 leading-relaxed">
                Luxury. Performance. Innovation. Experience the future of automotive excellence.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Models Column */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-6">Models</h4>
              <ul className="space-y-3">
                {['911', 'Taycan', 'Cayenne', 'Macan', 'Panamera', 'Boxster', 'Cayman'].map((model) => (
                  <li key={model}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                      {model}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services Column */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-6">Services</h4>
              <ul className="space-y-3">
                {['Configure', 'Financing', 'Dealers', 'Service', 'Parts', 'Experience Centers', 'Motorsport'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-6">Company</h4>
              <ul className="space-y-3">
                {['About', 'Careers', 'News', 'Investors', 'Sustainability', 'Contact', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2025 Porsche AG. All rights reserved.
            </div>
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Legal Notice'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}