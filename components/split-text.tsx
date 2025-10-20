"use client"

import { useEffect, useState } from "react"

interface SplitTextProps {
  text: string
  className?: string
  animationDelay?: number
  staggerDelay?: number
  animationType?: "fadeUp" | "scale" | "rotate" | "slideRight"
}

export function SplitText({ 
  text, 
  className = "", 
  animationDelay = 0,
  staggerDelay = 50,
  animationType = "fadeUp"
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, animationDelay)
    
    return () => clearTimeout(timer)
  }, [animationDelay, text]) // Re-trigger when text changes

  // Reset animation when text changes
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [text])

  const getAnimationClass = (type: string) => {
    switch (type) {
      case "fadeUp":
        return "animate-[fadeInUp_0.8s_ease-out_both]"
      case "scale":
        return "animate-[scaleIn_0.6s_ease-out_both]"
      case "rotate":
        return "animate-[rotateIn_0.8s_ease-out_both]"
      case "slideRight":
        return "animate-[slideInRight_0.6s_ease-out_both]"
      default:
        return "animate-[fadeInUp_0.8s_ease-out_both]"
    }
  }

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={`${text}-${index}`} // Include text in key to force re-render
          className={`inline-block transition-all duration-300 ${
            isVisible ? getAnimationClass(animationType) : "opacity-0 translate-y-4"
          }`}
          style={{
            animationDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
            animationFillMode: 'both'
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}