"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Triangle, Square, Hexagon } from "lucide-react"

export function OurAxesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const axes = [
    {
      id: "formation",
      title: "Axe Formation",
      description: "Formation et développement des compétences techniques et professionnelles des étudiants ingénieurs.",
      icon: "/img/axes/formation.png",
      color: "from-blue-500 to-purple-600",
      shape: "triangle",
      number: "01"
    },
    {
      id: "project",
      title: "Axe Projet",
      description: "Réalisation de prestations de services et projets pour les entreprises et organismes partenaires.",
      icon: "/img/axes/projet.png",
      color: "from-purple-500 to-pink-600",
      shape: "square",
      number: "02"
    },
    {
      id: "event",
      title: "Axe Événement",
      description: "Organisation d'événements et contribution au développement de l'écosystème entrepreneurial tunisien.",
      icon: "/img/axes/event.png",
      color: "from-pink-500 to-red-600",
      shape: "hexagon",
      number: "03"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % axes.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + axes.length) % axes.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // Change every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const GeometricShape = ({ shape, className }: { shape: string, className?: string }) => {
    const baseClasses = `w-6 h-6 ${className}`
    
    switch (shape) {
      case "triangle":
        return <Triangle className={baseClasses} />
      case "square":
        return <Square className={baseClasses} />
      case "hexagon":
        return <Hexagon className={baseClasses} />
      default:
        return <Square className={baseClasses} />
    }
  }

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rotate-45 rounded-lg"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-primary/15 rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-primary/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-primary/25 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance text-primary">
              Nos Axes
            </h2>
            <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto text-pretty">
              Les piliers stratégiques de l'ENIT Junior Entreprise
            </p>
          </div>

          {/* Modern Geometric Carousel */}
          <div 
            className="relative max-w-5xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 text-primary transition-transform group-hover:-translate-x-1" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 text-primary transition-transform group-hover:translate-x-1" />
            </button>

            {/* Carousel Container */}
            <div className="relative h-[400px] flex items-center justify-center">
              {axes.map((axe, index) => {
                const isActive = index === currentIndex
                const isPrev = index === (currentIndex - 1 + axes.length) % axes.length
                const isNext = index === (currentIndex + 1) % axes.length
                
                let transform = 'translateX(200px) scale(0.8) rotateY(45deg)'
                let zIndex = 1
                let opacity = 0.3
                
                if (isActive) {
                  transform = 'translateX(0) scale(1) rotateY(0deg)'
                  zIndex = 10
                  opacity = 1
                } else if (isPrev) {
                  transform = 'translateX(-180px) scale(0.85) rotateY(-25deg)'
                  zIndex = 5
                  opacity = 0.6
                } else if (isNext) {
                  transform = 'translateX(180px) scale(0.85) rotateY(25deg)'
                  zIndex = 5
                  opacity = 0.6
                }
                
                return (
                  <div
                    key={axe.id}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      transformStyle: 'preserve-3d'
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    {/* Geometric Card */}
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 w-80 h-80 border border-primary/20 shadow-2xl group hover:shadow-primary/10 hover:shadow-3xl transition-all duration-500">
                      {/* Geometric Background Pattern */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-primary/10 rotate-45 rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 border border-primary/15 rotate-12 rounded-full"></div>
                      </div>
                      
                      {/* Number Badge */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-all duration-500">
                        <span className="text-white font-bold text-lg">{axe.number}</span>
                      </div>
                      
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                          <Image
                            src={axe.icon}
                            alt={axe.title}
                            width={48}
                            height={48}
                            className="object-contain filter contrast-125"
                          />
                        </div>
                        {/* Geometric Shape Decoration */}
                        <div className="absolute -bottom-2 -right-2">
                          <GeometricShape 
                            shape={axe.shape} 
                            className="text-primary/30 group-hover:text-primary/60 transition-all duration-300" 
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="font-bold text-2xl mb-4 text-primary group-hover:text-primary/90 transition-colors duration-300">
                          {axe.title}
                        </h3>
                        <p className="text-primary/80 leading-relaxed group-hover:text-primary/90 transition-colors duration-300">
                          {axe.description}
                        </p>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Geometric Indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {axes.map((axe, index) => (
              <button
                key={axe.id}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 group ${
                  index === currentIndex
                    ? 'scale-125'
                    : 'scale-100 hover:scale-110'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center ${
                  index === currentIndex
                    ? 'border-primary bg-primary text-white shadow-lg shadow-primary/30'
                    : 'border-primary/30 bg-white/80 text-primary hover:border-primary/60 hover:bg-primary/10'
                }`}>
                  <GeometricShape shape={axe.shape} className="w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
