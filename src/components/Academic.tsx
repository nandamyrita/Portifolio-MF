import React from "react";
import { asset, profile } from "../data/portfolio";

export function Academic() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Formação & Cursos
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-pink-500/20">
            <h3 className="text-xl text-pink-500 mb-4">Formação acadêmica</h3>
            <dl className="space-y-4 text-sm">
              <div><dt className="text-gray-500">Nome completo</dt><dd>{profile.fullName || 'A informar — incluir sobrenomes'}</dd></div>
              <div><dt className="text-gray-500">Faculdade</dt><dd>{profile.institution}</dd></div>
              <div><dt className="text-gray-500">Curso</dt><dd>{profile.course}</dd></div>
              <div><dt className="text-gray-500">Semestre atual</dt><dd>{profile.currentSemester}º semestre</dd></div>
              <div><dt className="text-gray-500">Ingresso</dt><dd>{profile.startYear} · {profile.startSemester || 'semestre a confirmar'}</dd></div>
              <div><dt className="text-gray-500">Previsão de conclusão</dt><dd>{profile.graduation || 'A informar'}</dd></div>
            </dl>
          </article>
          <div className="space-y-6">
            <article className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-pink-500/20">
              <h3 className="text-xl text-pink-500 mb-4">Cursos de extensão</h3>
              {profile.courses.length ? profile.courses.map((course, index) => (
                <div key={index} className="text-sm mb-4">
                  <h4 className="font-semibold">{course.name}</h4>
                  <p>{course.institution}{course.location ? ` · ${course.location}` : ''}</p>
                  <p>{course.hours} horas · {course.end ? `Concluído em ${course.end}` : 'Em andamento'}</p>
                  {course.start && <p>Início: {course.start}</p>}
                  {course.certificate && <a href={asset(course.certificate)} target="_blank" rel="noreferrer" className="inline-block mt-3 text-pink-500 underline underline-offset-4">Ver certificado</a>}
                </div>
              )) : <p className="text-sm text-gray-500 dark:text-gray-400">A informar: nome, instituição, local, carga horária e datas de início e término.</p>}
            </article>
            <article className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-pink-500/20">
              <h3 className="text-xl text-pink-500 mb-4">Idiomas</h3>
              {profile.languages.length ? profile.languages.map(language => <p key={language.name} className="text-sm">{language.name} — {language.level}</p>) : <p className="text-sm text-gray-500 dark:text-gray-400">Idiomas e níveis a informar.</p>}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
