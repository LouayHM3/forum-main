"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function PanelistsSection() {
  const [expandedPanelist, setExpandedPanelist] = useState<number | null>(null)

  const panelists = [
    {
      name: "Dr. Ahmed Ben Salem",
      position: "Directeur Général - TechCorp Tunisia",
      bio: "Expert en transformation digitale avec plus de 20 ans d'expérience",
      image: "/business-executive-portrait.png",
    },
    {
      name: "Mme. Leila Mansour",
      position: "DRH - Innovation Industries",
      bio: "Spécialiste en gestion des talents et développement des compétences",
      image: "/professional-business-woman-portrait.png",
    },
    {
      name: "M. Karim Trabelsi",
      position: "CEO - StartUp Hub",
      bio: "Entrepreneur et mentor pour les jeunes startups technologiques",
      image: "/professional-entrepreneur-portrait.png",
    },
    {
      name: "Dr. Sonia Gharbi",
      position: "Directrice Innovation - Global Tech",
      bio: "Pionnière dans l'intelligence artificielle et l'innovation",
      image: "/professional-tech-leader.png",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Nos Panélistes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Rencontrez les leaders qui partageront leur expertise et leur vision
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {panelists.map((panelist, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedPanelist(expandedPanelist === index ? null : index)}
                className="w-full p-6 flex items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={panelist.image || "/placeholder.svg"}
                      alt={panelist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{panelist.name}</h3>
                    <p className="text-sm text-muted-foreground">{panelist.position}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform ${expandedPanelist === index ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>

              {expandedPanelist === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{panelist.bio}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
