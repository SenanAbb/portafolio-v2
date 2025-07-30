'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '../../constants/animations';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Web Developer',
    company: 'Freelance',
    period: '2023 - Presente',
    description:
      'Desarrollo de aplicaciones web modernas con enfoque en experiencia de usuario. Trabajo con clientes creando soluciones a medida, desde el diseño hasta la implementación.',
    icon: '🧑‍💻',
    technologies: ['Next.js', 'React', 'Node.js', 'MySQL', 'MongoDB'],
    achievements: [
      'Desarrollé una web de reservas de viajes con cálculo dinámico de precios',
      'Implementé una web para una abogada multilingüe con SEO y contenido legal',
      'Refactoricé mi portafolio para mejorar accesibilidad y performance',
    ],
  },
  {
    id: 2,
    title: 'Desarrollador Full Stack',
    company: 'Wiper Gaming',
    period: '2023',
    description:
      'Diseño y desarrollo de plataformas para eventos, torneos y gestión de comunidad gamer. Participación activa en tareas front y back.',
    icon: '🎮',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Git'],
    achievements: [
      'Desarrollé módulos para la gestión de equipos y rankings',
      'Implementé componentes reutilizables con diseño responsive',
      'Colaboré en la conexión con APIs de terceros para estadísticas en tiempo real',
    ],
  },
  {
    id: 3,
    title: 'Estudiante Full Stack Web Developer',
    company: 'SocraTech',
    period: '2024 - 2025',
    description:
      'Bootcamp intensivo con enfoque práctico en desarrollo web moderno. Trabajo en equipo, metodologías ágiles y construcción de proyectos completos.',
    icon: '🚀',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Git'],
    achievements: [
      'Lideré el desarrollo de un portal para gestión de hospitales y médicos',
      'Creé componentes reutilizables y protegí rutas con sesiones seguras',
      'Mejoré el diseño UI de varios proyectos usando Bootstrap y CSS modular',
    ],
  },
  {
    id: 4,
    title: 'Estudiante de Ingeniería de Software',
    company: 'Universidad',
    period: '2015 - 2021',
    description:
      'Formación académica en fundamentos de programación, estructuras de datos, arquitectura de software, bases de datos y diseño de sistemas.',
    icon: '🎓',
    technologies: ['Java', 'C++', 'MySQL', 'HTML', 'CSS'],
    achievements: [
      'Finalicé la carrera con éxito',
      'Participé en prácticas relacionadas con desarrollo de software',
      'Construí una base sólida en algoritmos y programación orientada a objetos',
    ],
  },
];

export const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(1);
  const currentExp =
    experiences.find((exp) => exp.id === activeExperience) || experiences[0];

  return (
    <section
      id="experience"
      data-section="experience"
      className="min-h-screen w-screen flex-shrink-0 snap-start flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Elementos decorativos futuristas */}
      <div className="absolute top-10 sm:top-20 left-1/4 w-28 sm:w-40 md:w-56 h-28 sm:h-40 md:h-56 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-36 sm:w-52 md:w-72 h-36 sm:h-52 md:h-72 bg-gradient-to-r from-blue-400/25 to-cyan-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Patrón de líneas sutiles */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="lines-exp"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0L20 20M20 0L0 20"
                stroke="currentColor"
                strokeWidth="0.2"
                opacity="0.3"
              />
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#lines-exp)"
            className="text-purple-500"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Botones numerados */}
        <motion.div
          className="flex justify-center space-x-4 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {experiences.map((exp) => (
            <motion.button
              key={exp.id}
              onClick={() => setActiveExperience(exp.id)}
              className={`w-12 h-12 rounded-full font-bold text-lg transition-all duration-300 ${
                activeExperience === exp.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-110'
                  : 'bg-white/20 dark:bg-gray-800/20 text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30'
              }`}
              whileHover={{ scale: activeExperience === exp.id ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {exp.id}
            </motion.button>
          ))}
        </motion.div>

        {/* Contenedor de experiencia */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 opacity-50"></div>

              {/* Línea decorativa */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <div className="text-4xl">{currentExp.icon}</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                        {currentExp.title}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                        {currentExp.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-sm sm:text-base">
                    {currentExp.period}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                  {currentExp.description}
                </p>

                {/* Tecnologías */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExp.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Logros */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Logros principales
                  </h4>
                  <ul className="space-y-2">
                    {currentExp.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Elementos decorativos internos */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 right-6 w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
