import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiClient as api } from "../../utils/apiClient";
import { motion } from "framer-motion";
import { PlusCircle, Trash2 } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Course');

  const [newCourse, setNewCourse] = useState({
    title: "",
    slug: "",
    description: "",
    category: "",
    level: "",
    price: 0,
    duration: "",
    mode: "Online",
    discount: 0,
    instructor: "MentriQ Team",
    modules: []
  });

  const [moduleInput, setModuleInput] = useState("");

  const addModule = () => {
    if (moduleInput.trim()) {
      setNewCourse({ ...newCourse, modules: [...newCourse.modules, moduleInput] });
      setModuleInput("");
    }
  };

  const removeModule = (index) => {
    const newModules = newCourse.modules.filter((_, i) => i !== index);
    setNewCourse({ ...newCourse, modules: newModules });
  };

  const fetchData = async () => {
    try {
      const coursesRes = await api.get("/courses");
      setCourses(coursesRes.data);

      const enrollRes = await api.get("/enrollments");
      setEnrollments(enrollRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.role === "admin") fetchData();
  }, [user]);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await api.post("/courses", newCourse);
      alert("Course added!");
      setNewCourse({
        title: "", slug: "", description: "", category: "", level: "", price: 0, duration: "", mode: "Online", discount: 0, instructor: "MentriQ Team", modules: []
      });
      setModuleInput("");
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Failed to add course: " + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;
    try {
      await api.delete(`/courses/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Failed to delete course");
    }
  };

  if (loading) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-indigo-700 text-center"
      >
        Admin Dashboard
      </motion.h1>

      {/* Add New Course */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-xl rounded-2xl p-6 mb-10"
      >
        <h2 className="text-xl font-bold mb-4 text-indigo-600">Add New Course</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleAddCourse}>
          <input type="text" placeholder="Title" value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} className="p-3 border rounded-xl" required />
          <input type="text" placeholder="Slug" value={newCourse.slug} onChange={e => setNewCourse({ ...newCourse, slug: e.target.value })} className="p-3 border rounded-xl" required />
          <select value={newCourse.category} onChange={e => setNewCourse({ ...newCourse, category: e.target.value })} className="p-3 border rounded-xl" required>
            <option value="" disabled>Select Category</option>
            <option value="Course">Course</option>
            <option value="Training">Training</option>
          </select>
          <textarea placeholder="Description" value={newCourse.description} onChange={e => setNewCourse({ ...newCourse, description: e.target.value })} className="p-3 border rounded-xl md:col-span-2 h-24" required />

          <select value={newCourse.level} onChange={e => setNewCourse({ ...newCourse, level: e.target.value })} className="p-3 border rounded-xl">
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <input type="text" placeholder="Duration" value={newCourse.duration} onChange={e => setNewCourse({ ...newCourse, duration: e.target.value })} className="p-3 border rounded-xl" required />

          <select value={newCourse.mode} onChange={e => setNewCourse({ ...newCourse, mode: e.target.value })} className="p-3 border rounded-xl">
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <input type="text" placeholder="Instructor" value={newCourse.instructor} onChange={e => setNewCourse({ ...newCourse, instructor: e.target.value })} className="p-3 border rounded-xl" />

          {/* Module Input */}
          <div className="md:col-span-2 space-y-2">
            <div className="flex gap-2">
              <input
                placeholder="Add Module (e.g. React Basics)"
                value={moduleInput}
                onChange={(e) => setModuleInput(e.target.value)}
                className="p-3 border rounded-xl flex-1"
              />
              <button type="button" onClick={addModule} className="bg-green-500 text-white px-4 rounded-xl">Add</button>
            </div>
            <ul className="space-y-1">
              {newCourse.modules.map((m, i) => (
                <li key={i} className="flex justify-between bg-gray-50 p-2 rounded text-sm">
                  {i + 1}. {m}
                  <button type="button" onClick={() => removeModule(i)} className="text-red-500">x</button>
                </li>
              ))}
            </ul>
          </div>


          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2">Course Thumbnail</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                onChange={async (e) => {
                  const file = e.target.files[0]
                  if (!file) return

                  const formData = new FormData()
                  formData.append('image', file)

                  try {
                    const { data } = await api.post('/upload', formData, {
                      headers: { 'Content-Type': 'multipart/form-data' }
                    })
                    // Fix: VITE_API_BASE_URL includes /api, but uploads are at root /uploads
                    const serverUrl = import.meta.env.VITE_API_BASE_URL.replace('/api', '')
                    setNewCourse({ ...newCourse, thumbnailUrl: serverUrl + data })
                    alert("Image Uploaded Successfully!")
                  } catch (err) {
                    console.error(err)
                    alert("Image upload failed")
                  }
                }}
                className="p-2 border rounded-xl"
              />
              {newCourse.thumbnailUrl && <img src={newCourse.thumbnailUrl} alt="Preview" className="h-16 w-16 object-cover rounded shadow" />}
            </div>
          </div>

          <button type="submit" className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-all">
            <PlusCircle className="inline-block mr-2" /> Add Course
          </button>
        </form>
      </motion.div>

      {/* Courses Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-xl rounded-2xl p-6 mb-10 overflow-x-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-indigo-600">Manage Programs</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('Course')}
              className={`px-4 py-1 rounded-full text-sm font-bold ${filter === 'Course' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Courses
            </button>
            <button
              onClick={() => setFilter('Training')}
              className={`px-4 py-1 rounded-full text-sm font-bold ${filter === 'Training' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Training
            </button>
          </div>
        </div>

        <table className="min-w-full">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.filter(c => (filter === 'All' || c.category === filter || (filter === 'Course' && c.category !== 'Training'))).map(course => (
              <tr key={course._id} className="border-b hover:bg-indigo-50">
                <td className="py-2 px-4">{course.title}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded text-xs ${course.category === 'Training' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                    {course.category || 'Course'}
                  </span>
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button onClick={() => handleDelete(course._id)} className="text-red-500 hover:text-red-700"><Trash2 /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Enrollments Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-xl rounded-2xl p-6 overflow-x-auto"
      >
        <h2 className="text-xl font-bold mb-4 text-indigo-600">Enrollments</h2>
        <table className="min-w-full">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="py-2 px-4">Student</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Course</th>
              <th className="py-2 px-4">Price Paid</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enroll => (
              <tr key={enroll._id} className="border-b hover:bg-indigo-50">
                <td className="py-2 px-4">{enroll.user?.name || "Unknown User"}</td>
                <td className="py-2 px-4">{enroll.user?.email || "No Email"}</td>
                <td className="py-2 px-4">
                  {enroll.course ? (
                    enroll.course.title
                  ) : (
                    <span className="text-red-500 italic">Course Deleted</span>
                  )}
                </td>
                <td className="py-2 px-4">₹{enroll.pricePaid}</td>
                <td className="py-2 px-4">{new Date(enroll.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default Dashboard;
