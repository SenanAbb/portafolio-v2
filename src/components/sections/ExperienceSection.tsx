'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../constants/animations';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Web Developer',
    company: 'Freelance',
    period: '2023 — Presente',
    description:
      'Desarrollo de aplicaciones web modernas con foco en UX. Cliente directo, ciclo completo: diseño, implementación y deploy.',
    technologies: ['Next.js', 'React', 'Node.js', 'MySQL', 'MongoDB'],
    achievements: [
      'Web de reservas de viajes con cálculo dinámico de precios',
      'Sitio multilingüe para abogada con SEO legal',
      'Refactor del portafolio para accesibilidad y performance',
    ],
  },
  {
    id: 2,
    title: 'Desarrollador Full Stack',
    company: 'Wiper Gaming',
    period: '2023',
    description:
      'Plataformas para eventos, torneos y gestión de comunidad gamer. Front y back simultáneo.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Git'],
    achievements: [
      'Módulos para gestión de equipos y rankings',
      'Componentes reutilizables con diseño responsive',
      'Conexión con APIs de estadísticas en tiempo real',
    ],
  },
  {
    id: 3,
    title: 'Estudiante Full Stack',
    company: 'SocraTech',
    period: '2024 — 2025',
    description:
      'Bootcamp intensivo con enfoque práctico. Trabajo en equipo, metodologías ágiles y proyectos completos.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Git'],
    achievements: [
      'Líder técnico de portal hospitalario',
      'Componentes reutilizables y rutas protegidas',
      'Mejora UI con Bootstrap y CSS modular',
    ],
  },
  {
    id: 4,
    title: 'Ingeniería de Software',
    company: 'Universidad de Málaga',
    period: '2015 — 2021',
    description:
      'Fundamentos: estructuras de datos, arquitectura, BBDD y diseño de sistemas. Base sólida en algoritmos.',
    technologies: ['Java', 'C++', 'MySQL', 'HTML', 'CSS'],
    achievements: [
      'Graduado con éxito',
      'Prácticas en desarrollo de software',
      'Base sólida en OOP y algoritmos',
    ],
  },
];

export const ExperienceSection = () => {
  const [active, setActive] = useState(1);
  const current = experiences.find((e) => e.id === active) || experiences[0];

  return (
    <section
      id="experience"
      data-section="experience"
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
          <motion.div variants={fadeInUp} className="col-span-12 mb-8 flex items-end justify-between gap-4 flex-wrap">
            <span className="section-label">03 / Experiencia</span>
            <span className="font-mono text-xs text-muted-fg">
              {active} / {experiences.length}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="col-span-12 font-display font-black uppercase tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Trayecto<span className="text-accent">.</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="col-span-12 lg:col-span-4 mt-8">
            <ul className="border-2 border-border divide-y-2 divide-border bg-bg">
              {experiences.map((exp) => {
                const isActive = active === exp.id;
                return (
                  <li key={exp.id}>
                    <button
                      onClick={() => setActive(exp.id)}
                      className={`w-full text-left p-4 sm:p-5 flex items-center gap-4 transition-colors ${
                        isActive ? 'bg-fg text-bg' : 'hover:bg-muted'
                      }`}
                    >
                      <span className={`font-mono text-xs ${isActive ? 'text-accent' : 'text-muted-fg'}`}>
                        {String(exp.id).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-base sm:text-lg truncate">
                          {exp.title}
                        </p>
                        <p className={`font-mono text-[10px] uppercase tracking-widest mt-1 ${isActive ? 'text-bg/70' : 'text-muted-fg'}`}>
                          {exp.company} · {exp.period}
                        </p>
                      </div>
                      {isActive && <HiArrowRight className="w-4 h-4 flex-shrink-0" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="col-span-12 lg:col-span-8 mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="border-2 border-border bg-bg p-6 sm:p-8 lg:p-10 h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                  <div>
                    <h3 className="font-display font-black uppercase text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                      {current.title}
                    </h3>
                    <p className="font-mono text-sm text-accent mt-2 uppercase tracking-widest">
                      {current.company}
                    </p>
                  </div>
                  <span className="chip">{current.period}</span>
                </div>

                <p className="text-base sm:text-lg text-muted-fg leading-relaxed mb-6">
                  {current.description}
                </p>

                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-3">
                    Stack
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {current.technologies.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-3">
                    Logros
                  </p>
                  <ul className="space-y-2">
                    {current.achievements.map((a, i) => (
                      <motion.li
                        key={a}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex items-start gap-3 text-sm sm:text-base"
                      >
                        <span className="text-accent font-mono mt-1">→</span>
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
