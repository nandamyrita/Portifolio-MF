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
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
                className="w-20 p-2 mr-7"
                src="/logo.png"
                alt="logo"
              />
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
           
          </motion.p>

          
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
              © 2025 Nanda. Todos os direitos reservados.
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