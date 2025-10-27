import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Code, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Experiências", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 justify-between">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Download CV Button */}

            {/* Navigation Pills */}
            <div className="flex items-center gap-2 bg-gray-800/20 backdrop-blur border border-pink-500/20 rounded-full p-2">
              <img className="w-14 p-2 mr-7" src="/logo.png" alt="logo" />

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
                  <span className="relative z-10 text-sm font-medium">
                    {item.name}
                  </span>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                href="/CurriculoEstagio.pdf"
                download="CurriculoEstagio.pdf"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-400 border-0 text-white px-2 py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group ml-6 justify-center flex items-center "
              >
                <Download className="h-4 w-4 mr-2" />
                Currículo
              </a>
              </motion.div>
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
            height: isOpen ? "auto" : 0,
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
                x: isOpen ? 0 : -20,
              }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <a
                href="/CurriculoEstagio.pdf"
                download="CurriculoEstagio.pdf"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-400 border-0 text-white px-2 py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group ml-6 justify-center flex items-center "
              >
                <Download className="h-4 w-4 mr-2" />
                Download Currículo
              </a>
            </motion.div>

            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
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
  );
}
