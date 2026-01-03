import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const EnrollmentSuccessPage = ({ course }) => {
  const navigate = useNavigate();

  if (!course) {
    navigate("/courses");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center">
        <CheckCircle className="mx-auto w-20 h-20 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Enrollment Confirmed!</h1>
        <p className="text-gray-600 mb-8">You have successfully enrolled in the course below:</p>

        <div className="text-left mb-8">
          <p><strong>Course:</strong> {course.title}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Level:</strong> {course.level}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};


export default EnrollmentSuccessPage;
