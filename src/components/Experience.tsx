import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink, Star } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      title: "Estagiária em Data Science e IA",
      company: "Solfácil",
      period: "Dezembro 2025 - Presente",
      location: "São Paulo, SP",
      description:
        "Estágio na área de Data Science e Inteligência Artificial em uma das maiores financiadoras de painéis solares do Brasil, trabalhando com análise de dados e desenvolvimento de soluções baseadas em IA.",
      achievements: [
        "Desenvolvimento de modelos de Machine Learning para análise de dados",
        "Soluções baseadas em IA para otimização de processos de financiamento solar",
        "Chatbots e tools para automação de processos",
      ],
      tech: ["Python", "Machine Learning", "Data Science", "SQL", "PostgreSQL", "Dify", "ChatBot", "Docker", "Langfuse", "Postman", "FastAPI"],
      highlight: true,
    },

    {
      title: "Tecnóloga em Desenvolvimento de Software Multiplataforma",
      company: "FATEC Zona Leste",
      period: "1º semestre de 2024 — conclusão prevista em dezembro de 2026",
      location: "São Paulo, SP",
      description:
        "Cursando o 6º semestre da graduação, com foco em desenvolvimento full stack, criação de aplicações web, arquitetura de sistemas e boas práticas de programação.",
      achievements: [
        "Participei de diversos projetos acadêmicos utilizando React, Node.js e Firebase",
        "Aprendi metodologias ágeis e trabalho colaborativo em equipe",
        "Desenvolvi aplicações com foco em usabilidade e experiência do usuário",
      ],
      tech: ["React", "Node.js", "TypeScript", "Firebase", "Git", "etc..."],
      highlight: false,
    },

   
    
  ];

  return (
    <section ref={containerRef} className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
            Experiência & Projetos
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 sm:w-1 bg-gray-300 dark:bg-gray-700 h-full">
            <motion.div
              className="w-full bg-gradient-to-b from-pink-500 to-orange-500/50 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white dark:border-black z-10 ${exp.highlight ? "bg-pink-500" : "bg-orange-500"
                    }`}
                  whileHover={{ scale: 1.3 }}
                  animate={
                    exp.highlight
                      ? {
                        boxShadow: [
                          "0 0 0 0px rgba(255, 0, 110, 0.4)",
                          "0 0 0 10px rgba(255, 0, 110, 0)",
                        ],
                      }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {exp.highlight && (
                    <Star className="h-2 w-2 sm:h-3 sm:w-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`ml-10 sm:ml-20 md:ml-0 w-full md:w-5/12 ${index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                    }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group shadow-lg dark:shadow-none ${exp.highlight
                        ? "border-pink-500/40"
                        : "border-orange-500/20"
                      } hover:border-pink-400/60 transition-all duration-500`}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-pink-500 dark:group-hover:text-pink-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-pink-500 font-medium text-sm sm:text-base">
                            {exp.company}
                          </p>
                        </div>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          className="p-1.5 sm:p-2 bg-pink-500/20 rounded-lg hover:bg-pink-500/40 transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500" />
                        </motion.a>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="truncate">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-pink-500 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                          Principais conquistas:
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: achievementIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm"
                              >
                                <motion.div
                                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-1.5 flex-shrink-0"
                                  whileHover={{ scale: 1.5 }}
                                />
                                <span>{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-pink-500 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                          Tecnologias utilizadas:
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: techIndex * 0.05,
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-2 py-0.5 sm:px-3 sm:py-1 bg-pink-500/20 text-pink-500 rounded-md sm:rounded-lg text-xs sm:text-sm border border-pink-500/30 hover:border-pink-400/50 hover:bg-pink-500/50 hover:text-white transition-all duration-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16 p-5 sm:p-8 bg-gradient-to-r from-pink-500/10 to-orange-500/10 backdrop-blur border border-pink-500/30 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-none"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-3 sm:mb-4">
            Quer saber mais sobre minha experiência?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
            Entre em contato para conversarmos sobre oportunidades e projetos.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            <span className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">Vamos conversar!</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
