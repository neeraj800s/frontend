import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen } from 'lucide-react'
import CourseCard from '../components/courses/CourseCard'
import { apiClient } from '../utils/apiClient'

const TrainingPage = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await apiClient.get('/courses')
                const trainingCourses = response.data.filter(c => c.category === 'Training')
                setCourses(trainingCourses)
            } catch (error) {
                console.log('Error fetching training courses:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen pt-0 bg-gradient-to-br from-slate-50 to-indigo-50">
            {/* Hero Section */}
            {/* <section className="py-24 text-center text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative max-w-6xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent drop-shadow-2xl"
                    >
                        Professional Training
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto mb-12"
                    >
                        Master the most in-demand skills with our expert-led training programs
                    </motion.p>
                </div>
            </section> */}
            {/* Training Hero Section */}
<section className="relative py-32 text-white overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]">
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/25 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-4 text-center">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl"
    >
      Professional Training Programs
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-2xl max-w-4xl mx-auto mb-10 text-gray-300 leading-relaxed"
    >
      Learn industry-relevant skills through expert-led training designed to help you
      grow faster, work smarter, and stay ahead in today’s competitive tech landscape.
    </motion.p>

    {/* Highlights */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-6 text-gray-200 text-base md:text-lg"
    >
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        🚀 Live Expert Sessions
      </span>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        🧠 Practical Hands-on Training
      </span>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        🎯 Career-Focused Curriculum
      </span>
    </motion.div>

  </div>
</section>


            {/* Search + Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-20">
                    {/* Search */}
                    <div className="relative flex-1 max-w-2xl">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search training programs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-16 pr-6 py-5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-3xl shadow-xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-300 transition-all duration-500 text-lg"
                        />
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-8 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-200">
                        <div className="flex items-center space-x-3 text-indigo-600">
                            <BookOpen className="w-10 h-10" />
                            <div>
                                <div className="text-3xl font-bold">{filteredCourses.length}</div>
                                <div className="text-sm text-gray-600">Programs</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="animate-pulse bg-white rounded-3xl p-8 shadow-xl h-96"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course._id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CourseCard course={course} baseUrl="/training" />
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* No courses */}
                {filteredCourses.length === 0 && !loading && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-32 col-span-full"
                    >
                        <BookOpen className="w-32 h-32 text-gray-300 mx-auto mb-8" />
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">No training found</h3>
                        <p className="text-xl text-gray-600 mb-8">Try different search term</p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300"
                        >
                            Clear Search
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default TrainingPage
