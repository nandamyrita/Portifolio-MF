import { motion } from 'motion/react'
import { useState } from 'react'
import { Menu, X, Code, Download } from 'lucide-react'
import { Button } from './ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Experiências', href: '#experience' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-400 opacity-0"
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
            <div className="flex flex-col">
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
               
              </motion.span>
              
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-400 border-0 text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group"
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Currículo
              </Button>
            </motion.div>

            {/* Navigation Pills */}
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur border border-pink-500/20 rounded-full p-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-full group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <span className="relative z-10 text-sm font-medium">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-pink-400 hover:text-pink-300 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-pink-500/20">
            {/* Mobile Download CV Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-pink-500 to-black-500 hover:from-pink-600 hover:to-black-600 border-0 text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Currículo
              </Button>
            </motion.div>

            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 py-2"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}