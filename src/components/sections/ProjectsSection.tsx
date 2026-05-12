'use client';

import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { AiFillGithub } from 'react-icons/ai';
import { fadeInUp, staggerContainer } from '../../constants/animations';

const projects = [
  {
    id: 1,
    title: 'Web Corporativa para Abogada',
    category: 'Corporate / Multilingüe',
    description:
      'Sitio profesional multilingüe (ES/EN/FR) con animaciones suaves, formulario con envío por email y SEO legal.',
    tech: ['React', 'Framer Motion', 'SendGrid', 'i18next', 'CSS Modules'],
    year: '2025',
    role: 'Diseño + Desarrollo',
    demo: 'https://www.avocat-asmaekirimov.com/',
    code: 'https://github.com/SenanAbb/asmae-web-v2',
  },
  {
    id: 2,
    title: 'ConLaMielEnLosLabios',
    category: 'Full-Stack Portal',
    description:
      'Portal completo para gestión de colmenas, apicultores y monitoreo en tiempo real. Proyecto bootcamp SocraTech.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
    year: '2025',
    role: 'Full Stack',
    code: 'https://github.com/SenanAbb/ConLaMielEnLosLabios',
  },
  {
    id: 3,
    title: 'Clon de Spotify',
    category: 'SPA / Frontend',
    description:
      'Frontend responsive con navegación por secciones, reproducción simulada y enrutado SPA. Diseño fluido.',
    tech: ['React', 'Tailwind CSS', 'React Router', 'Fake API'],
    year: '2024',
    role: 'Frontend',
    code: 'https://github.com/SenanAbb/spotify-clone',
  },
  {
    id: 4,
    title: 'Clon de Trello',
    category: 'Productivity Tool',
    description:
      'Gestión de tareas con drag-and-drop, creación de tableros, columnas y persistencia local.',
    tech: ['React', 'React DnD', 'Tailwind CSS', 'Context API'],
    year: '2023',
    role: 'Frontend',
    code: 'https://github.com/SenanAbb/trello-clone',
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      data-section="projects"
      className="relative py-24 md:py-32 border-t-2 border-border bg-muted/40"
    >
      <div className="container-edge">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-12 gap-6 md:gap-10"
        >
          <motion.div
            variants={fadeInUp}
            className="col-span-12 mb-8 flex items-end justify-between gap-4 flex-wrap"
          >
            <span className="section-label">05 / Proyectos</span>
            <span className="font-mono text-xs text-muted-fg">
              {projects.length} seleccionados
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="col-span-12 font-display font-black uppercase tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          >
            Trabajo <span className="text-accent">selecto</span>.
          </motion.h2>

          <div className="col-span-12 mt-12 border-2 border-border bg-bg overflow-hidden">
            <ul>
              {projects.map((p, i) => (
                <motion.li
                  key={p.id}
                  variants={fadeInUp}
                  className={`group relative hover:bg-fg hover:text-bg transition-colors ${
                    i !== 0 ? 'border-t-2 border-border' : ''
                  }`}
                >
                  <div className="grid grid-cols-12 gap-4 md:gap-8 p-6 sm:p-8 lg:p-10 items-start">
                    <div className="col-span-12 md:col-span-1">
                      <div
                        className="font-display font-black leading-none tracking-tighter"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                      >
                        {String(p.id).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 lg:col-span-7">
                      <div className="flex items-center gap-3 flex-wrap mb-3">
                        <span className="chip group-hover:border-bg group-hover:text-bg transition-colors">
                          {p.category}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-fg group-hover:text-bg/70">
                          {p.year} · {p.role}
                        </span>
                      </div>

                      <h3
                        className="font-display font-black uppercase tracking-tight leading-[0.95] mb-4"
                        style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.25rem)' }}
                      >
                        {p.title}
                      </h3>

                      <p className="text-base sm:text-lg leading-relaxed text-muted-fg group-hover:text-bg/80 max-w-2xl mb-5">
                        {p.description}
                      </p>

                      <ul className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <li
                            key={t}
                            className="chip group-hover:border-bg group-hover:text-bg transition-colors"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-12 md:col-span-4 flex md:justify-end items-start gap-2 flex-wrap">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-accent"
                        >
                          Demo <HiArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                      {p.code && (
                        <a
                          href={p.code}
                          target="_blank"
                          rel="noreferrer"
                          className="btn group-hover:bg-bg group-hover:text-fg group-hover:border-bg"
                        >
                          <AiFillGithub className="w-4 h-4" /> Código
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
