export const SECTIONS = [
  { id: "hero", name: "Inicio" },
  { id: "about", name: "Sobre mí" },
  { id: "experience", name: "Experiencia" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Proyectos" },
  { id: "contact", name: "Contacto" },
] as const

export type SectionId = (typeof SECTIONS)[number]["id"]
