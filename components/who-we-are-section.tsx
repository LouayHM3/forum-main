import { Building2, Briefcase, Calendar } from "lucide-react"

export default function WhoWeAreSection() {
  const stats = [
    {
      icon: Building2,
      number: "3",
      label: "Axes stratégiques",
      description: "Pour votre développement"
    },
    {
      icon: Briefcase,
      number: "4",
      label: "Prestations de service",
      description: "Solutions sur mesure"
    },
    {
      icon: Calendar,
      number: "26",
      label: "Années d'excellence",
      description: "Années d'excellence"
    }
  ]

  return (
    <section className="relative h-full min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Description */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <span style={{ color: '#FCCD11' }}>ENIT</span> Junior Entreprise
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              L'ENIT Junior Entreprise est l'association étudiante de l'École Nationale d'Ingénieurs de Tunis, dédiée à créer des ponts entre le monde académique et professionnel.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Nous organisons chaque année le Forum ENIT Entreprise, un événement majeur qui rassemble les étudiants, les diplômés et les entreprises leaders pour favoriser l'échange, le networking et l'exploration des opportunités de carrière.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Notre mission est de préparer les ingénieurs de demain en leur offrant des opportunités uniques de développement professionnel et personnel.
            </p>
          </div>

          {/* Right: Forum Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-cyan-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              {/* Placeholder for ENIT Junior Entreprise Forum Photo */}
               <img 
                src="/enitje.jpg" 
                alt="ENIT Junior Entreprise Forum"
                className="w-full h-full object-cover"
              /> 
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-white/20 flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-2"
                    style={{ 
                      background: index === 1
                        ? 'linear-gradient(135deg, #00ADB5, #00ADB5)'
                        : 'linear-gradient(135deg, #FCCD11, #FCCD11)'
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-white">
                      {stat.label}
                    </div>
                    <div className="text-sm text-white/70">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/80 mb-6">
            Rejoignez-nous pour 26 années d'excellence au Forum ENIT Entreprise
          </p>
          <button 
            className="px-8 py-4 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white bg-[#FCCD11]"
            
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  )
}