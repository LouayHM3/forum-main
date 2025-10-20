'use client'

import { useState, useEffect } from 'react'

const sections = [
  'Accueil',
  'Compte à rebours',
  'À propos du Forum',
  'Réservation',
  'Panélistes',
  'Entreprises'
]

export function ScrollDots() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.snap-y')
      if (!scrollContainer) return
      
      const scrollTop = scrollContainer.scrollTop
      const sectionHeight = window.innerHeight
      const currentSection = Math.round(scrollTop / sectionHeight)
      
      setActiveSection(Math.max(0, Math.min(currentSection, sections.length - 1)))
    }

    const scrollContainer = document.querySelector('.snap-y')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (index: number) => {
    const scrollContainer = document.querySelector('.snap-y')
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
            index === activeSection 
              ? 'bg-secondary scale-125 shadow-lg' 
              : 'bg-white/30 hover:bg-white/50'
          }`}
          title={section}
          aria-label={`Aller à la section ${section}`}
        />
      ))}
    </div>
  )
}