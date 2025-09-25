import { motion } from 'motion/react'
import { Code, Zap, Users, Trophy, Sparkles, Star, Heart } from 'lucide-react'


export function About() {
  const stats = [
    { icon: Code, label: 'Projetos', value: '50+' },
    { icon: Zap, label: 'Anos de Experiência', value: '5+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '30+' },
    { icon: Trophy, label: 'Prêmios', value: '10+' },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia e inovação, especializado em criar 
            soluções digitais que fazem a diferença. Com expertise em desenvolvimento full-stack 
            e uma mente criativa, transformo ideias em realidade digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Pixel Art Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-lg"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  imageRendering: 'pixelated',
                  filter: 'contrast(1.2)'
                }}
              />
              
              <motion.div
                className="absolute -top-2 -right-6 w-6 h-6 bg-purple-500 rounded-md"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -45, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{
                  imageRendering: 'pixelated'
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, 8, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Heart className="h-5 w-5 text-white" />
              </motion.div>

              {/* Pixel art style image container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-pink-500/40 bg-gradient-to-br from-gray-800 to-gray-900"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  imageRendering: 'pixelated',
                  filter: 'contrast(1.1) saturate(1.2)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1692306088530-e81ab626753b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMHdvbWFuJTIwZGV2ZWxvcGVyJTIwOGJpdHxlbnwxfHx8fDE3NTg3NDY3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Maria Fernanda - Pixel Art Style"
                  className="w-full h-full object-cover"
                  style={{
                    imageRendering: 'pixelated',
                    filter: 'contrast(1.2) brightness(1.1)'
                  }}
                />
                
                {/* Pixel overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20" />
                
                {/* Animated pixel sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-400 rounded-sm"
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      imageRendering: 'pixelated'
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="absolute top-4 right-4 bg-green-500 px-3 py-1 rounded-full text-xs text-white font-bold border-2 border-black"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  imageRendering: 'pixelated'
                }}
              >
                ONLINE
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-4 right-4 text-pink-400"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-6 w-6" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Minha Jornada
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Começei minha jornada na programação aos 16 anos e desde então venho me apaixonando 
                cada vez mais pelo mundo do desenvolvimento. Sempre busco aprender novas tecnologias 
                e me manter atualizado com as tendências do mercado.
              </p>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-4 right-4 text-purple-400"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-6 w-6" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <Code className="h-6 w-6" />
                Filosofia
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Acredito que código limpo e design intuitivo são fundamentais para criar experiências 
                excepcionais. Cada projeto é uma oportunidade de inovar e superar expectativas, 
                sempre pensando no usuário final.
              </p>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          </motion.div>

          
        </div>

     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-pink-400 mb-12 flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-8 w-8" />
            </motion.div>
            Tecnologias que domino
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Node.js', 'JavaScript', 'PostgreSQL', 'Docker', 'CSS/HTML', 'Figma'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  rotate: [0, 5, -5, 0],
                  boxShadow: "0 10px 30px rgba(255, 0, 110, 0.3)"
                }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur border border-pink-500/30 rounded-2xl text-pink-300 hover:border-pink-400/70 hover:text-white transition-all duration-500 relative overflow-hidden group cursor-pointer"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 font-bold">{tech}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}