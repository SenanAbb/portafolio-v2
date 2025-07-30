'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '../../constants/animations';

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 88, icon: '▲' },
      { name: 'TypeScript', level: 80, icon: '📘' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨' },
      { name: 'Bootstrap', level: 80, icon: '🅱️' },
      { name: 'EJS', level: 70, icon: '📝' },
      { name: 'HTML/CSS', level: 90, icon: '🌐' },
      { name: 'Framer Motion', level: 70, icon: '🎭' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express.js', level: 85, icon: '🚀' },
      { name: 'REST APIs', level: 90, icon: '🔗' },
      { name: 'Java', level: 70, icon: '☕' },
      { name: 'PHP', level: 65, icon: '🐘' },
    ],
  },
  {
    id: 'database',
    name: 'Base de Datos',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 80, icon: '🐬' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'PostgreSQL', level: 50, icon: '🐘' },
    ],
  },
  {
    id: 'tools',
    name: 'Herramientas',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90, icon: '🔧' },
      { name: 'Vercel', level: 85, icon: '▲' },
      { name: 'Figma', level: 70, icon: '🎨' },
      { name: 'Linux', level: 45, icon: '🐧' },
      { name: 'Docker', level: 40, icon: '🐳' },
    ],
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const currentCategory =
    skillCategories.find((cat) => cat.id === activeCategory) ||
    skillCategories[0];

  return (
    <section
      id="skills"
      data-section="skills"
      className="min-h-screen w-screen flex-shrink-0 snap-start flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800 px-4 sm:px-6 relative"
    >
      {/* Elementos decorativos futuristas */}
      <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-30 sm:w-45 md:w-60 h-30 sm:h-45 md:h-60 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Patrón de líneas sutiles y discreto */}
      <div className="absolute inset-0 opacity-2 dark:opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="subtle-grid-skills"
              x="0"
              y="0"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 0L0 0 0 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.1"
                opacity="0.3"
              />
              <circle
                cx="12.5"
                cy="12.5"
                r="0.3"
                fill="currentColor"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#subtle-grid-skills)"
            className="text-blue-400"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Navegación por categorías */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white/20 dark:bg-gray-800/20 text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30'
              }`}
              whileHover={{
                scale: activeCategory === category.id ? 1.05 : 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm sm:text-base">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Contenedor de skills */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
        >
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5"></div>

          {/* Header de categoría */}
          <div className="flex items-center justify-center space-x-3 mb-8 relative z-10">
            <span className="text-4xl">{currentCategory.icon}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              {currentCategory.name}
            </h3>
          </div>

          {/* Grid de skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-gray-200/30 dark:border-gray-600/30 relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                {/* Efecto de hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex justify-between items-center mb-3 relative z-10">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{skill.icon}</span>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base">
                    {skill.level}%
                  </span>
                </div>

                {/* Barra de progreso */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 relative overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2 + index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    {/* Efecto de brillo en la barra */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm"></div>
              </motion.div>
            ))}
          </div>

          {/* Elementos decorativos internos */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-md"></div>
        </motion.div>
      </div>
    </section>
  );
};
