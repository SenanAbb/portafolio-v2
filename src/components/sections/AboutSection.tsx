'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeInRight, fadeInUp } from '../../constants/animations';

const education = [
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad de Malaga (UMA)',
    period: '2015 - 2021',
    status: 'Graduado',
    description:
      'Formación en programación, bases de datos, estructuras de datos, diseño de software y algoritmos. Finalicé con éxito la carrera.',
    icon: '🎓',
    gpa: '8.5/10',
  },
  {
    degree: 'Bootcamp Full Stack Web Developer',
    institution: 'Escuela SocraTech',
    period: '2024 - 2025',
    status: 'Finalizado',
    description:
      'Formación intensiva con foco práctico en desarrollo full stack moderno. Trabajo en equipo, buenas prácticas y metodologías ágiles.',
    icon: '💻',
    gpa: '100%',
  },
  {
    degree: 'Certificación Full Stack Developer',
    institution: 'Udemy',
    period: '2023',
    status: 'Certificado',
    description:
      'Aprendizaje autodidacta en desarrollo web con proyectos reales usando HTML, CSS, JavaScript, APIs y más.',
    icon: '📜',
    gpa: '100%',
  },
];

const personalInfo = {
  location: 'Málaga, España',
  email: 'senan996@gmail.com',
  linkedin: 'linkedin.com/in/sanan-abbasov/',
  languages: [
    'Español (Nativo)',
    'Inglés (Intermedio)',
    'Francés (Intermedio)',
    'Azerbejano (Nativo)',
  ],
  interests: ['Tecnología', 'Deporte', 'Viajes', 'Cocina', 'Música'],
};

