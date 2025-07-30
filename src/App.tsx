'use client';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Desktop: Carousel horizontal */}
      <main className="hidden md:flex md:h-screen md:overflow-x-auto md:overflow-y-hidden md:scroll-smooth snap-x snap-mandatory scrollbar-hide">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Mobile: Scroll vertical */}
      <main className="md:hidden flex flex-col">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
