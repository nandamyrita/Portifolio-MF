import React from "react";
import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaJava, FaPython, FaBrain, FaRobot, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiPostman,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";
import { Code, Zap, Users, Trophy, Sparkles, Star, Heart, Database, Bot } from "lucide-react";

export function About() {
  const stats = [
    { icon: Code, label: "Projetos", value: "50+" },
    { icon: Zap, label: "Anos de Experiência", value: "5+" },
    { icon: Users, label: "Clientes Satisfeitos", value: "30+" },
    { icon: Trophy, label: "Prêmios", value: "10+" },
  ];

  const techList = [
    {
      name: "React",
      icon: <FaReact className="inline-block mr-2 text-pink-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="inline-block mr-2 text-blue-500" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="inline-block mr-2 text-green-600" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="inline-block mr-2 text-yellow-400" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="inline-block mr-2 text-cyan-400" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="inline-block mr-2 text-gray-500" />,
    },
    {
      name: "CSS/HTML",
      icon: (
        <>
          <SiCss3 className="inline-block mr-1 text-blue-600" />
          <SiHtml5 className="inline-block mr-2 text-orange-600" />
        </>
      ),
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="inline-block mr-2 text-green-700" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="inline-block mr-2 text-blue-700" />,
    },
    {
      name: "Figma",
      icon: <SiFigma className="inline-block mr-2 text-pink-600" />,
    },
    {
      name: "Python",
      icon: <FaPython className="inline-block mr-2 text-blue-500" />,
    },
    {
      name: "Machine Learning",
      icon: <FaBrain className="inline-block mr-2 text-purple-600" />,
    },
    {
      name: "SQL",
      icon: <Database className="inline-block mr-2 text-blue-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="inline-block mr-2 text-blue-600" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="inline-block mr-2 text-blue-500" />,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="inline-block mr-2 text-teal-500" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="inline-block mr-2 text-orange-500" />,
    },
    {
      name: "ChatBot/Dify",
      icon: <Bot className="inline-block mr-2 text-pink-500" />,
    },
    {
      name: "Langfuse",
      icon: <FaRobot className="inline-block mr-2 text-indigo-500" />,
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Sou desenvolvedora full-stack com foco em IA, familiarizada
            com as principais tecnologias do mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-10 sm:mb-16">
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
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 rounded-lg hidden sm:block"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 45, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  imageRendering: "pixelated",
                  filter: "contrast(1.2)",
                }}
              />

              <motion.div
                className="absolute -top-2 -right-4 sm:-right-6 w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-md hidden sm:block"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -45, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{
                  imageRendering: "pixelated",
                }}
              />

              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg flex items-center justify-center"
                animate={{
                  y: [0, 12, 0],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </motion.div>

              {/* Pixel art style image container */}
              <motion.div
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-pink-500/40 bg-gradient-to-br from-gray-100 dark:from-gray-800 to-gray-200 dark:to-gray-900"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  imageRendering: "pixelated",
                  filter: "contrast(1.1) saturate(1.2)",
                }}
              >
      
                <img
                  src="/about.png" 
                  alt="Minha foto"
                  className="w-full h-full object-cover"
                />

                {/* Pixel overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-orange-500/20" />

                {/* Animated pixel sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-500 rounded-sm"
                    style={{
                      left: Math.random() * 100 + "%",
                      top: Math.random() * 100 + "%",
                      imageRendering: "pixelated",
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <motion.div
              className="bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden group shadow-lg dark:shadow-none"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-pink-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-3 sm:mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                Minha Jornada
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Sempre tive interesse por tecnologia e inovação. Comecei minha
                carreira aos 17 anos na graduação em Desenvolvimento de Software
                Multiplataforma, onde me apaixonei por React e desenvolvimento web.
                Hoje, como estagiária de Data Science e IA na Solfácil, trabalho
                com Machine Learning, ChatBots e automação de processos,
                unindo código e inteligência artificial para criar soluções inovadoras.
              </p>

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden group shadow-lg dark:shadow-none"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-orange-400"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-3 sm:mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 sm:h-6 sm:w-6" />
                Filosofia
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Acredito que código limpo, dados bem estruturados e soluções
                inteligentes são fundamentais para criar impacto real. Busco
                sempre unir boas práticas de desenvolvimento com inovação em IA,
                criando ferramentas que otimizam processos e facilitam a vida
                das pessoas.
              </p>

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-8 sm:mb-12 flex items-center justify-center gap-2 sm:gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-6 w-6 sm:h-8 sm:w-8" />
            </motion.div>
            <span className="text-center">Tecnologias</span>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />
            </motion.div>
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {techList.map(({ name, icon }, index) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 0, 110, 0.3)",
                  }}
                  className="px-3 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur border border-pink-500/30 rounded-xl sm:rounded-2xl text-pink-600 dark:text-pink-300 hover:border-pink-500/70 hover:text-pink-700 dark:hover:text-white transition-all duration-500 relative overflow-hidden group cursor-pointer flex items-center text-xs sm:text-sm lg:text-base"
                >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <span className="relative z-10 font-medium sm:font-bold flex items-center">
                  {icon} {name}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
