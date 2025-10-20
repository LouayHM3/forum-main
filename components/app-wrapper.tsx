"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { SplashScreen } from "@/components/splash-screen"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useSplashScreen } from "@/hooks/use-splash-screen"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const { isShowingSplash, completeSplash } = useSplashScreen()
  const [shouldShowSplash, setShouldShowSplash] = useState(true)

  useEffect(() => {
    // Small delay to ensure proper mounting
    const timer = setTimeout(() => {
      setShouldShowSplash(isShowingSplash)
    }, 100)

    return () => clearTimeout(timer)
  }, [isShowingSplash])

  const handleSplashComplete = () => {
    completeSplash()
    setShouldShowSplash(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {shouldShowSplash && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      
      {!shouldShowSplash && (
        <div key="main-content" className="min-h-screen">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}