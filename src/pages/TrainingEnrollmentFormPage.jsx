import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { apiClient as api } from '../utils/apiClient'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

const TrainingEnrollmentFormPage = () => {
    const { courseId } = useParams()
    const { user, checkEnrollments } = useAuth()
    const navigate = useNavigate()

    const [course, setCourse] = useState(null)
    const [contact, setContact] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data } = await api.get(`/courses/${courseId}`)
                setCourse(data)
            } catch (err) {
                alert("Failed to load course")
                navigate('/courses')
            } finally {
                setLoading(false)
            }
        }
        fetchCourse()
    }, [courseId, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('/enrollments', {
                courseId,
                contact
            })
            await checkEnrollments()
            navigate('/enrollment-success', { state: { course } })
        } catch (err) {
            alert(err.response?.data?.message || "Enrollment failed")
        }
    }

    if (loading) return <div className="p-10 text-center">Loading...</div>
    if (!course) return null

    return (
        <section className="min-h-screen pt-20 pb-10 px-4 bg-gray-50 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-xl max-w-lg w-full"
            >
                <h1 className="text-2xl font-bold mb-6 text-indigo-700">Enrollment Form</h1>

                <div className="mb-6 p-4 bg-indigo-50 rounded-xl">
                    <h2 className="font-bold text-gray-800">{course.title}</h2>
                    <p className="text-gray-600 text-sm">{course.duration} • {course.level}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                        <input value={user?.name || ''} disabled className="w-full p-3 bg-gray-100 rounded-xl border" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                        <input value={user?.email || ''} disabled className="w-full p-3 bg-gray-100 rounded-xl border" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Contact Number<span className="text-red-500">*</span></label>
                        <input
                            required
                            placeholder="Enter your mobile number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg mt-4">
                        Confirm Enrollment
                    </button>
                </form>

            </motion.div>
        </section>
    )
}

export default TrainingEnrollmentFormPage;
