'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { fadeInUp, staggerContainer } from '../../constants/animations';

// Hook para seguimiento del mouse
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

// Componente de partícula interactiva
const InteractiveParticle = ({ index }: { index: number }) => {
  const mousePosition = useMousePosition();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  useEffect(() => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - window.innerWidth * (0.1 + index * 0.1), 2) +
        Math.pow(mousePosition.y - window.innerHeight * (0.1 + index * 0.1), 2)
    );

    if (distance < 150) {
      const force = (150 - distance) / 150;
      x.set((mousePosition.x - window.innerWidth / 2) * force * 0.1);
      y.set((mousePosition.y - window.innerHeight / 2) * force * 0.1);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [mousePosition, x, y, index]);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-70"
      style={{
        left: `${10 + index * 10}%`,
        top: `${10 + index * 10}%`,
        x: springX,
        y: springY,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Number.POSITIVE_INFINITY,
        delay: Math.random() * 2,
      }}
    />
  );
};

// Componente de estadísticas
const StatCard = ({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    className="text-center p-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
      {label}
    </div>
  </motion.div>
);

export const HeroSection = () => {
  const [, setIsVisible] = useState(false);
  const mousePosition = useMousePosition();

  // Efecto parallax para elementos de fondo
  const mouseXSpring = useSpring(mousePosition.x);
  const mouseYSpring = useSpring(mousePosition.y);

  const rotateX = useTransform(
    mouseYSpring,
    [0, window.innerHeight || 800],
    [5, -5]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [0, window.innerWidth || 1200],
    [-5, 5]
  );

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      data-section="hero"
      className="min-h-screen w-screen flex-shrink-0 snap-start flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Elementos decorativos futuristas con parallax */}
      <motion.div
        className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        style={{ rotateX, rotateY }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        style={{ rotateX: rotateX, rotateY: rotateY }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-2xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />

      {/* Partículas interactivas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <InteractiveParticle key={i} index={i} />
        ))}
      </div>

      {/* Grid decorativo animado */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <motion.div
          className="w-full h-full bg-grid-pattern"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Contenido principal */}
      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Saludo animado */}
        <motion.div className="mb-4 sm:mb-6" variants={fadeInUp}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium backdrop-blur-sm">
            👋 ¡Hola! Bienvenido a mi portafolio
          </span>
        </motion.div>

        {/* Título principal con animación de escritura */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6"
          variants={fadeInUp}
        >
          Soy{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Creativo',
                2000,
                'Innovador',
                2000,
                'Full Stack',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
          variants={fadeInUp}
        >
          Transformo ideas en{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            experiencias digitales
          </span>{' '}
          excepcionales. Especializado en desarrollo Full Stack con tecnologías
          modernas.
        </motion.p>

        {/* Estadísticas */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          <StatCard number="3+" label="Años Exp." delay={0.2} />
          <StatCard number="15+" label="Tecnologías" delay={0.4} />
          <StatCard number="100%" label="Calidad" delay={0.7} />
          <StatCard number="100%" label="Dedicación" delay={0.5} />
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 mb-8 sm:mb-12"
          variants={fadeInUp}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg text-sm sm:text-base relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            onClick={() => handleDownloadResume()}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Descargar CV</span>
              <span className="text-lg">📄</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>

        {/* Tecnologías principales */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {['React', 'TypeScript', 'Node.js', 'MySQL', 'MongoDB'].map(
            (tech, index) => (
              <motion.span
                key={tech}
                className="px-3 sm:px-4 py-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Elementos decorativos adicionales */}
      <div className="absolute top-4 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border border-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-8 sm:right-16 w-4 sm:w-6 h-4 sm:h-6 bg-purple-400/40 rounded-full animate-bounce"></div>
      <div
        className="absolute bottom-16 left-8 sm:left-16 w-6 sm:w-8 h-6 sm:h-8 border-2 border-cyan-400/40 rotate-45 animate-spin"
        style={{ animationDuration: '8s' }}
      ></div>
    </section>
  );
};
