"use client"

import { useState } from "react"
import { ForumInfoSection } from "@/components/forum-info-section"
import { Clock } from "lucide-react"
import { PlasmaBackgroundCSS } from "@/components/plasma-background"
import { ServicesScrollStack } from "@/components/services-scroll-stack"
import  WhoWeAreSection  from "@/components/who-we-are-section"
import { OurAxesSection } from "@/components/our-axes-section"
import { ScrollDots } from "@/components/scroll-dots"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"exposants" | "panel" | "formations">("exposants")
  const [activeInfoTab, setActiveInfoTab] = useState<"exposants" | "panel" | "formations">("exposants")

  const panelists = [
    { name: "Dr. Ahmed Ben Salem", position: "CEO TechCorp", image: "/business-executive-portrait.png" },
    {
      name: "Mme. Leila Mansour",
      position: "Directrice Innovation",
      image: "/professional-business-woman-portrait.png",
    },
    { name: "M. Karim Trabelsi", position: "Expert Digital", image: "/professional-entrepreneur-portrait.png" },
  ]

  const formations = [
    { time: "09:00 - 10:30", title: "Leadership et Management", location: "Salle A" },
    { time: "11:00 - 12:30", title: "Innovation et Entrepreneuriat", location: "Salle B" },
    { time: "14:00 - 15:30", title: "Transformation Digitale", location: "Salle C" },
    { time: "16:00 - 17:30", title: "Soft Skills pour Ingénieurs", location: "Salle D" },
  ]

  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* FORUM INFO SECTION */}
        <section className="snap-start min-h-screen h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full max-h-screen overflow-y-auto relative z-10 px-2 sm:px-4">
            <ForumInfoSection />
          </div>
        </section>

        {/* TABS SECTION */}
        <section className="snap-start min-h-screen flex items-start justify-center relative pt-16">
          <div className="absolute inset-0 scale-x-[-1] z-0 pointer-events-none">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full relative z-20 px-4 py-8">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Informations <span style={{ color: '#FCCD11' }}>Pratiques</span>
                  </h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <button
                    onClick={() => setActiveInfoTab('exposants')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeInfoTab === 'exposants'
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Exposants
                  </button>
                  <button
                    onClick={() => setActiveInfoTab('panel')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeInfoTab === 'panel'
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Panel
                  </button>
                  <button
                    onClick={() => setActiveInfoTab('formations')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeInfoTab === 'formations'
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Formations
                  </button>
                </div>

                {/* Tab Content */}
                <div className="transition-all duration-300">
                  {activeInfoTab === 'exposants' && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold mb-6 text-center">Plan des Stands</h3>
                      <div className="text-center mb-6">
                        <p className="text-muted-foreground mb-4">
                          Découvrez l'emplacement des stands des entreprises participantes lors du Forum ENIT Entreprise 2025.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <img 
                          src="/exhibition-floor-plan-layout-stands.jpg" 
                          alt="Plan des stands" 
                          className="max-w-md w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  )}

                  {activeInfoTab === 'panel' && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold mb-6 text-center">Panel de Discussion</h3>
                      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                        <div>
                          <p className="text-muted-foreground mb-6">
                            Participez à nos panels de discussion avec des experts de l'industrie et des leaders d'opinion.
                          </p>
                          <ul className="space-y-2 text-muted-foreground mb-6">
                            <li>• Tables rondes avec les dirigeants</li>
                            <li>• Sessions de questions-réponses</li>
                            <li>• Discussions sur les tendances du marché</li>
                            <li>• Opportunités de networking</li>
                          </ul>
                        </div>
                        <div className="flex justify-center">
                          <img 
                            src="/panel.jpg" 
                            alt="Panel de discussion" 
                            className="w-full max-w-sm rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-4">Panélistes</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {panelists.map((panelist, index) => (
                          <div key={index} className="text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-3 border-primary">
                              <img
                                src={panelist.image || "/placeholder.svg"}
                                alt={panelist.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h5 className="font-bold text-base">{panelist.name}</h5>
                            <p className="text-sm text-muted-foreground">{panelist.position}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeInfoTab === 'formations' && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold mb-6 text-center">Sessions de Formation</h3>
                      <div className="space-y-4">
                        {formations.map((formation, index) => (
                          <div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                              <Clock size={18} />
                              {formation.time}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg mb-1">{formation.title}</h4>
                              <p className="text-sm text-muted-foreground">{formation.location}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0 pointer-events-none" />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <WhoWeAreSection />
          </div>
        </section>

        {/* OUR AXES SECTION */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 scale-x-[-1] z-0 pointer-events-none">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <OurAxesSection />
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0 pointer-events-none" />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ServicesScrollStack />
          </div>
        </section>
      </div>
      
      {/* Navigation dots */}
      <ScrollDots />
    </>
  )
}
