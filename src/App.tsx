import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Academic } from "./components/Academic";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <Navigation />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="education">
            <Academic />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
