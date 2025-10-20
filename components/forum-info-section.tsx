import { Users, Building2, Award, Calendar } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

export function ForumInfoSection() {
  const stats = [
    { icon: Building2, value: 30, suffix: "+", label: "Entreprises", color: "#006b75" },
    { icon: Users, value: 2000, suffix: "+", label: "Participants", color: "#00ADB5" },
    { icon: Award, value: 8, suffix: "+", label: "Panélistes", color: "#006b75" },
    { icon: Calendar, value: 1, suffix: "", label: "Jour", color: "#00ADB5" },
  ]

  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-balance text-white">
              Qu&apos;est-ce que le Forum <span className="text-[#FCCD11]"> ENIT </span> Entreprise ?
            </h2>
            <div className="space-y-3 text-sm md:text-base text-white/90 leading-relaxed">
              <p>
                Le Forum ENIT Entreprise est l&apos;événement annuel incontournable qui réunit les entreprises leaders
                et les futurs ingénieurs de l&apos;École Nationale d&apos;Ingénieurs de Tunis.
              </p>
              <p>
                C&apos;est une plateforme unique d&apos;échange, de networking et de recrutement qui permet aux
                entreprises de présenter leurs opportunités et aux étudiants de découvrir leur futur professionnel.
              </p>
              <p>
                Avec des conférences, des ateliers, des stands d&apos;exposition et des sessions de recrutement, le
                forum offre une expérience complète pour tous les participants.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#00ADB5] shadow-lg shadow-[#00ADB5]/20">
              <img
                src="/panel.jpg"
                alt="Forum ENIT Entreprise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-2"
                style={{ borderColor: stat.color }}
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 border-2"
                  style={{ 
                    backgroundColor: `${stat.color}20`,
                    borderColor: stat.color
                  }}
                >
                  <Icon size={28} strokeWidth={2.5} style={{ color: stat.color }} />
                </div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}