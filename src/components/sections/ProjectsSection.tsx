'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '../../constants/animations';

const projects = [
  {
    id: 1,
    title: 'Web Corporativa para Abogada',
    description:
      'Sitio web profesional y multilingüe desarrollado para una abogada especializada. Incluye animaciones suaves, formulario de contacto con envío por email y estructura optimizada para SEO legal.',
    tech: ['React', 'Framer Motion', 'Sendgrid', 'i18next', 'CSS Modules'],
    image: '/images/project1.webp',
    gradient: 'from-teal-500 to-emerald-600',
    icon: '⚖️',
    status: 'Completado',
    year: '2025',
    features: [
      'Internacionalización completa (ES, EN, FR)',
      'Animaciones con Framer Motion',
      'Formulario de contacto funcional con EmailJS',
      'Contenido legal estructurado para SEO',
    ],
    hasDemo: true,
    demoLink: 'https://www.avocat-asmaekirimov.com/',
    codeLink: 'https://github.com/SenanAbb/asmae-web-v2',
  },
  {
    id: 2,
    title: 'ConLaMielEnLosLabios',
    description:
      'Portal web creado durante el bootcamp SocraTech para gestión de colmenas, registro de apicultores y monitoreo de actividad en tiempo real. Proyecto completo full-stack.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
    image: '/images/project2.webp',
    gradient: 'from-yellow-400 to-amber-500',
    icon: '🐝',
    status: 'Completado',
    year: '2025',
    features: [
      'Gestión de usuarios y roles',
      'Registro y edición de colmenas',
      'Panel administrativo con estadísticas',
      'Autenticación con sesiones seguras',
    ],
    hasDemo: false,
    codeLink: 'https://github.com/SenanAbb/ConLaMielEnLosLabios',
  },
  {
    id: 3,
    title: 'Clon de Spotify',
    description:
      'Clon funcional de Spotify con frontend responsive, navegación por secciones y reproducción simulada de pistas musicales. Diseño moderno y experiencia fluida.',
    tech: ['React', 'Tailwind CSS', 'React Router', 'Fake API'],
    image: '/images/project3.webp',
    gradient: 'from-green-500 to-black',
    icon: '🎵',
    status: 'Completado',
    year: '2024',
    features: [
      'Reproducción de pistas simulada',
      'Listas y álbumes con estilo Spotify',
      'Modo oscuro por defecto',
      'Enrutado SPA con React Router',
    ],
    hasDemo: false,
    codeLink: 'https://github.com/SenanAbb/spotify-clone',
  },
  {
    id: 4,
    title: 'Clon de Trello',
    description:
      'Aplicación tipo Trello para gestión de tareas con drag and drop, creación de tableros, columnas y tarjetas. Interfaz intuitiva y persistencia local.',
    tech: ['React', 'React DnD', 'Tailwind CSS', 'Context API'],
    image: '/images/project4.webp',
    gradient: 'from-indigo-500 to-blue-600',
    icon: '🗂️',
    status: 'Completado',
    year: '2023',
    features: [
      'Drag and drop de tarjetas entre columnas',
      'Creación y edición de tableros',
      'Persistencia con localStorage',
      'Diseño inspirado en Trello',
    ],
    hasDemo: false,
    codeLink: 'https://github.com/SenanAbb/trello-clone',
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(1);
  const currentProject =
    projects.find((project) => project.id === activeProject) || projects[0];

  return (
    <section
      id="projects"
      data-section="projects"
      className="min-h-screen w-screen flex-shrink-0 snap-start flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800 px-4 sm:px-6 relative"
    >
      {/* Elementos decorativos futuristas */}
      <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Patrón de ondas muy sutiles */}
      <div className="absolute inset-0 opacity-2 dark:opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="subtle-waves-projects"
              x="0"
              y="0"
              width="50"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 15 Q12.5 10 25 15 T50 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.08"
                opacity="0.25"
              />
              <path
                d="M0 20 Q12.5 25 25 20 T50 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.06"
                opacity="0.15"
              />
              <circle
                cx="25"
                cy="15"
                r="0.2"
                fill="currentColor"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#subtle-waves-projects)"
            className="text-purple-400"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Navegación por proyectos */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`w-12 h-12 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeProject === project.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110'
                  : 'bg-white/20 dark:bg-gray-800/20 text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30'
              }`}
              whileHover={{ scale: activeProject === project.id ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.id}
            </motion.button>
          ))}
        </motion.div>

        {/* Contenedor del proyecto */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
            >
              {/* Header con gradiente */}
              <div
                className={`h-2 bg-gradient-to-r ${currentProject.gradient}`}
              ></div>

              <div className="p-6 sm:p-8">
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-purple-600/5 opacity-50"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                  {/* Información del proyecto */}
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{currentProject.icon}</div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                            {currentProject.title}
                          </h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {currentProject.year}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium ${
                                currentProject.status === 'Completado'
                                  ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                              }`}
                            >
                              {currentProject.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                      {currentProject.description}
                    </p>

                    {/* Características principales */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Características principales
                      </h4>
                      <ul className="space-y-2">
                        {currentProject.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tech.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-200/50 dark:border-purple-700/50"
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
                  </div>

                  {/* Imagen del proyecto */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-xl shadow-lg group">
                      <img
                        src={currentProject.image || '/placeholder.svg'}
                        alt={currentProject.title}
                        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Overlay con botones */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <motion.button
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium border border-white/30 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Ver Demo
                        </motion.button>
                        <motion.button
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium border border-white/30 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Ver Código
                        </motion.button>
                      </div>
                    </div>

                    {/* Elementos decorativos */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400/40 to-purple-400/40 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos internos */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-lg"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-md"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
