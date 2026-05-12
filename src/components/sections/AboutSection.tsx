'use client';

import { motion } from 'framer-motion';
import { HiLocationMarker, HiMail, HiGlobe, HiAcademicCap } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../constants/animations';

const personalInfo = {
  location: 'Málaga, España',
  email: 'senan996@gmail.com',
  linkedin: 'linkedin.com/in/sanan-abbasov/',
};

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Azerbaijani', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
  { name: 'Francés', level: 'Intermedio' },
];

const softSkills = [
  'Resolución de problemas',
  'Trabajo en equipo',
  'Liderazgo técnico',
  'Comunicación efectiva',
  'Aprendizaje continuo',
  'Pensamiento crítico',
  'Gestión de proyectos',
  'Metodologías ágiles',
];

const education = [
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad de Málaga (UMA)',
    period: '2015 — 2021',
    gpa: '8.5/10',
  },
  {
    degree: 'Bootcamp Full Stack Web Developer',
    institution: 'Escuela SocraTech',
    period: '2024 — 2025',
    gpa: '100%',
  },
  {
    degree: 'Certificación Full Stack',
    institution: 'Udemy',
    period: '2023',
    gpa: '100%',
  },
];

export const AboutSection = () => {
  const year = new Date().getFullYear();

  return (
    <section
      id="about"
      data-section="about"
      className="relative py-24 md:py-32 border-t-2 border-border"
    >
      <div className="container-edge">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="flex flex-col"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="section-label">02 / Sobre mí</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black uppercase text-balance leading-[0.9] tracking-tight max-w-5xl"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Construyo <span className="text-accent">software</span> con propósito.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          >
            <aside className="lg:col-span-4 border-2 border-border bg-bg flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden border-b-2 border-border bg-muted">
                <img
                  src="/images/photo.webp"
                  alt="Sanan Abbasov"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 chip bg-bg">
                  Sanan / {year}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-1">
                    Perfil
                  </p>
                  <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl leading-tight">
                    Sanan Abbasov
                  </h3>
                  <p className="font-mono text-xs text-accent uppercase tracking-widest mt-1">
                    Full Stack Developer
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm border-t-2 border-border pt-4">
                  <li className="flex items-center gap-3">
                    <HiLocationMarker className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiMail className="w-4 h-4 text-accent flex-shrink-0" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-accent transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiGlobe className="w-4 h-4 text-accent flex-shrink-0" />
                    <a
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors break-all"
                    >
                      {personalInfo.linkedin}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="border-2 border-border bg-bg p-6 sm:p-8 space-y-5 text-base sm:text-lg text-fg/80 leading-relaxed">
                <p>
                  Desarrollador Full Stack con base en Málaga. Diseño y construyo
                  aplicaciones web modernas, escalables y accesibles. Mi enfoque:
                  <span className="text-fg font-semibold"> código limpio</span>,
                  <span className="text-fg font-semibold"> UX intencional</span> y
                  <span className="text-fg font-semibold"> performance medida</span>.
                </p>
                <p>
                  Vengo de la Ingeniería de Software académica y la complemento con
                  formación intensiva práctica. Trabajo cómodo en cualquier punto del
                  stack — del esquema de base de datos al pixel de la animación.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div className="border-2 border-border bg-bg p-6 flex flex-col">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-4">
                    Soft skills
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {softSkills.map((s) => (
                      <li key={s} className="chip">{s}</li>
                    ))}
                  </ul>

                  <div className="border-t-2 border-border pt-4 mt-auto">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-3">
                      Idiomas
                    </p>
                    <ul className="space-y-2 text-sm">
                      {languages.map((l) => (
                        <li key={l.name} className="flex items-center justify-between">
                          <span>{l.name}</span>
                          <span className="font-mono text-[10px] uppercase text-muted-fg">
                            {l.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-2 border-border bg-bg p-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-4 flex items-center gap-2">
                    <HiAcademicCap className="w-3 h-3" /> Formación
                  </p>
                  <ul className="space-y-4">
                    {education.map((e) => (
                      <li key={e.degree} className="border-l-2 border-border pl-4">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <h4 className="font-display font-bold text-base">{e.degree}</h4>
                          <span className="font-mono text-[10px] uppercase text-accent">{e.gpa}</span>
                        </div>
                        <p className="text-sm text-fg/70">{e.institution}</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg mt-1">
                          {e.period}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