const skills = [
  'Resolución de problemas',
  'Trabajo en equipo',
  'Liderazgo técnico',
  'Comunicación efectiva',
  'Aprendizaje continuo',
  'Pensamiento crítico',
  'Gestión de proyectos',
  'Metodologías ágiles',
  'Manejo de herramientas de desarrollo',
  'Manejo de bases de datos',
  'Manejo de frameworks y bibliotecas',
  'Manejo de lenguajes de programación',
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'education'>(
    'about'
  );

  return (
    <section
      id="about"
      data-section="about"
      className="h-screen w-screen flex-shrink-0 snap-start flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Elementos decorativos futuristas */}
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Patrón de ondas sutiles */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="waves-about"
              x="0"
              y="0"
              width="40"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q10 5 20 10 T40 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                opacity="0.6"
              />
              <path
                d="M0 15 Q10 10 20 15 T40 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#waves-about)"
            className="text-blue-500"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full h-full flex flex-col justify-center py-20">
        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-1 border border-white/30 dark:border-gray-700/30">
            {[
              { id: 'about', label: 'Perfil', icon: '👤' },
              { id: 'skills', label: 'Habilidades', icon: '🎯' },
              { id: 'education', label: 'Estudios', icon: '🎓' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as 'about' | 'skills' | 'education')
                }
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
                }`}
                style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenedor principal */}
        <div className="flex-1 max-h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
            {/* Imagen/Avatar - Siempre visible */}
            <motion.div
              className="relative order-1 lg:order-2 flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>

                {/* Efecto de cristal */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"></div>

                {/* Elementos decorativos flotantes */}
                <motion.div
                  className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute bottom-12 left-8 w-3 h-3 bg-white/20 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                />
                <img
                  src="/images/photo.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Información de contacto - Siempre visible */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-blue-500 text-sm">📍</span>
                    <span
                      className="text-gray-600 dark:text-gray-300"
                      style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                    >
                      {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-blue-500 text-sm">📧</span>
                    <span
                      className="text-gray-600 dark:text-gray-300"
                      style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                    >
                      {personalInfo.email}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-blue-500 text-sm">💼</span>
                    <span
                      className="text-gray-600 dark:text-gray-300"
                      style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                    >
                      {personalInfo.linkedin}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contenido dinámico */}
            <div className="order-2 lg:order-1 flex flex-col h-full">
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden h-full flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>

                    <div className="relative z-10 flex-1 flex flex-col space-y-4">
                      <div className="flex-1 space-y-3">
                        <p
                          className="text-gray-600 dark:text-gray-300 leading-relaxed"
                          style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}
                        >
                          Soy un desarrollador Full Stack apasionado por crear
                          soluciones digitales innovadoras. Con experiencia en
                          tecnologías modernas, me especializo en desarrollar
                          aplicaciones web escalables.
                        </p>

                        <p
                          className="text-gray-600 dark:text-gray-300 leading-relaxed"
                          style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}
                        >
                          Mi enfoque se centra en escribir código limpio,
                          mantener las mejores prácticas y estar siempre
                          actualizado con las últimas tendencias tecnológicas.
                        </p>

                        {/* Idiomas */}
                        <div className="pt-2">
                          <h4
                            className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center space-x-2"
                            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                          >
                            <span>🌐</span>
                            <span>Idiomas</span>
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {personalInfo.languages.map((language, index) => (
                              <motion.div
                                key={language}
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                                <span
                                  style={{
                                    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                  }}
                                >
                                  {language}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Intereses */}
                        <div className="pt-2">
                          <h4
                            className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center space-x-2"
                            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                          >
                            <span>🎨</span>
                            <span>Intereses</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {personalInfo.interests.map((interest, index) => (
                              <motion.span
                                key={interest}
                                className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium border border-blue-200/50 dark:border-blue-700/50"
                                style={{
                                  fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {interest}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden h-full flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5"></div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 h-full content-start">
                          {skills.map((skill, index) => (
                            <motion.div
                              key={skill}
                              className="flex items-center space-x-3 p-2 sm:p-3 bg-white/40 dark:bg-gray-700/40 rounded-lg backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30 group hover:bg-white/60 dark:hover:bg-gray-600/60 transition-all duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span
                                className="text-gray-700 dark:text-gray-300 font-medium"
                                style={{
                                  fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                }}
                              >
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden h-full flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-blue-600/5 to-green-600/5"></div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex-1 space-y-3 overflow-y-auto">
                        {education.map((edu, index) => (
                          <motion.div
                            key={index}
                            className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm p-3 rounded-xl border border-gray-200/30 dark:border-gray-600/30 relative overflow-hidden group hover:bg-white/60 dark:hover:bg-gray-600/60 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="text-xl flex-shrink-0">
                                {edu.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                  <h4
                                    className="font-bold text-gray-800 dark:text-white pr-2"
                                    style={{
                                      fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                                    }}
                                  >
                                    {edu.degree}
                                  </h4>
                                  <div className="flex items-center space-x-1 mt-1 sm:mt-0">
                                    <span
                                      className={`px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                                        edu.status === 'Graduado'
                                          ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                                          : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                      }`}
                                      style={{
                                        fontSize:
                                          'clamp(0.625rem, 1.2vw, 0.75rem)',
                                      }}
                                    >
                                      {edu.status}
                                    </span>
                                    <span
                                      className="text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded-full"
                                      style={{
                                        fontSize:
                                          'clamp(0.625rem, 1.2vw, 0.75rem)',
                                      }}
                                    >
                                      {edu.gpa}
                                    </span>
                                  </div>
                                </div>
                                <p
                                  className="text-blue-600 dark:text-blue-400 font-medium mb-1"
                                  style={{
                                    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                  }}
                                >
                                  {edu.institution}
                                </p>
                                <p
                                  className="text-gray-500 dark:text-gray-400 mb-1"
                                  style={{
                                    fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
                                  }}
                                >
                                  {edu.period}
                                </p>
                                <p
                                  className="text-gray-600 dark:text-gray-300"
                                  style={{
                                    fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
                                  }}
                                >
                                  {edu.description}
                                </p>
                              </div>
                            </div>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-r-full"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
