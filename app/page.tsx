import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { ForumInfoSection } from "@/components/forum-info-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import { ReserveStandSection } from "@/components/reserve-stand-section"
import { CompaniesSection } from "@/components/companies-section"
import { PanelistsCarousel } from "@/components/panelists-carousel"
import { ScrollDots } from "@/components/scroll-dots"
import { PlasmaBackgroundCSS } from "@/components/plasma-background"
import { CompaniesSectionCarousel } from "@/components/companies-section-carousel"

export default function HomePage() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start min-h-screen h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Dynamic background */}
            {/* If you want to tweak the effect, adjust PlasmaBackgroundCSS props */}
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
            {/* Lighter white overlay for clarity, preserves blue */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full max-h-screen overflow-hidden relative z-10">
            <HeroSection />
          </div>
        </section>
        
        {/* Gradient going left to right */}
        <section className="snap-start min-h-screen h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0 pointer-events-none" />
          <div className="w-full max-h-screen overflow-y-auto relative z-10 px-2 sm:px-4">
            <CountdownTimer />
          </div>
        </section>

        {/* Gradient going right to left (reversed) */}
        <section className="snap-start min-h-screen h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 scale-x-[-1] z-0 pointer-events-none">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full max-h-screen overflow-y-auto relative z-10 px-2 sm:px-4">
            <ForumInfoSection />
          </div>
        </section>

        {/* WHO WE ARE - Gradient going left to right */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0 pointer-events-none" />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <WhoWeAreSection />
          </div>
        </section>
        
        {/* Gradient going right to left (reversed) */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 scale-x-[-1] z-0 pointer-events-none">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ReserveStandSection />
          </div>
        </section>
        
        {/* COMPANIES - Gradient going left to right */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0 pointer-events-none" />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <CompaniesSection />
          </div>
        </section>
        
        {/* PANELISTS + COMPANIES CAROUSEL - Combined section collé au footer, full width */}
        <section className="snap-start flex flex-col items-center justify-end min-h-0 h-auto w-full relative pt-8 pb-0">
          <div className="absolute inset-0 scale-x-[-1] z-0 pointer-events-none">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.9} />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full relative z-10 flex flex-col items-center px-0">
            <div className="w-full mb-8">
              <PanelistsCarousel />
            </div>
            <div className="w-full">
              <CompaniesSectionCarousel />
            </div>
          </div>
        </section>
      </div>
      {/* Indicateurs de navigation */}
      <ScrollDots />
    </>
  )
}