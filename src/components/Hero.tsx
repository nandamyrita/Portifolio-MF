import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "./ui/button";
import "../index.css";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-gray-50 dark:via-black to-orange-400/20 transition-colors duration-300" />

      {/* Animated background elements */}
      <div className="absolute inset-0 hidden sm:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400/10 to-orange-400/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 min-h-[85vh] lg:min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start"
              >
                <motion.div
                  className="w-2 h-2 bg-pink-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-pink-400 uppercase tracking-widest text-xs sm:text-sm">
                  Olá, eu sou
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-orange-600 bg-clip-text text-transparent">
                  Maria Fernanda
                </span>
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl md:text-4xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Desenvolvedora Full Stack
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Apaixonada por tecnologia e inovação, criando experiências
                digitais únicas com código limpo e design moderno que fazem a
                diferença no mundo digital.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#projects"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                  >
                    <span className="text-sm p-2 font-medium text-pink-400 hover:text-pink-300 transition-colors">Ver Projetos</span>
                    <ArrowRight className="h-4 w-4 text-pink-400" />
                  </a>
                </motion.div>

                <div className="flex gap-3 sm:gap-4">
                  <motion.a
                    href="https://github.com/nandamyrita"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      background: "linear-gradient(45deg, #ff006e, #f97310)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 sm:p-4 bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur border border-pink-500/30 rounded-xl sm:rounded-2xl hover:bg-pink-500/20 transition-all duration-500 group"
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 dark:text-pink-400 group-hover:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/maria-fernanda-439137202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      rotate: -360,
                      background: "linear-gradient(45deg, #ff006e, #f97310)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 sm:p-4 bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur border border-pink-500/30 rounded-xl sm:rounded-2xl hover:bg-pink-500/20 transition-all duration-500 group"
                  >
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 dark:text-pink-400 group-hover:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                    href="mailto:mariafernanda.mfsm8@gmail.com"
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      background: "linear-gradient(45deg, #ff006e, #f97310)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 sm:p-4 bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur border border-pink-500/30 rounded-xl sm:rounded-2xl hover:bg-pink-500/20 transition-all duration-500 group"
                  >
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 dark:text-pink-400 group-hover:text-white transition-colors" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-3xl blur-xl hidden sm:block"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-pink-500/30"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/hero.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-white font-bold text-base sm:text-lg">{"<>"}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-500 dark:border-pink-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-500 dark:bg-pink-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
