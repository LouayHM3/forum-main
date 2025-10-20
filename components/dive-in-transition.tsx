"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface DiveInTransitionProps {
  isActive: boolean
  onComplete: () => void
}

export function DiveInTransition({ isActive, onComplete }: DiveInTransitionProps) {
  const [showDiveEffect, setShowDiveEffect] = useState(false)

  useEffect(() => {
    if (isActive) {
      setShowDiveEffect(true)
      // Complete the transition after the dive effect
      setTimeout(() => {
        onComplete()
        setShowDiveEffect(false)
      }, 2000)
    }
  }, [isActive, onComplete])

  if (!showDiveEffect) return null

  return (
    <motion.div
      className="fixed inset-0 z-[150] bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      {/* Perspective tunnel effect */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        {/* Multiple concentric circles creating tunnel effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-secondary/30 rounded-full"
            initial={{
              scale: 0.1,
              opacity: 0,
              rotateZ: 0,
            }}
            animate={{
              scale: 15,
              opacity: [0, 0.6, 0.2, 0],
              rotateZ: 360,
            }}
            transition={{
              duration: 1.8,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
            }}
          />
        ))}
      </div>

      {/* Diving particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/60 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: "50%",
              y: "50%",
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: Math.random() * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central focal point */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 1, 3],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="w-4 h-4 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
      </motion.div>

      {/* "Diving in" text effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, z: -100 }}
        animate={{ opacity: [0, 1, 0], z: [0, 50, 100] }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="text-center">
          <motion.p
            className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1, 1.5], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: 0.3 }}
          >
            ON Y PLONGE
          </motion.p>
          <motion.div
            className="h-1 w-20 bg-secondary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Radial blur overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 80%, black 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 1] }}
        transition={{ duration: 1.8 }}
      />
    </motion.div>
  )
}