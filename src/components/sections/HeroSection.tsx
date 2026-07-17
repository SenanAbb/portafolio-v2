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

const terminalLines = [
  { prompt: '$ whoami', output: ['Sanan Abbasov', 'Ingeniero de Software @ Babel'] },
  { prompt: '$ pwd', output: ['~/malaga/spain'] },
  { prompt: '$ ls --stack', output: ['java · spring · angular · typescript', 'react · node · next.js · mongo · mysql', 'keycloak · sso · big data · docker'] },
  { prompt: '$ status --freelance', output: ['available for freelance', 'not open to full-time'] },
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
          className="grid grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 flex-wrap">
              <span className="section-label">01 / Inicio</span>
              <span className="font-mono text-xs text-muted-fg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 inline-block animate-pulse" />
                Disponible para freelance
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-black uppercase leading-[0.88] tracking-tighter text-balance w-full"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
            >
              Sanan
              <br />
              Abbasov<span className="text-accent">.</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-8 max-w-2xl">
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-[1.15]">
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
                      'Apasionado del código',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </p>
              <p className="mt-5 text-base sm:text-lg text-muted-fg max-w-xl leading-relaxed">
                Transformo ideas en experiencias digitales. Especializado en
                aplicaciones web modernas con foco en performance, accesibilidad
                y diseño intencional.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
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
          </div>

          <motion.div
            variants={fadeInUp}
            className="col-span-12 lg:col-span-5 lg:mt-12"
          >
            <div className="border-2 border-border bg-bg shadow-[6px_6px_0_0_rgb(var(--accent))]">
              <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-border bg-muted">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 border border-border bg-red-500" />
                  <span className="w-3 h-3 border border-border bg-yellow-500" />
                  <span className="w-3 h-3 border border-border bg-green-500" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-fg">
                  ~/sanan — zsh
                </span>
                <span className="font-mono text-[10px] text-muted-fg">{'⌘'}</span>
              </div>

              <div className="p-5 font-mono text-sm space-y-4">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={line.prompt}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.25, duration: 0.4 }}
                  >
                    <div className="text-accent">{line.prompt}</div>
                    {line.output.map((out, j) => (
                      <div key={j} className="text-fg/80 pl-3">
                        <span className="text-muted-fg mr-2">›</span>
                        {out}
                      </div>
                    ))}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + terminalLines.length * 0.25 }}
                  className="flex items-center"
                >
                  <span className="text-accent">$</span>
                  <span className="ml-2 w-2 h-4 bg-fg animate-blink" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-edge mt-16">
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
              className="group relative p-5 sm:p-6 lg:p-8 bg-bg hover:bg-fg hover:text-bg transition-colors overflow-hidden"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-fg group-hover:text-accent mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="font-display font-black leading-none mb-2 tracking-tighter"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              >
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-fg group-hover:text-bg/70">
                {s.label}
              </div>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container-edge mt-10 flex justify-end">
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
