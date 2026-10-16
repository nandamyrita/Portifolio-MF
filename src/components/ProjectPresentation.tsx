import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "../data/portfolio";

interface PresentationProject {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
}

export function ProjectPresentation({ project, details, onClose }: {
  project: PresentationProject;
  details?: Project;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  return (
    <dialog ref={dialog} onCancel={onClose} onClose={onClose}
      aria-labelledby="project-title" aria-describedby="project-description"
      className="w-[calc(100%-2rem)] max-w-4xl max-h-[90vh] p-0 rounded-2xl border border-pink-500/30 bg-white dark:bg-gray-900 text-gray-900 dark:text-white backdrop:bg-black/70">
      <div className="p-5 sm:p-8 relative">
        <button type="button" onClick={onClose} aria-label="Fechar projeto" className="absolute top-4 right-4 p-2 rounded-lg text-pink-500 hover:bg-pink-500/10"><X size={22} /></button>
        <h2 id="project-title" className="text-2xl sm:text-3xl font-bold text-pink-500 pr-10">{project.title}</h2>
        <p className="text-sm text-gray-500 mt-2">{details?.semester ? `${details.semester}º semestre` : 'Projeto complementar'}</p>
        <p id="project-description" className="mt-5 text-gray-600 dark:text-gray-300">{project.description}</p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Tecnologias do projeto</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{project.tech.length ? project.tech.join(' · ') : 'Tecnologias a confirmar pelo repositório.'}</p>
        <div className="flex flex-wrap gap-5 my-6 text-pink-500 underline underline-offset-4">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer">Código no GitHub</a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Acessar projeto</a>}
        </div>
        {project.image ? <figure>
          <a href={project.image} target="_blank" rel="noreferrer" aria-label={`Ampliar captura de ${project.title}`}><img src={project.image} alt={`Captura de tela do projeto ${project.title} em funcionamento`} className="w-full rounded-xl border border-pink-500/20" /></a>
          <figcaption className="text-xs text-gray-500 mt-2">Interface do projeto. Clique para ampliar.</figcaption>
        </figure> : <p className="text-sm text-gray-500 p-5 rounded-xl border border-pink-500/20">Captura de tela do projeto em funcionamento ainda não adicionada.</p>}
        <h3 className="text-lg font-semibold mt-6 mb-2">Minha participação</h3>
        <p className="text-gray-600 dark:text-gray-300">{details?.contribution || 'A detalhar: minhas responsabilidades, funcionalidades desenvolvidas e decisões tomadas neste projeto.'}</p>
      </div>
    </dialog>
  );
}
