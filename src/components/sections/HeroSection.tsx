'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../constants/animations';

const stats = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '15+', label: 'Tecnologías' },
  { value: '10+', label: 'Proyectos entregados' },
  { value: '100%', label: 'Dedicación' },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="grain" />

      <div className="container-edge w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10 flex-wrap">
            <span className="section-label">01 / Inicio</span>
            <span className="font-mono text-xs text-muted-fg flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 inline-block animate-pulse" />
              Disponible para proyectos
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display font-black uppercase leading-[0.85] tracking-tighter text-balance w-full"
            style={{ fontSize: 'clamp(3.5rem, 13vw, 12rem)' }}
          >
            Sanan
            <br />
            Abbasov<span className="text-accent">.</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-12 max-w-3xl">
            <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
              Soy{' '}
              <span className="text-accent">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Frontend Engineer',
                    2000,
                    'Creador digital',
                    2000,
                    'Solucionador de problemas',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-muted-fg max-w-2xl leading-relaxed">
              Transformo ideas en experiencias digitales. Especializado en
              aplicaciones web modernas con foco en performance, accesibilidad
              y diseño intencional.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
            >
              <HiDownload className="w-4 h-4" /> Descargar CV
            </a>
            <a
              href="https://github.com/SenanAbb"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <AiFillGithub className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanan-abbasov/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <AiFillLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-edge mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border-2 border-border"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group relative p-6 sm:p-8 lg:p-10 bg-bg hover:bg-fg hover:text-bg transition-colors overflow-hidden"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-fg group-hover:text-accent mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="font-display font-black leading-none mb-3 tracking-tighter"
                style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}
              >
                {s.value}
              </div>
              <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-muted-fg group-hover:text-bg/70">
                {s.label}
              </div>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container-edge mt-12 flex justify-end">
        <a
          href="#about"
          className="font-mono text-xs uppercase tracking-widest text-muted-fg hover:text-fg transition-colors flex items-center gap-2"
        >
          Scroll <HiArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
