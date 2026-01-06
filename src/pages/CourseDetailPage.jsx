import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import {
  ArrowLeft,
  Play,
  Award,
  CheckCircle,
  Download
} from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiClient } from "../utils/apiClient"

const CourseDetailPage = () => {
  const { id } = useParams()

  const { isAuthenticated, checkEnrollments, logout, openAuthModal } = useAuth()
  const navigate = useNavigate();

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolled, setEnrolled] = useState(false)



  const sampleCourse = {
    _id: id,
    title: "Complete React Developer Bootcamp",
    description:
      "Master React, Next.js, Tailwind CSS, Redux and build production-ready web applications.",
    level: "Intermediate",
    price: 4999,
    duration: "12 weeks",
    instructor: "Rahul Sharma",
    modules: [
      "React Fundamentals",
      "Advanced Hooks",
      "Redux & Context",
      "Next.js",
      "Tailwind CSS",
      "Deployment"
    ]
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get(`/courses/${id}`)
        setCourse(res.data)

        if (isAuthenticated) {
          const enrollRes = await apiClient.get("/enrollments/my")
          const isAlreadyEnrolled = enrollRes.data.some(
            (e) => e.course && e.course._id === id
          )
          setEnrolled(isAlreadyEnrolled)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id, isAuthenticated])



  const handleEnroll = async () => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }

    if (enrolled) {
      alert("You are already enrolled in this course!");
      return;
    }

    navigate(`/enroll/${id}`);
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-16 w-16 border-b-2 border-indigo-600 rounded-full"></div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <a href="/courses" className="text-indigo-600 hover:underline">Back to Courses</a>
      </div>
    )
  }

  const { title, description, level, duration, instructor, modules = [] } = course

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-indigo-50">
      <section className="max-w-7xl mx-auto p-10">
        <a
          href="/courses"
          className="flex items-center gap-2 text-indigo-600 font-semibold mb-6"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </a>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="h-96 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center">
            <Play className="text-white w-28 h-28" />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="flex gap-6 mb-8">

              <div>
                <p className="font-bold">{duration}</p>
                <span className="text-sm text-gray-500">Duration</span>
              </div>
              <div>
                <p className="font-bold">{level}</p>
                <span className="text-sm text-gray-500">Level</span>
              </div>
            </div>

            <button
              onClick={handleEnroll}
              disabled={enrolled}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${enrolled
                ? "bg-emerald-500 text-white"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
            >
              {enrolled ? (
                <>
                  <CheckCircle />
                  Enrolled
                </>
              ) : (
                <>
                  <Award />
                  Enroll Now
                </>
              )}
            </button>

            <button className="mt-4 w-full py-4 border rounded-xl flex items-center justify-center gap-2">
              <Download />
              Download Syllabus
            </button>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Course Curriculum
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((m, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow"
              >
                <h4 className="font-bold">
                  {i + 1}. {m}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold">{instructor}</h3>
          <p className="text-gray-600 mt-2">
            2+ years  Experience
          </p>
        </div>
      </section>
    </div>
  )
}

export default CourseDetailPage
