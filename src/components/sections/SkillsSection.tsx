'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../../constants/animations';

type Level = 'Experto' | 'Avanzado' | 'Intermedio' | 'Básico';

const toLabel = (value: number): Level => {
  if (value >= 85) return 'Experto';
  if (value >= 70) return 'Avanzado';
  if (value >= 55) return 'Intermedio';
  return 'Básico';
};

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Framer Motion', level: 70 },
      { name: 'EJS', level: 70 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Java', level: 70 },
      { name: 'PHP', level: 65 },
    ],
  },
  {
    id: 'database',
    name: 'Databases',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 55 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Linux', level: 55 },
      { name: 'Docker', level: 55 },
    ],
  },
];

const levelDots: Record<Level, number> = {
  Experto: 4,
  Avanzado: 3,
  Intermedio: 2,
  Básico: 1,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const current =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <section
      id="skills"
      data-section="skills"
      className="relative py-24 md:py-32 border-t-2 border-border"
    >
      <div className="container-edge">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-12 gap-6 md:gap-10"
        >
          <motion.div variants={fadeInUp} className="col-span-12 mb-8">
            <span className="section-label">04 / Skills</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="col-span-12 lg:col-span-8 font-display font-black uppercase tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Lo que <span className="text-accent">manejo</span>.
          </motion.h2>

          <motion.div variants={fadeInUp} className="col-span-12 flex flex-wrap gap-2 mt-8">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 border-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'bg-fg text-bg border-fg'
                      : 'border-border hover:bg-fg hover:text-bg'
                  }`}
                >
                  {cat.name}{' '}
                  <span className="text-accent ml-1">[{cat.skills.length}]</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-12 mt-4 border-2 border-border bg-bg overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mr-[2px] -mb-[2px]">
              {current.skills.map((skill, i) => {
                const label = toLabel(skill.level);
                const dots = levelDots[label];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="bg-bg p-6 sm:p-7 group hover:bg-fg hover:text-bg transition-colors border-r-2 border-b-2 border-border"
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-4">
                      <h4 className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-fg group-hover:text-accent">
                        {label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-1.5 flex-1 ${
                            idx < dots
                              ? 'bg-accent'
                              : 'bg-muted group-hover:bg-bg/20'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
