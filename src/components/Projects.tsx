import { motion } from 'motion/react'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Futurístico',
      description: 'Plataforma de e-commerce com IA integrada, design moderno e experiência de usuário inovadora.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React', 'TypeScript', 'Stripe', 'AI'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard completo com visualizações de dados em tempo real e insights avançados.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['Next.js', 'Chart.js', 'PostgreSQL', 'Redis'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'App de Produtividade',
      description: 'Aplicativo mobile para gestão de tarefas com sincronização em nuvem e colaboração.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Platform SaaS',
      description: 'Plataforma SaaS completa com autenticação, billing e multi-tenancy.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['Vue.js', 'Laravel', 'AWS', 'Stripe'],
      gradient: 'from-emerald-500 to-teal-500'
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <Sparkles className="h-8 w-8 text-pink-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-400/40 transition-all duration-500 transform-gpu"
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover overlay with animated elements */}
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                  >
                    <ExternalLink className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Project content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-lg text-sm border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 text-white group/btn relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform relative z-10" />
                      Ver Projeto
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateZ: 5 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-500/50 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 group/btn relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-pink-500/10"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform relative z-10" />
                      Código
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              <div className="absolute top-4 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-pink-500/50 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 px-8 py-6 text-lg rounded-xl group"
          >
            Ver Todos os Projetos
            <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}