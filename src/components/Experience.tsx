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
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      location: "São Paulo, SP",
      description:
        "Lidero equipe de desenvolvimento de aplicações web escaláveis usando React, Node.js e AWS. Responsável por arquitetura de sistemas e mentoria de desenvolvedores juniores.",
      achievements: [
        "Aumentei a performance das aplicações em 40%",
        "Liderei migração para arquitetura de microserviços",
        "Mentoreei 8+ desenvolvedores juniores",
      ],
      tech: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      highlight: true,
    },
    {
      title: "Full Stack Developer",
      company: "StartupTech",
      period: "2020 - 2022",
      location: "São Paulo, SP",
      description:
        "Desenvolvi aplicações web completas do zero, trabalhando diretamente com fundadores para transformar ideias em produtos digitais.",
      achievements: [
        "Desenvolvi 5+ aplicações web do zero",
        "Implementei sistema de pagamentos integrado",
        "Reduzi tempo de carregamento em 60%",
      ],
      tech: ["Vue.js", "Python", "PostgreSQL", "Stripe"],
      highlight: false,
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "São Paulo, SP",
      description:
        "Criei interfaces responsivas e interativas para diversos clientes, focando em experiência do usuário e performance.",
      achievements: [
        "Entreguei 20+ projetos para clientes",
        "Implementei design system da empresa",
        "Alcancei 98% de satisfação dos clientes",
      ],
      tech: ["React", "SASS", "JavaScript", "Figma"],
      highlight: false,
    },
    {
      title: "Junior Developer",
      company: "CodeStart",
      period: "2018 - 2019",
      location: "São Paulo, SP",
      description:
        "Iniciei minha carreira desenvolvendo websites e aprendendo as melhores práticas de desenvolvimento web.",
      achievements: [
        "Completei 10+ projetos web",
        "Aprendi frameworks modernos",
        "Participei de hackathons",
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      highlight: false,
    },
  ];

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Minha jornada de crescimento no mundo da tecnologia
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 bg-gray-700 h-full">
            <motion.div
              className="w-full bg-gradient-to-b from-pink-500 to-orange-500/50 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-10 ${
                    exp.highlight ? "bg-pink-500" : "bg-orange-500"
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
                    <Star className="h-3 w-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`ml-20 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border rounded-2xl p-8 relative overflow-hidden group ${
                      exp.highlight
                        ? "border-pink-500/40"
                        : "border-orange-500/20"
                    } hover:border-pink-400/60 transition-all duration-500`}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Highlight badge */}
                    {exp.highlight && (
                      <motion.div
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-orange-500/50 px-3 py-1 rounded-lg text-xs text-white font-bold"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        Atual
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-pink-500 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          className="p-2 bg-pink-500/20 rounded-lg hover:bg-pink-500/40 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-pink-500" />
                        </motion.a>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-pink-500 font-medium mb-3">
                          Principais conquistas:
                        </h4>
                        <ul className="space-y-2">
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
                                className="flex items-center gap-2 text-gray-300"
                              >
                                <motion.div
                                  className="w-2 h-2 bg-pink-400 rounded-full"
                                  whileHover={{ scale: 1.5 }}
                                />
                                {achievement}
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-pink-500 font-medium mb-3">
                          Tecnologias utilizadas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: techIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 bg-pink-500/20 text-pink-500 rounded-lg text-sm border border-pink-500/30 hover:border-pink-400/50 hover:bg-pink-500/50 hover:text-white transition-all duration-300"
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-pink-500/10 to-orange-500/50/10 backdrop-blur border border-pink-500/30 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-pink-500 mb-4">
            Quer saber mais sobre minha experiência?
          </h3>
          <p className="text-gray-300 mb-6">
            Entre em contato para conversarmos sobre oportunidades e projetos.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-orange-500/50 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25"
          >
            Vamos conversar!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
