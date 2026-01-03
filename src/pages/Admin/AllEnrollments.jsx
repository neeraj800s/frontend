import { useEffect, useState } from "react";
import { apiClient as api } from "../../utils/apiClient";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

const AllEnrollment = () => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({ pricePaid: "", totalFee: "" });

  const handleEditClick = (enroll) => {
    setEditingId(enroll._id);
    setEditFormData({
      pricePaid: enroll.pricePaid || 0,
      totalFee: enroll.totalFee || enroll.course?.price || 0
    });
  };

  const handleSavePrice = async (id) => {
    try {
      const res = await api.put(`/enrollments/${id}`, editFormData);
      setEnrollments(enrollments.map(e => e._id === id ? res.data : e));
      setEditingId(null);
    } catch (error) {
      console.error("Failed to update fees", error);
      alert("Failed to update fees");
    }
  };


  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const res = await api.get("/enrollments");
        setEnrollments(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === "admin") fetchEnrollments();
  }, [user]);

  const filteredEnrollments = enrollments.filter(enroll => {
    if (activeTab === 'All') return true;
    const category = enroll.course?.category || 'Course';
    return category === activeTab;
  });


  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-indigo-700 text-center"
      >
        All Enrollments
      </motion.h1>

      <div className="flex justify-center mb-8 space-x-4">
        {['All', 'Course', 'Training'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-md ${activeTab === tab
              ? 'bg-indigo-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
          >
            {tab}s
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-xl rounded-2xl overflow-hidden">
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Student</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Program</th>
                <th className="py-3 px-6 text-left">Type</th>
                <th className="py-3 px-6 text-left">Total Fees (₹)</th>
                <th className="py-3 px-6 text-left">Paid Fees (₹)</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnrollments.map((enroll) => (
                <tr key={enroll._id} className="border-b hover:bg-indigo-50 transition-all">
                  <td className="py-3 px-6">{enroll.user?.name || 'Unknown'}</td>
                  <td className="py-3 px-6">{enroll.user?.email || 'Unknown'}</td>
                  <td className="py-3 px-6">{enroll.course?.title || 'Unknown'}</td>
                  <td className="py-3 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${enroll.course?.category === 'Training'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-emerald-100 text-emerald-700'
                      }`}>
                      {enroll.course?.category || 'Course'}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    {editingId === enroll._id ? (
                      <input
                        type="number"
                        value={editFormData.totalFee}
                        onChange={(e) => setEditFormData({ ...editFormData, totalFee: e.target.value })}
                        className="w-24 p-1 border rounded bg-yellow-50"
                      />
                    ) : (
                      `₹${enroll.totalFee || enroll.course?.price || 0}`
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editingId === enroll._id ? (
                      <input
                        type="number"
                        value={editFormData.pricePaid}
                        onChange={(e) => setEditFormData({ ...editFormData, pricePaid: e.target.value })}
                        className="w-24 p-1 border rounded bg-green-50"
                      />
                    ) : (
                      `₹${enroll.pricePaid || 0}`
                    )}
                  </td>
                  <td className="py-3 px-6">{new Date(enroll.createdAt).toLocaleDateString()}</td>
                  <td className="py-3 px-6 text-center">
                    {editingId === enroll._id ? (
                      <div className="flex gap-2 justify-center">
                        <button onClick={() => handleSavePrice(enroll._id)} className="text-green-600 font-bold hover:underline">Save</button>
                        <button onClick={() => setEditingId(null)} className="text-red-500 font-bold hover:underline">Cancel</button>
                      </div>
                    ) : (
                      <button onClick={() => handleEditClick(enroll)} className="text-indigo-600 hover:text-indigo-800 text-sm">Edit Fees</button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredEnrollments.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-500">No enrollments found for this category.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

    </section>
  );
};

export default AllEnrollment;
