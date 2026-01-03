import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MyEnrollmentsPage from "./pages/MyEnrollmentsPage";
// import EnrollmentSuccessPage from './pages/EnrollmentSuccessPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminRoute from './components/auth/AdminRoute';
import AdminLogin from './pages/Admin/AdminLogin';
import Dashboard from './pages/Admin/Dashboard';
import AddCourse from './pages/Admin/AddCourse';
import AllEnrollments from './pages/Admin/AllEnrollments';
import TrainingPage from './pages/TrainingPage';
import TrainingDetailPage from './pages/TrainingDetailPage';
import EnrollmentFormPage from "./pages/EnrollmentFormPage";
import TrainingEnrollmentFormPage from './pages/TrainingEnrollmentFormPage';
import ScrollToTop from './pages/ScrollToTop';

import { useAuth } from './context/AuthContext';

import EnrollmentSuccessWrapper from './pages/EnrollmentSuccessWraper';
// import Test from './pages/Test';



function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/courses" element={<Layout><CoursesPage /></Layout>} />
      <Route path="/courses/:id" element={<Layout><CourseDetailPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/training" element={<Layout><TrainingPage /></Layout>} />
      <Route path="/training/:id" element={<Layout><TrainingDetailPage /></Layout>} />
      {/* <Route path='/test' element={<Layout><Test/></Layout>}/> */}
      <Route path="/enroll/:courseId" element={
        <div className="pt-16">
          <EnrollmentFormPage />
        </div>
      } />
      <Route path="/enrollf/:courseId" element={
        <div className="pt-16">
          <TrainingEnrollmentFormPage/>
        </div>
      } />

      <Route path="/enrollment-success" element={<EnrollmentSuccessWrapper />} />

      <Route
        path="/my-enrollments"
        element={
          isAuthenticated ? (
            <Layout>
              <MyEnrollmentsPage />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </AdminRoute>
        }
      />

      <Route
        path="/admin/add-course"
        element={
          <AdminRoute>
            <Layout>
              <AddCourse />
            </Layout>
          </AdminRoute>
        }
      />

      <Route
        path="/admin/enrollments"
        element={
          <AdminRoute>
            <Layout>
              <AllEnrollments />
            </Layout>
          </AdminRoute>
        }
      />

      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
    </>
  );
}

export default App;
