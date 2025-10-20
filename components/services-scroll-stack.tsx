"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Briefcase, Code, Zap, Cog } from "lucide-react"

const services = [
  {
    id: "consulting",
    title: "Consulting",
    description: "Conseil et expertise en management, stratégie d'entreprise et gestion de projets pour optimiser vos performances.",
    icon: "/img/services/consu.png",
    iconComponent: Briefcase,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    number: "01"
  },
  {
    id: "informatique", 
    title: "Informatique",
    description: "Développement web, mobile, intelligence artificielle et solutions logicielles sur mesure pour vos besoins.",
    icon: "/img/services/it.png",
    iconComponent: Code,
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    number: "02"
  },
  {
    id: "electrique",
    title: "Électrique", 
    description: "Conception et études électriques, automatisation et électrotechnique pour vos installations industrielles.",
    icon: "/img/services/elect.png",
    iconComponent: Zap,
    color: "from-yellow-600 to-orange-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
    number: "03"
  },
  {
    id: "mecanique",
    title: "Mécanique",
    description: "Conception mécanique, CAO, simulation numérique et prototypage pour vos projets d'innovation.",
    icon: "/img/services/meca.png",
    iconComponent: Cog,
    color: "from-green-600 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-100",
    number: "04"
  }
]

export function ServicesScrollStack() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Layout: Text on left, Cards on right */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
                    Nos Prestations
                    <br className="hidden sm:block" />
                    <span className="text-primary/70">de Service</span>
                  </h2>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    Les domaines d'expertise de l'ENIT Junior Entreprise pour accompagner vos projets d'innovation.
                  </p>
                </div>
                
                {/* Summary Stats */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-primary/60">Domaines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-primary/60">Projets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-primary/60">Clients</div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group">
                    Découvrir tous nos services
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Services Cards */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.iconComponent
                  
                  return (
                    <div
                      key={service.id}
                      className="group relative"
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {/* Service Card */}
                      <div className={`relative bg-white rounded-2xl p-6 border border-primary/10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
                        hoveredService === service.id ? 'scale-105' : ''
                      }`}>
                        
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">{service.number}</span>
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${service.bgColor}`}>
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        
                        {/* Content */}
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-primary/70 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Hover Effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        
                        {/* Bottom Border Accent */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Additional Info Card */}
              <div className="mt-6 bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Besoin d'un service personnalisé ?</h4>
                    <p className="text-primary/70 text-sm leading-relaxed">
                      Nos étudiants ingénieurs peuvent s'adapter à vos besoins spécifiques. Contactez-nous pour discuter de votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
