import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen } from 'lucide-react'
import CourseCard from '../components/courses/CourseCard'
import { apiClient } from '../utils/apiClient'
import { useNavigate } from 'react-router-dom'

const CoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const sampleCourses = [
    {
      _id: '1',
      title: 'Complete React Developer Bootcamp',
      description: 'Master React, Next.js, Tailwind CSS & build production apps',
      level: 'Intermediate',
      price: 4999,
      duration: '12 weeks'
    },
    {
      _id: '2',
      title: 'Java Full Stack Developer',
      description: 'Java fundamentals to Spring Boot microservices',
      level: 'Advanced',
      price: 6999,
      duration: '16 weeks'
    },
    {
      _id: '3',
      title: 'Data Structures & Algorithms',
      description: 'Crack FAANG interviews with 200+ problems',
      level: 'Intermediate',
      price: 2999,
      duration: '8 weeks'
    },
    {
      _id: '4',
      title: 'MERN Stack Developer',
      description: 'MongoDB, Express, React, Node.js full stack',
      level: 'Intermediate',
      price: 5999,
      duration: '14 weeks'
    },
    {
      _id: '5',
      title: 'Python Django Developer',
      description: 'Build scalable web apps with Python Django',
      level: 'Beginner',
      price: 3999,
      duration: '10 weeks'
    },
    {
      _id: '6',
      title: 'DevOps & Cloud Engineering',
      description: 'AWS, Docker, Kubernetes, CI/CD pipelines',
      level: 'Advanced',
      price: 7999,
      duration: '12 weeks'
    }
  ]

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await apiClient.get('/courses')
        const regularCourses = response.data.filter(c => c.category !== 'Training')
        setCourses(regularCourses)
      } catch (error) {
        console.log(error);
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
            Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12"
          >
            Choose from our premium courses designed by industry experts
          </motion.p>
        </div>
      </section> */}

      {/* Contact Hero Section */}
<section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden pt-0">

  {/* Glow effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-500/10 text-teal-400">
        Get in Touch
      </span>

      <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
        Get World Class Training From 
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
          World Class Trainers
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
        Have questions about our courses, mentorship programs, or career guidance?
        Our team is always ready to help you choose the right path and move forward with confidence.
      </p>

      <div className="mt-8 flex gap-4">
        <button onClick={()=>navigate("/contact")} className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition">
          Contact Now
        </button>
        <button className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 hover:bg-white/5 transition">
          Learn More
        </button>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <img
        src="../../public/images/learning4.jpg"
        alt="Contact"
        className="max-w-md h-[400px] rounded-xl object-cover  w-full drop-shadow-2xl"
      />
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
              placeholder="Search courses..."
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
                <div className="text-sm text-gray-600">Courses</div>
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
                <CourseCard course={course} />
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
            <h3 className="text-4xl font-bold text-gray-800 mb-4">No courses found</h3>
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

export default CoursesPage