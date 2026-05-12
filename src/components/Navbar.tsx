'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi';
import { SECTIONS } from '../constants/sections';
import { useActiveSection } from '../hooks/useActiveSection';
import { useDarkMode } from '../hooks/useDarkMode';

export const Navbar = () => {
  const { currentSection, scrollToSection } = useActiveSection();
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b-2 border-border"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-edge flex items-center justify-between h-16">
        <button
          onClick={() => scrollToSection('hero')}
          className="font-display font-black text-lg tracking-tight uppercase"
        >
          Sanan<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {SECTIONS.map((section, i) => {
            const active = currentSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative group px-3 py-2 font-mono text-xs uppercase tracking-widest"
              >
                <span className="text-muted-fg mr-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={active ? 'text-fg' : 'text-muted-fg group-hover:text-fg transition-colors'}>
                  {section.name}
                </span>
                {active && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="w-10 h-10 flex items-center justify-center border-2 border-border hover:bg-fg hover:text-bg transition-colors"
          >
            {isDark ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Menú"
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-border hover:bg-fg hover:text-bg transition-colors"
          >
            {isMenuOpen ? <HiX className="w-4 h-4" /> : <HiMenu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t-2 border-border bg-bg"
          >
            <div className="container-edge py-4 flex flex-col">
              {SECTIONS.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-baseline gap-3 py-3 border-b border-muted last:border-0 font-display font-bold text-2xl uppercase tracking-tight text-left hover:text-accent transition-colors"
                >
                  <span className="font-mono text-xs text-muted-fg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
