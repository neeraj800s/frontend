import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ArrowRight } from 'lucide-react'

const CourseCard = ({ course, baseUrl = '/courses' }) => {

  const { isAuthenticated } = useAuth()

  const getLevelColor = (level) => {
    const colors = {
      Beginner: 'bg-green-500',
      Intermediate: 'bg-yellow-500',
      Advanced: 'bg-purple-500'
    }
    return colors[level] || 'bg-gray-500'
  }

  const getCourseImage = () => {
    if (course.thumbnailUrl && course.thumbnailUrl.startsWith("http")) {
      return course.thumbnailUrl
    }

    try {
      return new URL(`/src/assets/courses/${course.slug}.jpg`, import.meta.url).href
    } catch {
      return 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=MentriQ'
    }
  }


  const price = course.price || 0
  const discount = course.discount || 0

  const finalPrice =
    discount > 0 ? price - (price * discount) / 100 : price

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition-all duration-500 h-full cursor-pointer"
    >
      <div className="h-64 relative overflow-hidden">
        <img
          src={getCourseImage()}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x300?text=MentriQ'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        <div className="absolute top-6 left-6 z-10">
          <span className={`px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg ${getLevelColor(course.level)}`}>
            {course.level}
          </span>
        </div>


      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {course.title}
        </h3>

        <div className="flex items-center justify-between mb-6">
          <div>
          </div>


          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {course.duration || '12 weeks'}
          </span>
        </div>

        <Link
          to={`${baseUrl}/${course._id}`}
          className="w-full  text-center bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group/btn"
        >
          <span>View Details</span>
          <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
        </Link>

      </div>
    </motion.div>
  )
}

export default CourseCard
