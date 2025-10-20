"use client"

import { useState } from 'react'

export function useSplashScreen() {
  const [isShowingSplash, setIsShowingSplash] = useState(true)
  const [hasShownSplash, setHasShownSplash] = useState(false)

  // Pas de useEffect - le splash s'affiche toujours au démarrage
  // Suppression du sessionStorage pour qu'il apparaisse à chaque refresh

  const completeSplash = () => {
    setIsShowingSplash(false)
    setHasShownSplash(true)
    // Pas de sessionStorage - splash à chaque visite/refresh
  }

  return {
    isShowingSplash,
    hasShownSplash,
    completeSplash
  }
}
