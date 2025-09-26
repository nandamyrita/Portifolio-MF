import { motion } from 'motion/react'
import { Heart, Code, Coffee } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-pink-500/20 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo and tagline */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 opacity-0"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-white font-bold text-lg z-10">MF</span>
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              Maria Fernanda
            </span>
          </div>

          {/* Quote */}
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg italic"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            "Código é poesia, design é arte, e juntos criam experiências extraordinárias."
          </motion.p>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Feito com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-5 w-5 text-pink-400 fill-current" />
            </motion.div>
            <span>e muito</span>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="h-5 w-5 text-pink-400" />
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-pink-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-500">
              © 2024 DevPortfolio. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 mt-2">
              Desenvolvido com React, TypeScript e muita criatividade.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-4 mt-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}