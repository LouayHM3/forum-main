import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export function AboutENITSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez l'ENIT Junior Entreprise et le lieu du forum
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white border border-border rounded-lg p-3 shadow-sm">
                  <Image
                    src="/img/img/Primary logo - Colored.png"
                    alt="ENIT Junior Entreprise Logo"
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">ENIT Junior Entreprise</h3>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Depuis la fondation de <strong>l'ENIT Junior Entreprise</strong>, la première Junior Entreprise en Tunisie, 
                  les élèves de l'<strong>ENIT</strong> ont marqué une certaine <strong>valeur ajoutée</strong> auprès de 
                  l'<strong>écosystème entrepreneurial</strong> vu la diversité de leurs compétences.
                </p>
                <p>
                  <strong>L'ENIT Junior Entreprise</strong> est un organisme à but <strong>non lucratif</strong>. 
                  C'est une association à <strong>vocation pédagogique et économique</strong>, 
                  incitant les étudiants à la <strong>vie professionnelle</strong> dès l'aube de leurs études.
                </p>
              </div>
            </div>
            
            {/* Logos Side */}
            <div className="space-y-6">
              {/* Institution Logos */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-6 text-foreground">Nos Institutions</h4>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* UTM Logo */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <Image
                      src="/img/img/utm-header.png"
                      alt="Université de Tunis El Manar"
                      width={150}
                      height={120}
                      className="object-contain mx-auto mb-3"
                    />
                    <p className="text-sm font-medium text-muted-foreground">Université de Tunis El Manar</p>
                  </div>
                  
                  {/* ENIT Logo */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <Image
                      src="/img/img/LOGO_ENIT_300 (1).png"
                      alt="École Nationale d'Ingénieurs de Tunis"
                      width={120}
                      height={120}
                      className="object-contain mx-auto mb-3"
                    />
                    <p className="text-sm font-medium text-muted-foreground">École Nationale d'Ingénieurs de Tunis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-card border border-border rounded-xl p-6 text-center stat-card-3d card-glow">
                <div className="stat-content">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">1ère</div>
                  <div className="text-sm text-muted-foreground">Junior Entreprise en Tunisie</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center stat-card-3d card-glow">
                <div className="stat-content">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Secteurs d'expertise</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center stat-card-3d card-glow">
                <div className="stat-content">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">27</div>
                  <div className="text-sm text-muted-foreground">Éditions du Forum</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center stat-card-3d card-glow">
                <div className="stat-content">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">2000+</div>
                  <div className="text-sm text-muted-foreground">Participants attendus</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Services Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Nos prestations de service
            </h3>
            <p className="text-lg text-muted-foreground">
              Les domaines d'expertise de l'ENIT Junior Entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/consu.png"
                  alt="Consulting"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Consulting</h4>
              <p className="text-sm text-muted-foreground">Conseil et expertise en management, stratégie d'entreprise et gestion de projets</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/it.png"
                  alt="Informatique"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Informatique</h4>
              <p className="text-sm text-muted-foreground">Développement web, mobile, intelligence artificielle et solutions logicielles</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/elect.png"
                  alt="Électrique"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Électrique</h4>
              <p className="text-sm text-muted-foreground">Conception et études électriques, automatisation et électrotechnique</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/services/meca.png"
                  alt="Mécanique"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Mécanique</h4>
              <p className="text-sm text-muted-foreground">Conception mécanique, CAO, simulation numérique et prototypage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}