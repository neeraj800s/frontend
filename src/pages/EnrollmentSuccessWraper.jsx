import { useLocation } from "react-router-dom"
import EnrollmentSuccessPage from '../pages/EnrollmentSuccessPage'

const EnrollmentSuccessWrapper = () => {
  const location = useLocation()
  const { course } = location.state || {} 

  if (!course) {
    return <p className="text-center mt-20">No course found!</p>
  }

  return <EnrollmentSuccessPage course={course} />
}

export default EnrollmentSuccessWrapper
