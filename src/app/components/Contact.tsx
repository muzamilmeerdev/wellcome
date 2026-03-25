import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, MessageCircle, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/muzamilmeerdev', color: 'hover:text-gray-300' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/muzamil_mir___', color: 'hover:text-pink-400' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-400' },
  { icon: Mail, label: 'Email', href: 'mailto:muzamilmeer598@gmail.com', color: 'hover:text-red-400' },
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-12 hover:border-purple-500/50 transition-all duration-300">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div
                  className="inline-block p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageCircle className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out via WhatsApp or any of my social channels
                </p>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/919103594759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-lg font-semibold hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Chat on WhatsApp
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  />
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-purple-500/20">
                <p className="text-center text-gray-400 mb-6">Or connect with me on</p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`p-4 bg-white/5 border border-purple-500/20 rounded-2xl ${social.color} transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">or email me at</p>
                <motion.a
                  href="mailto:muzamilmeer598@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  muzamilmeer598@gmail.com
                </motion.a>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 hover:opacity-20 blur-2xl transition-opacity -z-10" />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 text-gray-500 text-sm"
        >
          <p>© 2026 Muzamil. Crafted with passion and creativity.</p>
        </motion.div>
      </div>
    </section>
  );
}