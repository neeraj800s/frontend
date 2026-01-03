import { useState } from "react";
import { apiClient as api } from "../../utils/apiClient";
import { motion } from "framer-motion";

const AddCourse = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    discount: 0,
    level: "Beginner",
    duration: "12 weeks",
    mode: "Online",
    instructor: "MentriQ Team",
    category: "Course",
    modules: []
  });

  const [moduleInput, setModuleInput] = useState("");

  const addModule = () => {
    if (moduleInput.trim()) {
      setForm({ ...form, modules: [...form.modules, moduleInput] });
      setModuleInput("");
    }
  };

  const removeModule = (index) => {
    const newModules = form.modules.filter((_, i) => i !== index);
    setForm({ ...form, modules: newModules });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await api.post("/courses", form);
      alert("Course added successfully");
      setForm({
        title: "",
        slug: "",
        description: "",
        price: 0,
        discount: 0,
        level: "Beginner",
        duration: "12 weeks",
        mode: "Online",
        instructor: "MentriQ Team",
        instructor: "MentriQ Team",
        category: "Course",
        modules: []
      });
      setModuleInput("");
    } catch (error) {
      console.error("Add Course Error:", error);
      alert(error.response?.data?.message || "Failed to add course");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10"
      >
        <h1 className="text-3xl font-bold mb-8">Add New Course</h1>

        <form onSubmit={submitHandler} className="space-y-5">
          <input name="title" placeholder="Course Title" value={form.title} onChange={handleChange} className="input" />
          <input name="slug" placeholder="Slug (e.g. python-mastery)" value={form.slug} onChange={handleChange} className="input" />
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input" />

          <div className="grid grid-cols-2 gap-4">
            <select name="category" value={form.category} onChange={handleChange} className="input">
              <option value="Course">Course</option>
              <option value="Training">Training</option>
            </select>
            <select name="level" value={form.level} onChange={handleChange} className="input">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <select name="mode" value={form.mode} onChange={handleChange} className="input">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <input name="duration" placeholder="Duration (e.g. 12 weeks)" value={form.duration} onChange={handleChange} className="input" />
          <input name="instructor" placeholder="Instructor Name" value={form.instructor} onChange={handleChange} className="input" />

          <div className="space-y-2">
            <label className="font-bold text-gray-700">Curriculum Modules</label>
            <div className="flex gap-2">
              <input
                placeholder="Add Module (e.g. React Basics)"
                value={moduleInput}
                onChange={(e) => setModuleInput(e.target.value)}
                className="input flex-1"
              />
              <button type="button" onClick={addModule} className="bg-green-500 text-white px-4 rounded-xl font-bold">Add</button>
            </div>
            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {form.modules.map((m, i) => (
                <li key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border">
                  <span className="text-gray-800">{i + 1}. {m}</span>
                  <button type="button" onClick={() => removeModule(i)} className="text-red-500 font-bold hover:text-red-700">x</button>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">Add topics that will be covered in this course.</p>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all">
            Add Course
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default AddCourse;
