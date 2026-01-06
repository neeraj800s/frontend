import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Users, UserCog,KanbanSquare,Code,ClipboardCheck, BookOpen, Award, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { login, register } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate();

  const stats = [
    { number: '2K+', icon: Users, label: 'Students Trained' },
    { number: '50+', icon: BookOpen, label: 'Live Courses' },
    { number: '98%', icon: Award, label: 'Placement Rate' },
    { number: '60+', icon: Clock, label: 'Expert Trainers' }
  ]

  const mentors = [
    { name: "Litesh Singh", image: "/images/litesh.jpg", description: "5+ Years Experience in Automation and Deveops" ,stats: [
      { value: "5+", label: "Years" },
      { value: "15+", label: "Projects" }
    ]},
    { name: "Jeevan Chauhan", image: "/images/jeevan.jpg", description: "5+ Years Experience in Hybrid Applications Development",stats: [
      { value: "5+", label: "Years" },
      { value: "15+", label: "Projects" }
    ] },
    { name: "Yogesh Singh", image: "/images/yogesh.jpg", description: "2+ Years Experience in EntrepreneurShip and Product Management",stats:[
      { value: "2+", label: "Years" },
      { value: "5+", label: "Projects" }
    ] },
     { name: "Ramswarup Swami", image: "/images/user.png", description: "6+ Years Experience in Cyber Security",stats:[
      { value: "6+", label: "Years" },
      { value: "15+", label: "Projects" }
    ] },
    { name: "Shubham Sharma", image: "/images/subhammentors.jpg", description: "5+ years Experience in Full Stack Development",stats: [
      { value: "5+", label: "Years" },
      { value: "15+", label: "Projects" }
    ] },
    { name: "Shiva Rama Krishna", image: "/images/sivaramakrishna.jpg", description: "8+ Years Experience inn Software Engineering",stats: [
      { value: "8+", label: "Years" },
      { value: "20+", label: "Projects" }
    ] },
    { name: "Lakhan dadhich", image: "/images/lakhan.jpg", description: "3+ Years Experience in Product Management",stats: [
      { value: "3+", label: "Years" },
      { value: "7+", label: "Projects" }
    ] },
    { name: "Venkat Sai", image: "/images/venkatsai.jpg", description: "5+ Years Experience in Oprations Experts",stats: [
      { value: "5+", label: "Years" },
      { value: "15+", label: "Projects" }
    ] },
    { name: "Satya Narayan Pradhan", image: "/images/satyanarayan.jpg", description: "5+ Years Experince in Integration Specialist",stats: [
      { value: "5+", label: "Years" },
      { value: "20+", label: "Projects" }
    ] },
    { name: "Hardik Sharma", image: "/images/hardik.jpg", description: "2+ Years Experience in Cloud Technologies",stats: [
      { value: "2+", label: "Years" },
      { value: "5+", label: "Projects" }
    ] },
    { name: "Prince Jain", image: "/images/princejain.jpg", description: "2+ Years Experience in Cyber Security ",stats: [
      { value: "2+", label: "Years" },
      { value: "5+", label: "Projects" }
    ] },
    { name: "Dharampal Singh", image: "/images/dharampalsingh.jpg", description: "2+ Years Experience in Full Stack Development" ,stats: [
      { value: "2+", label: "Years" },
      { value: "5+", label: "Projects" }
    ]},
    { name: "Pooja Bharia", image: "/images/poojabharia.jpg", description: "1+ Years Experience in Research Engineer",stats: [
      { value: "1+", label: "Years" },
      { value: "5+", label: "Projects" }
    ] },
    { name: "Gaurav Sharma", image: "/images/gauravsharma.jpg", description: "1+ Years Experience in Cloud Technologies" ,stats: [
      { value: "1+", label: "Years" },
      { value: "5+", label: "Projects" }
    ]},
    { name: "Pooja Yadav", image: "/images/poojayadav.jpg", description: "1+ Years Experience in Data Automation" ,stats: [
      { value: "1+", label: "Years" },
      { value: "5+", label: "Projects" }
    ]},
    { name: "Sameer Khan", image: "/images/sameer.jpg", description: "1+ Years Experience in Full Stack Development",stats: [
      { value: "1+", label: "Years" },
      { value: "5+", label: "Projects" }
    ] },
  ];

  const features = [
    {
      title: 'Live Interactive Classes',
      description: 'Real-time learning with industry experts',
      icon: Play,
      color: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Hands-on Projects',
      description: 'Build real-world projects for your portfolio',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Job Ready Certification',
      description: 'Get certified and placement ready',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '24/7 Doubt Support',
      description: 'Get help anytime with our expert mentors',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Industry Relevant Projects',
      description: 'Practice, Learn, and Master Coding Skills',
      icon: Code,
      color: 'from-pink-500 to-green-500'
    },
    {
      title: 'Doubt Clearing Session',
      description: 'Clear Concepts Through Interactive Doubt Sessions',
      icon: KanbanSquare,
      color: 'from-gray-500 to-yellow-500'
    },
    {
      title: 'Industry Experts Led Live Sessions',
      description: 'Industry Experts Conduct Interactive Live Sessions',
      icon: UserCog,
      color: 'from-green-500 to-yellow-300'
    },
    {
      title: 'Assignment Evaluation & Solution',
      description: 'Detailed Assignment Evaluation with Solutions',
      icon:  ClipboardCheck,
      color: 'from-red-500 to-green-800'
    },

  ]
  const testimonials = [
    {
      name: "Rakshit Chasta",
      feedback: "MentriQ helped me build real projects and crack my first job.",
      image: "/images/rakshit.jpeg",
    },
    {
      name: "Bhupendra Skekhawat",
      feedback: "Live classes and mentor support were outstanding.",
      image: "/images/bhupendra.jpg",
    },
    {
      name: "Amit Naruka",
      feedback: "I gained confidence after completing hands-on projects.",
      image: "/images/amit.jpg",
    },
    {
      name: "Aryan Barot",
      feedback: "The course helped me understand core programming concepts in a very practical way.",
      image: "/images/barot.jpg",
    },
    {
      name: "Krishan Rajawat",
      feedback: "Hands-on projects made learning technology much easier and more interesting.",
      image: "/images/krishnarajawat.jpg",
    },

    {
      name: "Bhanu Pratap",
      feedback: "The instructor explained complex topics like backend and databases very clearly.",
      image: "/images/bhanu2.jpeg",
    },
    {
      name: "Disha sharma",
      feedback: "Real-world examples helped me understand how tech is used in the industry.",
      image: "/images/disha3.jpeg",
    },
    {
      name: "Saloni Choudhary",
      feedback: "The learning materials were up to date with current technologies.",
      image: "/images/saloni.jpg",
    },
    {
      name: "Garv Bhatiya",
      feedback: "I learned how frontend and backend work together in real applications.",
      image: "/images/garv.jpg",
    },

    {
      name: "Vaibhav Sharma",
      feedback: "The course structure was well-organized and beginner-friendly.",
      image: "/images/vaibhav.jpg",
    },
    
    {
      name: "Shikhar Singhal",
      feedback: "Mentors helped me improve my logical thinking and coding practices.",
      image: "/images/sikhar.jpg",
    },
    {
      name: "Rohit Sharma",
      feedback: "Industry-level projects gave me a clear idea of real software development.",
      image: "/images/rohit.jpg",
    },
    {
      name: "Krati Khandelwal",
      feedback: "Practical labs helped me gain hands-on experience with tools and frameworks.",
      image: "/images/krati.jpg",
    },
    {
      name: "Pratyush Shrivastav",
      feedback: "The course helped me prepare for internships and technical interviews.",
      image: "/images/praytush.jpg",
    },
    {
      name: "Aditya Pratap",
      feedback: "Support from mentors was quick and very helpful.",
      image: "/images/aditya.jpg",
    },
    {
      name: "Anushka Jain",
      feedback: "Overall, this tech course was very useful and career-oriented.",
      image: "/images/anushka.jpg",
    },
    {
      name: "Harsh Singh",
      feedback: "Regular assessments helped me track my learning progress.",
      image: "/images/harsh.jpg",
    },
    {
      name: "Mohit Kumar",
      feedback: "Doubt-clearing sessions were very helpful and interactive.",
      image: "/images/mohit.jpg",
    },
    {
      name: "Prince Sharma",
      feedback: "I enjoyed learning new technologies like React.js and Node.js through this course.",
      image: "/images/prince.jpg",
    },
    {
      name: "Kunal Pandey",
      feedback: "Learning in a project-based way made it easier to remember concepts.",
      image: "/images/kunal.jpg",
    },

  ]


  const partners = [
    { name: "HD Media Network", logo: "/images/hdmn.png" },
    { name: "SkyServer", logo: "/images/skyserver.jpg" },
    { name: "Singh Enterprises", logo: "/images/singh2.jpeg"},
    { name: "Falcons Beyond Imagination", logo: "/images/falcons.png" },
    { name: "Voltzenic Motors", logo: "/images/volt.png" },
    { name: "Ashok Infratech", logo: "/images/ashok.jpg" },
    { name: "Shekhawat Group of Industries", logo: "/images/shekhawat2.jpeg"},
    { name: "BIMPro Solutions pvt ltd", logo: "/images/bimpro2.jpeg"},
    { name: "Milan Power", logo: "/images/milanPower.png"},
    { name: "PU incent", logo: "/images/puIncent.png"},
    { name: "UPnex", logo: "/images/upnex2.jpeg"},
    { name: "NT Education", logo: "/images/nt2.jpeg"},
  ]

  const technologies = [
    { name: "HTML", logo: "/images/html.png", color: "from-orange-500 to-red-500" },
    { name: "CSS", logo: "/images/css.png", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", logo: "/images/js.png", color: "from-yellow-400 to-yellow-600" },
    { name: "React", logo: "/images/react.png", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", logo: "/images/Node.js_logo.svg.png", color: "from-green-500 to-emerald-600" },
    { name: "Express.js", logo: "/images/express2.webp", color: "from-yellow-200 to-yellow-100" },
    { name: "MongoDB", logo: "/images/mongodb.png", color: "from-green-600 to-green-800" },
    { name: "SQL", logo: "/images/sql.png", color: "from-indigo-500 to-purple-600" },
    { name: "Java", logo: "/images/java.png", color: "from-red-500 to-orange-600" },
    { name: "Blockchain", logo: "/images/blockchain.png", color: "from-purple-500 to-pink-500" },
    { name: "Python", logo: "/images/python.png", color: "from-orange-500 to-red-600" },
  ]





  return (
    <>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white pt-0">
  
  <div className="absolute inset-0">
    <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-indigo-600/20 rounded-full blur-3xl" />
    <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-teal-500/20 rounded-full blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-500/10 text-teal-400">
        Learn • Build • Grow
      </span>

      <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
        Transform Your
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
          Career with MentriQ
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Master cutting-edge technologies with live training from industry experts.
        Build real-world projects and become job-ready with confidence.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
        <button
          onClick={() => navigate("/courses")}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          Start Learning
        </button>

        <button
          onClick={() => navigate("/courses")}
          className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 hover:bg-white/5 transition"
        >
          Watch Demo
        </button>
      </div>

      <p className="mt-10 text-gray-400 font-semibold">
        ✅ 15-Day Money Back Guarantee
      </p>
    </motion.div>

    {/* RIGHT IMAGE (COMMENTED AS REQUESTED) */}
    
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <img
        src="/images/First.jpg"
        alt="Hero"
        className="max-w-md rounded-xl mb-5 md:w-full drop-shadow-2xl"
      />
    </motion.div>
   
    
  </div>
</section>
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Why Choose MentriQ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your tech career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  viewport={{ once: true }}
                  className="group"
                  drag={false}
                >
                  <div className="w-full h-[280px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 glass-effect">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-center font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


    
      {/*mentors*/}
     <section className="py-24 relative bg-gray-100 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-16">
          Meet Our World Class Mentor's
        </h2>
        <motion.div
          className="flex gap-8"
          animate={{ x: [-0,-((mentors.length * 2)*340)] }}
          transition={{
            repeat: Infinity,
            repeatType:"loop",
            duration: 140,
            ease: "linear",
          }}
          drag={false}
        >
          {[...mentors, ...mentors].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-white rounded-3xl p-6 shadow-xl"
            >
              <div className='flex items-center justify-center'>
              <img
                src={item.image}
                loading='lazy'
                className="w-[100px] h-[100px] object-cover shadow-lg  bg-white image-rendering-auto rounded-full mb-4 "
              />
              </div>
              <div className='flex items-center justify-center'>
              <h3 className="font-bold  text-gray-900 text-xl">{item.name}</h3>
              </div>
               <div className='flex items-center justify-start'>
              <p className=" text-sm mt-3 font-semibold text-center max-w-[260px] mx-auto text-gray-500">{item.description}</p>
              </div>
                <div className="flex justify-center gap-8 mt-6">
                {item.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        {/* </div> */}
      </section>



      {/*testinomial*/}
      <section className="py-24 relative bg-gray-100 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Students Say's
        </h2>
        <motion.div
          className="flex gap-8"
          animate={{ x: [-0,-((testimonials.length * 2)*340)] }}
          transition={{
            repeat: Infinity,
            repeatType:"loop",
            duration: 140,
            ease: "linear",
          }}
          drag={false}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-white rounded-3xl p-6 shadow-xl"
            >
              <div className='flex items-center justify-center'>
              <img
                src={item.image}
                loading='lazy'
                className="w-[100px] h-[100px] object-cover  border-indigo-500 shadow-lg bg-white image-rendering-auto rounded-full mb-4 "
              />
              </div>
              <div className='flex items-center justify-center'>
              <h3 className="font-semibold  text-green-400 text-lg">{item.name}</h3>
              </div>
               <div className='flex items-center justify-center'>
              <p className="text-sm font-semibold text-gray-800">{item.role}</p>
              </div>
              <p className="mt-4 text-gray-600 italic">
                “{item.feedback}”
              </p>
            </div>
          ))}
        </motion.div>
        {/* </div> */}
      </section>
      {/*our associate partner */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Associate Partners
        </h2>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="
            group bg-white rounded-3xl shadow-xl
            w-full h-[220px]
            flex flex-col items-center justify-center
            transition-all duration-300
          "
              >
                {/* Logo */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
              h-20 mb-6 object-contain
              grayscale-0 blur-0 opacity-100
              md:grayscale md:blur-[1px] md:opacity-60
              md:group-hover:grayscale-0
              md:group-hover:blur-0
              md:group-hover:opacity-100

              transition-all duration-300
              "
                />

                {/* Company Name */}
                <p
                  className="
              text-lg font-semibold
             text-gray-700
            md:text-gray-400 md:group-hover:text-indigo-600
              transition-colors duration-300
            "
                >
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      
{/* Technologies */}
<section className="py-24 relative bg-gray-900 text-white overflow-hidden">
  <h2 className="text-4xl font-bold text-center mb-16">
    Technologies You Will Learn
  </h2>

  <motion.div
    className="flex gap-8 px-8 w-max"
    animate={{ x: [0, -2200] }}
    transition={{
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    }}
    drag={false}
  >
    {[...technologies, ...technologies].map((tech, index) => (
      <div
        key={index}
        className={`
          min-w-[200px] h-[180px]
          rounded-3xl shadow-2xl
          bg-gradient-to-br ${tech.color}
          flex flex-col items-center justify-center
          hover:scale-110 transition-transform duration-300
        `}
      >
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-14 h-14 mb-4 object-contain"
        />
        <p className="text-lg font-bold">{tech.name}</p>
      </div>
    ))}
  </motion.div>
</section>



      {/* CTA Section */}
      <section className="py-24 overflow-hidden relative mt-10 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl mb-12 max-w-2xl mx-auto"
          >
            Join thousands of students who have transformed their careers with MentriQ Technologies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button onClick={() => navigate("/courses")} className="px-10 py-4 bg-white text-indigo-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Explore Courses
            </button>
            <button
              onClick={() => { setShowAuthModal(true), navigate('/courses') }}
              className="px-10 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white font-bold text-lg hover:bg-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </button>
          </motion.div>
        </div>
      </section>


    </>
  )
}

export default HomePage