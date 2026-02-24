import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Code2,
  Smartphone,
  Globe,
  Brain,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type Category = "Todos" | "Web" | "Front-End" | "SaaS" | "AI/ML" | "Dashboard";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  gradient: string;
  category: Category;
  featured?: boolean;
  github?: string;
  live?: string;
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { name: "Todos" as Category, icon: Layers },
    { name: "Web" as Category, icon: Globe },
    { name: "AI/ML" as Category, icon: Brain },
    { name: "Dashboard" as Category, icon: Code2 },
  ];

  const projects: Project[] = [
    {
      title: "EstocaAi",
      description:
        "Sistema de gerenciamento de estoque com design moderno, gráficos em tempo real e integração com Firebase para autenticação e controle de produtos, vendas e entradas.",
      image: "/dashboard.png",
      tech: ["React", "TypeScript", "Firebase", "Chart.js"],
      gradient: "from-pink-500 to-rose-500",
      category: "Dashboard",
      featured: true,
      github: "https://github.com/DreyMendonca/stock", 
      live: "https://estocai.vercel.app/", 
    },
    
    {
      title: "SimoneBuffet",
      description:
        "Aplicação web voltada para o gerenciamento de eventos e pedidos, com design responsivo e foco em simplicidade e organização das informações.",
      image: "/buffet.png",
      tech: ["React", "Tailwind", "Firebase", "Vite"],
      gradient: "from-pink-400 to-rose-500",
      category: "Web",
      featured: true,
      github: "https://github.com/nandamyrita/SimoneBuffet.git",
      live: "https://simonebuffet.vercel.app/",
    },
    {
      title: "To-do List",
      description:
        "Aplicativo simples de lista de tarefas com funcionalidades de adicionar, marcar como concluída e remover, criado para praticar React e gerenciamento de estado.",
      image: "/todo-list.png",
      tech: ["React", "Tailwind", "TypeScript"],
      gradient: "from-rose-500 to-pink-600",
      category: "Web",
      featured: true,
      github: "https://github.com/nandamyrita/todo-list.git",
      live: "https://todo-list-nine-kappa-68.vercel.app/",
    },
    
    {
      title: "Ghibli Fest",
      description:
        "Aplicação web que consome a API do Studio Ghibli, exibindo informações detalhadas sobre os filmes ao clicar em cada card.",
      image: "/ghibli.png",
      tech: ["React", "Tailwind", "API", "Next.js"],
      gradient: "from-fuchsia-500 to-pink-500",
      category: "Web",
      github: "https://github.com/nandamyrita/ghibli-website.git",
      live: "https://ghibli-website-dfwm.vercel.app/",
    },
   
    {
      title: "ClimaTuor-ChatBot",
      description:
        "ChatBot inteligente que fornece informações sobre o clima em diferentes cidades, usando tecnologias de IA para respostas rápidas e precisas.",
      image: "/chatbot.png",
      tech: ["Python", "FastAPI"],
      gradient: "from-pink-400 to-fuchsia-500",
      category: "AI/ML",
      github: "https://github.com/nandamyrita/ClimaTour-IA-Agent.git",
    },

  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-pink-400" />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-pink-400" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Explore minha coleção de projetos inovadores e soluções criativas
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.name;

            return (
              <motion.button
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setShowAll(false);
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300
                  flex items-center gap-1.5 sm:gap-2 overflow-hidden group text-xs sm:text-sm
                  ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30"
                      : "bg-gray-100/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-pink-500/20 hover:border-pink-400/40"
                  }
                `}
              >
                {/* Background animation */}
                {!isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={isActive ? { x: "100%" } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                <Icon
                  className={`h-4 w-4 sm:h-5 sm:w-5 relative z-10 ${
                    isActive ? "animate-pulse" : ""
                  }`}
                />
                <span className="relative z-10">{category.name}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 border-2 border-white/30 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-xl sm:rounded-2xl overflow-hidden hover:border-pink-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/20 shadow-lg dark:shadow-none"
              >
                {/* Action Icons - GitHub & Live Site */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex gap-1.5 sm:gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.15, rotate: 12 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/60 rounded-md sm:rounded-lg p-1.5 sm:p-2 transition-all hover:bg-pink-500/20 group/icon"
                      title="Ver Código no GitHub"
                    >
                      <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-pink-500 dark:text-pink-300 group-hover/icon:text-pink-400 dark:group-hover/icon:text-pink-100 transition-colors" />
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.15, rotate: -12 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-md sm:rounded-lg p-1.5 sm:p-2 hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/30 group/icon"
                      title="Ver Site Hospedado"
                    >
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white group-hover/icon:rotate-45 transition-transform" />
                    </motion.a>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs flex items-center gap-1 shadow-lg"
                    >
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      Destaque
                    </motion.div>
                  </div>
                )}

                {/* Project image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                  />

                  {/* Hover overlay with View Details - hidden on mobile */}
                  <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, y: 20 }}
                      whileHover={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 cursor-pointer shadow-xl"
                      >
                        <span className="text-white flex items-center gap-2 text-sm sm:text-base">
                          <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                          Ver Detalhes
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl mb-1.5 sm:mb-2 text-gray-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-pink-500/10 text-pink-600 dark:text-pink-300 rounded-md sm:rounded-lg text-[10px] sm:text-xs border border-pink-500/30 hover:border-pink-400/60 hover:bg-pink-500/20 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <div
                  className="absolute bottom-4 right-4 w-1 h-1 bg-rose-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              <span className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
                {showAll
                  ? "Ver Menos"
                  : `Ver Mais ${filteredProjects.length - 6} Projetos`}
              </span>
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 sm:py-16"
          >
            <div className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
              Nenhum projeto encontrado nesta categoria.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
