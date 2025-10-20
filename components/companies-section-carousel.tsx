"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function CompaniesSectionCarousel() {
  // 36 images dans /public/entreprise/
  const images = Array.from({ length: 36 }, (_, i) => `/entreprise/${i + 1}.png`)

  const scrollRef = useRef<HTMLDivElement>(null)

  // Animation continue du carrousel
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const speed = 0.5 // pixels/frame — ajuste la vitesse ici
    const animate = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0 // reset boucle infinie
      } else {
        scrollContainer.scrollLeft += speed
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section id="forum" className="py-10 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 text-2xl md:text-3xl font-bold text-[#28384d]">
          CEUX QUI NOUS ONT FAIT CONFIANCE
        </h2>

        {/* Conteneur du carrousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-hidden whitespace-nowrap"
          >
            {/* On duplique les images pour un effet continu */}
            {[...images, ...images].map((src, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-20 relative">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Petit effet de fondu sur les bords */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
