"use client"

import { Sparkles } from "lucide-react"

export function CompaniesSection() {
  // Logos fictifs pour la démonstration - remplacez par vos vrais logos
  const companyLogos = [
    "/img/companies/logo1.png",
    "/img/companies/logo2.png",
    "/img/companies/logo3.png",
    "/img/companies/logo4.png",
    "/img/companies/logo5.png",
    "/img/companies/logo6.png",
  ]

  return (
    <section className="py-16 md:py-24 h-full flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Coming Soon Message */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nos <span style={{ color: '#FCCD11' }}>Partenaires</span>
            </h2>
          </div>
          
          {/* Bouton "Bientôt disponible" placé en dessous */}
          <div className="mb-8">
            <div className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-xl md:text-2xl font-semibold text-[#00ADB5]">
                Bientôt disponible
              </p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Les entreprises participantes seront annoncées très prochainement
          </p>
        </div>

        {/* Logo Grid - Blurred Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center justify-center hover:scale-105 transition-transform aspect-square relative overflow-hidden group"
            >
              {/* Placeholder for company logos */}
              <div className="w-full h-full flex items-center justify-center">
                <div 
                  className="w-24 h-24 rounded-xl flex items-center justify-center text-white font-bold text-4xl"
                  style={{ 
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #006b75, #006b75)' 
                      : 'linear-gradient(135deg, #00ADB5, #00ADB5)'
                  }}
                >
                  ?
                </div>
              </div>
              
              {/* Uncomment when you have real logos */}
              {/* <img 
                src={logo} 
                alt={`Company ${index + 1}`} 
                className="w-32 h-32 object-contain filter blur-sm group-hover:blur-none transition-all" 
              /> */}
              
              {/* Coming soon overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 to-cyan-400/15 backdrop-blur-[2px] flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg mb-6">
            Restez connectés pour découvrir nos partenaires
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00ADB5] border border-white/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-white font-medium">Annonce imminente</span>
          </div>
        </div>
      </div>
    </section>
  )
}