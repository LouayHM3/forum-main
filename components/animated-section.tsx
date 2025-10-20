"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
  duration?: number
}

const animationClasses = {
  'fade-up': 'translate-y-8 opacity-0',
  'fade-in': 'opacity-0',
  'slide-left': '-translate-x-8 opacity-0',
  'slide-right': 'translate-x-8 opacity-0',
  'scale-up': 'scale-95 opacity-0'
}

const visibleClasses = {
  'fade-up': 'translate-y-0 opacity-100',
  'fade-in': 'opacity-100',
  'slide-left': 'translate-x-0 opacity-100',
  'slide-right': 'translate-x-0 opacity-100',
  'scale-up': 'scale-100 opacity-100'
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0,
  duration = 600
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}