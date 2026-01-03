import { Link } from 'react-router-dom'
import { Facebook, Twitter,Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-cyan-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className=" mb-9 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <span><img className='w-[100px] h-[60px] rounded-xl' src='../../../public/images/logo.jpg'/></span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">MentriQ Technologies</h3>
              <p className="text-indigo-200">Transforming careers through technology</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-indigo-300 transition-colors">Courses</Link></li>
            <li><Link to="/about" className="hover:text-indigo-300 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-indigo-300 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
          <p className="text-indigo-200 mb-4">Get latest course updates & offers</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-l-xl bg-white/20 backdrop-blur-sm border-0 focus:ring-2 focus:ring-indigo-400 text-white placeholder-indigo-200"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-r-xl hover:shadow-xl transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-8 text-center text-indigo-200">
        <p>&copy; 2025 MentriQ Technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer