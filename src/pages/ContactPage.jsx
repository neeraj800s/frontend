import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate();

  const phoneNumber = "+918005521010";
  const message = "Hello, I want to chat with you!"
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const email = "yogeshsingh48743@gmail.com";
  const subject = "Support Request"; 
  const body = "Hello, I need help with...";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen pt-0 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div style={{
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 1000
}}>
  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 20px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "center"
  }}>
    Chat on WhatsApp
  </a>

  <a href={mailtoLink} target="_blank" rel="noopener noreferrer" style={{
    backgroundColor: "#0072C6",
    color: "white",
    padding: "12px 20px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "center"
  }}>
    Email Support
  </a>
</div>

      {/* Contact Hero Section */}
<section className="relative py-32 text-white overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/25 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-4 text-center">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl"
    >
      Get In Touch
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed"
    >
      Ready to start your tech journey or have questions about our programs?  
      Our team is here to help you with guidance, support, and answers. Reach out and let's connect!
    </motion.p>

    {/* Contact Highlights / Options */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-6 text-gray-200 text-base md:text-lg"
    >
      <a href={mailtoLink} target='_blank' rel='noopener noreferrer' className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        📧 Email Support
      </a>
      <a href={`tel:${phoneNumber}`} className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        📞 Call Us Directly
      </a>
      <a href={whatsappLink} target='_blank' rel='noopener noreferrer' className="px-5 py-2 rounded-full bg-white/10 backdrop-blur">
        💬 Live Chat
      </a>
      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur cursor-pointer" onClick={navigate("/contact")}>
        🌐 Schedule a Meeting
      </span>
    </motion.div>

  </div>
</section>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Contact Info
            </h2>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">Email</h3>
                    <a href="mailto:hello@mentriq.com" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">hello@mentriq.com</a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600">Phone</h3>
                    <a href="tel:+919876543210" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700">+91 8005521010</a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">Location</h3>
                    <p className="text-2xl font-bold text-purple-600">Jaipur, Rajasthan</p>
                    <p className="text-gray-600 mt-1">Plot 123, Tech Park, Jaipur</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-8 border-t border-gray-200">
              <a href="#" className="w-14 h-14 bg-indigo-500 hover:bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-cyan-500 hover:bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-white/50 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Send Message
            </h2>
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <Send className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-emerald-600 mb-4">Message Sent!</h3>
                <p className="text-xl text-gray-600 mb-8">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-transparent transition-all duration-300"
                    placeholder="Course inquiry, support, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                >
                  <Send size={24} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage