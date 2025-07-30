"use client"

import { useEffect, useState, useCallback } from "react"
import type { SectionId } from "../constants/sections"

export const useHorizontalScroll = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>("hero")
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToSection = useCallback(
    (sectionId: SectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      if (isMobile) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        })
      }
    },
    [isMobile],
  )

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        // Lógica para móvil (scroll vertical)
        const windowHeight = window.innerHeight
        const sections = document.querySelectorAll("[data-section]")

        sections.forEach((section) => {
          const element = section as HTMLElement
          const rect = element.getBoundingClientRect()
          const sectionId = element.getAttribute("data-section") as SectionId

          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setCurrentSection(sectionId)
          }
        })
      } else {
        // Lógica para desktop (scroll horizontal) - MEJORADA
        const mainContainer = document.querySelector("main")
        if (!mainContainer) return

        const scrollLeft = mainContainer.scrollLeft
        const windowWidth = window.innerWidth
        const sections = document.querySelectorAll("[data-section]")

        sections.forEach((section, index) => {
          const element = section as HTMLElement
          const sectionId = element.getAttribute("data-section") as SectionId
          const sectionLeft = index * windowWidth
          const sectionRight = (index + 1) * windowWidth

          // Si el scroll está en el rango de esta sección
          if (scrollLeft >= sectionLeft - windowWidth / 2 && scrollLeft < sectionRight - windowWidth / 2) {
            if (sectionId !== currentSection) {
              setCurrentSection(sectionId)
            }
          }
        })
      }
    }

    // Convertir scroll vertical en horizontal (solo desktop)
    const handleWheel = (e: WheelEvent) => {
      if (isMobile) return

      e.preventDefault()

      const mainContainer = document.querySelector("main")
      if (!mainContainer) return

      const scrollAmount = e.deltaY * 2

      mainContainer.scrollBy({
        left: scrollAmount,
        behavior: "auto",
      })
    }

    // Event listeners
    const mainContainer = document.querySelector("main")
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll, { passive: true })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    if (!isMobile) {
      window.addEventListener("wheel", handleWheel, { passive: false })
    }

    // Initial call
    handleScroll()

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll)
      }
      window.removeEventListener("scroll", handleScroll)
      if (!isMobile) {
        window.removeEventListener("wheel", handleWheel)
      }
    }
  }, [isMobile, currentSection])

  return { currentSection, scrollToSection, isMobile }
}
