"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParallax } from "@/hooks/use-parallax"
import { SplitText } from "@/components/split-text"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const carouselTexts = [
    { text: "Forum ", highlight: "ENIT", suffix: " Entreprise" },
    { text: "Connectez-vous avec les leaders", highlight: "", suffix: "" },
    { text: "Découvrez les opportunités", highlight: "", suffix: "" }
  ]
  const parallaxOffset = useParallax(0.5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % carouselTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const renderCarouselText = () => {
    const current = carouselTexts[currentText]
    if (current.highlight) {
      return (
        <>
          <SplitText 
            text={current.text} 
            animationType="fadeUp"
            staggerDelay={80}
            animationDelay={200}
          />
          <span style={{ color: '#FCCD11' }}>
            <SplitText 
              text={current.highlight} 
              animationType="fadeUp"
              staggerDelay={80}
              animationDelay={200}
            />
          </span>
          <SplitText 
            text={current.suffix} 
            animationType="fadeUp"
            staggerDelay={80}
            animationDelay={200}
          />
        </>
      )
    }
    return (
      <SplitText 
        text={current.text} 
        animationType="fadeUp"
        staggerDelay={80}
        animationDelay={200}
      />
    )
  }

  return (
    <section className="relative h-screen w-full overflow-hidden video-overlay">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <source src="/img/img/videohome.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/15" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Carousel Text with Split Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
            {renderCarouselText()}
          </h1>

          {/* Subtitle with Split Animation */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto text-pretty leading-relaxed">
            <SplitText 
              text="Soyez les bienvenus le 19 novembre à l'ENIT"
              animationType="slideRight"
              staggerDelay={30}
              animationDelay={800}
            />
          </p>

          {/* CTA Button */}
          <Button asChild variant="pulse" size="lg" className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto">
            <Link href="/inscription">S&apos;inscrire</Link>
          </Button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
              <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}