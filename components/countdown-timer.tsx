"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-11-19T09:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const TimerCircle = ({ value, label }: { value: number; label: string }) => {
    const circumference = 2 * Math.PI * 45
    const progress = (value / (label === "Jours" ? 365 : label === "Heures" ? 24 : 60)) * circumference

    return (
      <div className="flex flex-col items-center gap-2 min-w-0">
        <div className="timer-circle relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full border-2 border-[#00ADB5]/30"></div>
          <svg className="w-full h-full relative z-10" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle cx="50" cy="50" r="45" className="stroke-[#00ADB5]/60" strokeWidth="2" fill="none" />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-[#00ADB5]"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              fill="none"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">{value}</span>
          </div>
        </div>
        <span className="text-xs sm:text-sm md:text-base font-medium text-white text-center">{label}</span>
      </div>
    )
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-balance text-[#00ADB5] leading-tight">
            Le compte à rebours a commencé
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F2F2F2] text-pretty max-w-2xl mx-auto">
            Ne manquez pas le plus grand événement de l&apos;année
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <TimerCircle value={timeLeft.days} label="Jours" />
          <TimerCircle value={timeLeft.hours} label="Heures" />
          <TimerCircle value={timeLeft.minutes} label="Minutes" />
          <TimerCircle value={timeLeft.seconds} label="Secondes" />
        </div>
      </div>
    </section>
  )
}
