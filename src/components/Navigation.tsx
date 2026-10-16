import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Experiências", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Formação", href: "#education" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/20 border-b border-pink-500/10 dark:border-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between md:justify-center h-16 sm:h-20">
          {/* Mobile Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative group"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                className="w-10 h-10 object-contain"
                src="/nanda-logo-icon.svg"
                alt="Nanda Developer"
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Navigation Pills */}
            <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-gray-800/20 backdrop-blur border border-pink-500/20 rounded-full p-2 transition-colors duration-300">
              {/* Logo com estilo */}
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mr-4 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    className="w-10 h-10 object-contain"
                    src="/nanda-logo-icon.svg"
                    alt="Nanda Developer"
                  />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-pink-500/0 group-hover:bg-pink-500/10 transition-all duration-300" />
              </motion.a>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileTap={{ scale: 0.97 }}
                  className="relative text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 px-4 py-2 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  {/* Linha animada embaixo */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full group-hover:w-[60%] transition-all duration-300 ease-out" />
                </motion.a>
              ))}
              <motion.a
                href="/CurriculoEstagio.pdf"
                download="CurriculoEstagio.pdf"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-4 group"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 group-hover:border-pink-400 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300">
                  <Download className="h-4 w-4 text-pink-500 dark:text-pink-400 group-hover:text-pink-400 dark:group-hover:text-pink-300 transition-colors" />
                  <span className="text-sm font-medium text-pink-500 dark:text-pink-400 group-hover:text-pink-400 dark:group-hover:text-pink-300 transition-colors">Currículo</span>
                </div>
              </motion.a>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2 p-2.5 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-pink-400 hover:text-pink-300 transition-colors" />
                ) : (
                  <Moon className="h-4 w-4 text-pink-500 hover:text-pink-400 transition-colors" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button Mobile */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-pink-500 dark:text-pink-400 hover:text-pink-400 dark:hover:text-pink-300 transition-colors bg-gray-100/80 dark:bg-gray-800/50 rounded-lg border border-pink-500/30"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-pink-500 dark:text-pink-400 hover:text-pink-400 dark:hover:text-pink-300 transition-colors bg-gray-100/80 dark:bg-gray-800/50 rounded-lg border border-pink-500/30"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
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
          <div className="py-4 space-y-3 border-t border-pink-500/20 bg-gray-100/95 dark:bg-gray-900/80 backdrop-blur-lg rounded-b-2xl px-2 transition-colors duration-300">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-pink-500/10 border border-transparent hover:border-pink-500/20"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Download CV Button */}
            <motion.a
              href="/CurriculoEstagio.pdf"
              download="CurriculoEstagio.pdf"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 mt-2 transition-all duration-300"
            >
              <Download className="h-4 w-4 text-pink-500 dark:text-pink-400" />
              <span className="text-sm font-medium text-pink-500 dark:text-pink-400">Baixar Currículo</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
