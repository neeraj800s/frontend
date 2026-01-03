// Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Menu, X, LogOut } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AuthModal from '../auth/AuthModal'
import testphoto from "../../../public/images/logo.jpg"


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const {
    user,
    logout,
    isAuthenticated,
    hasEnrollments,
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal
  } = useAuth()
  const location = useLocation()


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>


      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        initialTab="login"
      />



      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-md'
          }`}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span><img className='w-10 h-10 rounded-xl' src={testphoto}/></span>
              </div>
              <span className="lg:text-3xl md:text-2xl sm:text-xl  text-lg  font-bold text-[#163aeb]">
                MentriQ
              </span>
              <span className="lg:text-3xl md:text-2xl sm:text-xl  text-lg font-semibold text-[#ff853f]">Technologies</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`py-2 px-3 text-lg font-medium rounded-lg transition-all duration-300 ${location.pathname === '/'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className={`py-2 px-3 text-lg font-medium rounded-lg transition-all duration-300 ${location.pathname === '/courses'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
              >
                Courses
              </Link>
              {user?.role !== 'admin' && (
                <Link
                  to="/training"
                  className={`py-2 px-3 text-lg font-medium rounded-lg transition-all duration-300 ${location.pathname === '/training'
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  Internship
                </Link>
              )}

              <Link
                to="/about"
                className="py-2 px-3 text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="py-2 px-3 text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300"
              >
                Contact
              </Link>
              {isAuthenticated && hasEnrollments && user?.role !== 'admin' && (
                <Link
                  to="/my-enrollments"
                  className="py-2 px-3 text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"
                >
                  My Courses
                </Link>
              )}


            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    {user?.name?.split(' ')[0]}
                  </span>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 text-gray-700 hover:text-red-600 px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-300"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={openAuthModal}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Login
                </button>
              )}

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden  rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/95 backdrop-blur-md  border-t border-gray-200"
              >
                <div className="px-4 pt-2 pb-4 space-y-2">
                  <Link
                    to="/"
                    className={`block px-3 py-2 rounded-lg text-lg font-medium ${location.pathname === '/' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50'
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/courses"
                    className={`block px-3 py-2 rounded-lg text-lg font-medium ${location.pathname === '/courses' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50'
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/about"
                    className="block px-3 py-2 rounded-lg text-lg font-medium text-gray-700 hover:bg-indigo-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>
                  {user?.role !== 'admin' && (
                    <Link
                      to="/training"
                      className={`block px-3 py-2 rounded-lg text-lg font-medium ${location.pathname === '/training' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50'
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      Internship
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-lg text-lg font-medium text-gray-700 hover:bg-indigo-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact
                  </Link>
                  {isAuthenticated && hasEnrollments && user?.role !== 'admin' && (
                    <Link
                      to="/my-enrollments"
                      className="block px-3 py-2 text-lg font-medium text-gray-700 hover:bg-indigo-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      My Courses
                    </Link>
                  )}

                  {isAuthenticated ? (
                    <button
                      onClick={() => {
                        logout()
                        setMobileOpen(false)
                      }}
                      className="w-full flex items-center space-x-3 px-3 py-2 text-lg font-medium text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <LogOut size={20} />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        openAuthModal()
                        setMobileOpen(false)
                      }}
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl mt-2"
                    >
                      Login / Register
                    </button>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
