import { motion } from 'motion/react'
import { Code2, Database, Palette, Server, Smartphone, Globe } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Motion/Framer', level: 80 }
      ],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'API REST', level: 95 },
        { name: 'GraphQL', level: 75 }
      ],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 70 }
      ],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Globe,
      title: 'DevOps',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 70 }
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 90 },
        { name: 'App Store', level: 75 }
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX', level: 80 },
        { name: 'Adobe Suite', level: 70 },
        { name: 'Prototyping', level: 85 }
      ],
      gradient: 'from-violet-500 to-purple-500'
    }
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Habilidades & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competências técnicas desenvolvidas ao longo de anos de experiência em projetos desafiadores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl p-8 hover:border-pink-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`bg-gradient-to-r ${category.gradient} w-14 h-14 rounded-xl flex items-center justify-center`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-pink-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-pink-400 mb-8">Outras Competências</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Metodologias Ágeis',
              'Clean Code',
              'TDD/BDD',
              'Microservices',
              'Git/GitHub',
              'Code Review',
              'Mentoring',
              'Technical Writing'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur border border-pink-500/30 rounded-xl text-pink-300 hover:border-pink-400/50 hover:bg-pink-500/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}