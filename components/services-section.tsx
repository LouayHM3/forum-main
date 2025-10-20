import Image from "next/image"

export function ServicesSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
              Nos prestations de service
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Les domaines d'expertise de l'ENIT Junior Entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Consulting */}
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/consu.png"
                  alt="Consulting"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Consulting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conseil et expertise en management, stratégie d'entreprise et gestion de projets
              </p>
            </div>
            
            {/* Informatique */}
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/it.png"
                  alt="Informatique"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Informatique</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Développement web, mobile, intelligence artificielle et solutions logicielles
              </p>
            </div>
            
            {/* Électrique */}
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/elect.png"
                  alt="Électrique"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Électrique</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conception et études électriques, automatisation et électrotechnique
              </p>
            </div>
            
            {/* Mécanique */}
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/meca.png"
                  alt="Mécanique"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Mécanique</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conception mécanique, CAO, simulation numérique et prototypage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}