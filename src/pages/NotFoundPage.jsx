import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
          <span className="text-6xl font-bold text-white">404</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
          <span>Go Back Home</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFoundPage