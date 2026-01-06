import { motion } from 'framer-motion'
import { Users, BookOpen, Award, Clock, Play, GraduationCap } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: '3K+', icon: Users, label: 'Students Trained' },
    { number: '50+', icon: BookOpen, label: 'Live Courses' },
    { number: '98%', icon: Award, label: 'Placement Rate' },
    { number: '100+', icon: Clock, label: 'Expert Trainers' }
  ]

  const timeline = [
    { year: '2024', title: 'Founded', desc: 'MentriQ Technologies started with mission to skill 1M students' },
    { year: '2025', title: 'First Batch', desc: 'Launched first React Developer bootcamp with 95% placement' },
    { year: '2026', title: 'Scale Up', desc: 'Expanded to 20+ courses, 1K+ students trained' }
  ]

  return (
    <div className="min-h-screen pt-0 bg-gradient-to-br from-slate-50 to-indigo-50">
      
      {/* About Hero Section */}
<section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]">
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/25 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-4 text-center">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl"
    >
      About MentriQ
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-2xl max-w-4xl mx-auto mb-10 text-gray-300 leading-relaxed"
    >
      MentriQ has been transforming careers since 2023 by offering **cutting-edge technology training**, practical projects, and mentorship from industry experts. Our mission is to empower learners with the knowledge and skills required to excel in the fast-paced tech world.  
      Join us to unlock your potential and build a successful future.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-6 text-gray-200 text-base md:text-lg"
    >
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
         Expert Mentors
      </span>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
         Hands-on Projects
      </span>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        Career Support
      </span>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
         Industry-Relevant Curriculum
      </span>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
         Innovative Learning Methods
      </span>
    </motion.div>

  </div>
</section>


      {/* Stats */}
      <section className="py-24">
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
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To empower 1 million students with job-ready tech skills through live training, 
                hands-on projects, and guaranteed placement support by 2030.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-lg">Live interactive classes with industry experts</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-lg">Real-world projects for portfolio</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-lg">95%+ placement assistance</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div>
                  <img className='rounded-xl' src='/images/About.webp'/>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur">
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-r from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-center mb-20"
          >
            Our Journey
          </motion.h2>
          <div className="relative py-16">
  {/* Center line */}
  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:w-1 md:h-full md:bg-indigo-500  md:block hidden" />

  <div className="space-y-16">
    {timeline.map((item, index) => (
      <motion.div
        key={item.year}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {index % 2 === 0 && (
          <>
            <div className="hidden md:flex justify-end pr-10">
              <div className='flex flex-col items-end'>
                <div
                  className={`inline-block  p-4 rounded-2xl mb-2 shadow-xl ${
                    index === 0
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                      : index === 1
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}
                >
                  <div className="text-2xl font-bold">
                    <span>{item.year}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1 text-right">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 ">{item.desc}</p>
              </div>
            </div>

            <div className="md:block" />
          </>
        )}

        {index % 2 !== 0 && (
          <>
            <div className="md:block" />

            <div className="hidden md:flex justify-start pl-10">
              <div>
                <div
                  className={`inline-block p-4 rounded-2xl mb-2 shadow-xl ${
                    index === 0
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                      : index === 1
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}
                >
                  <div className="text-2xl font-bold">{item.year}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-lg  text-gray-600">{item.desc}</p>
              </div>
            </div>
          </>
        )}

        <div className="md:hidden text-center">
          <div
            className={`inline-block p-4 rounded-2xl mb-2 shadow-xl ${
              index === 0
                ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                : index === 1
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            }`}
          >
            <div className="text-2xl font-bold">{item.year}</div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {item.title}
          </h3>
          <p className="text-lg text-gray-600">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

          
        </div>
      </section>
    </div>
  )
}

export default AboutPage