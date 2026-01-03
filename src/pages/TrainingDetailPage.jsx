import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import {
    ArrowLeft,
    Play,
    Award,
    CheckCircle,
    Download
} from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiClient } from "../utils/apiClient"

const TrainingDetailPage = () => {
    const { id } = useParams()

    const { isAuthenticated, checkEnrollments, logout, openAuthModal } = useAuth()

    const navigate = useNavigate();

    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [enrolled, setEnrolled] = useState(false)


    const sampleCourse = {
        _id: id,
        title: "Complete Training Program",
        description: "Master essential skills with our comprehensive training.",
        level: "Intermediate",
        price: 15000,
        duration: "6 months",
        instructor: "Expert Mentor",
        modules: [
            "Introduction",
            "Core Concepts",
            "Advanced Techniques",
            "Project Work",
            "Certification"
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
                        (e) => e.course._id === id
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


    // const handleEnroll = async () => {
    //     if (!isAuthenticated) {
    //         openAuthModal();
    //         return;
    //     }


    //     if (enrolled) {
    //         alert("You are already enrolled in this training!");
    //         return;
    //     }

    //     try {
    //         await apiClient.post("/enrollments", { courseId: id });
    //         setEnrolled(true);
    //         await checkEnrollments();
    //         // Navigate to success page
    //         navigate("/enrollment-success", { state: { course } });
    //     } catch (err) {
    //         console.log(err);
    //         if (err.response?.status === 401) {
    //             alert("You are not authorized. Please login again.");
    //             logout();
    //             window.location.href = "/#auth";
    //         } else {
    //             alert(err.response?.data?.message || "Enrollment failed!");
    //         }
    //     }
    // };

     const handleEnroll = async () => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }

    if (enrolled) {
      alert("You are already enrolled in this course!");
      return;
    }

    // Navigate to Enrollment Form Page instead of direct API
    navigate(`/enrollf/${id}`);
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
        <a href="/training" className="text-indigo-600 hover:underline">Back to Courses</a>
      </div>
    )
  }

  const { title, description, level, duration, instructor, modules = [] } = course

    return (
        <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-indigo-50">
            <section className="max-w-7xl mx-auto p-10">
                <a
                    href="/training"
                    className="flex items-center gap-2 text-indigo-600 font-semibold mb-6"
                >
                    <ArrowLeft size={18} />
                    Back to Training
                </a>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="h-96 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                        <Play className="text-white w-28 h-28" />
                    </div>

                    {/* Info */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{title}</h1>
                        <p className="text-gray-600 mb-6">{description}</p>

                        <div className="flex gap-6 mb-8">
                            {/* Price Hidden */}

                            <div>
                                <p className="font-bold">{duration}</p>
                                <span className="text-sm text-gray-500">Duration</span>
                            </div>
                            <div>
                                <p className="font-bold">{level}</p>
                                <span className="text-sm text-gray-500">Level</span>
                            </div>
                        </div>

                        {/* 🔥 ENROLL BUTTON */}
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
                            Download Training Syllabus
                        </button>
                    </div>
                </div>

                {/* Curriculum */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Training Modules
                    </h2>

                    {/* <div className="grid md:grid-cols-2 gap-6">
                        {modules.length > 0 ? (
                            modules.map((m, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow">
                                    <h4 className="font-bold">{i + 1}. {m}</h4>
                                </div>
                            ))
                        ) : (
                            // Default modules if none provided
                            ["Module 1: Fundamentals", "Module 2: Advanced Topics", "Module 3: Practical Projects"].map((m, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow">
                                    <h4 className="font-bold">{m}</h4>
                                </div>
                            ))
                        )}
                    </div> */}
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
                    <h3 className="text-2xl font-bold">{instructor || "MentriQ Expert"}</h3>
                    <p className="text-gray-600 mt-2">
                        Industry Specialist
                    </p>
                </div>
            </section>
        </div>
    )
}

export default TrainingDetailPage
