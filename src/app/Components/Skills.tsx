import { motion } from 'motion/react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Code, level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'UI/UX Design', icon: Palette, level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'Backend Development', icon: Database, level: 85, color: 'from-green-500 to-emerald-500' },
  { name: 'Web Technologies', icon: Globe, level: 92, color: 'from-orange-500 to-red-500' },
  { name: 'Mobile Development', icon: Smartphone, level: 80, color: 'from-indigo-500 to-purple-500' },
  { name: 'Performance Optimization', icon: Zap, level: 88, color: 'from-yellow-500 to-orange-500' },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                  </div>
                </div>

                <div className="relative h-3 bg-black/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
