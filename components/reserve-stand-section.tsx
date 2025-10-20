import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReserveStandSection() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
            <span className="text-[#00ADB5]">Réservez votre</span> <span className="text-[#FCCD11]">stand</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Choisissez l&apos;emplacement idéal pour votre entreprise et maximisez votre visibilité
          </p>
        </div>

        {/* Stand Plan Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border-2 border-[#006b75] shadow-xl shadow-[#006b75]/20">
            <img
              src="/plan-stands.png"
              alt="Plan des stands"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 text-center">
            
            <Button
    asChild
    size="lg"
    className="rounded-full bg-[#006b75] hover:bg-[#006b75]/90 text-white text-lg font-bold py-6 px-8"
  >
    <Link href="/inscription">Réserver maintenant</Link>
  </Button>
          </div>
        </div>

        {/* Stand Types */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {/* Silver Left - highlight bleu */}
          <div className="bg-[#00ADB5]/20 backdrop-blur-sm border-2 border-[#00ADB5] rounded-xl p-8 text-center shadow-lg shadow-[#00ADB5]/30 hover:bg-[#00ADB5]/30 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#00ADB5] mx-auto mb-4 flex items-center justify-center shadow">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-[#00ADB5]">Pack Silver</h3>
            <p className="text-[#00ADB5] text-base font-semibold">Hall Indus</p>
          </div>
          {/* Gold Center - mise en valeur */}
          <div className="bg-[#FCCD11]/30 backdrop-blur-sm border-4 border-[#FCCD11] rounded-2xl p-10 text-center shadow-2xl shadow-[#FCCD11]/30 hover:bg-[#FCCD11]/50 transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center min-h-[320px]">
            <div className="w-16 h-16 rounded-full bg-[#FCCD11] mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-2xl">G</span>
            </div>
            <h3 className="font-extrabold text-3xl mb-3 text-[#FCCD11] drop-shadow">Pack Gold</h3>
            <p className="text-white text-lg font-semibold">Hall Principale</p>
          </div>
          {/* Bronze Right - highlight bleu */}
          <div className="bg-[#00ADB5]/20 backdrop-blur-sm border-2 border-[#00ADB5] rounded-xl p-8 text-center shadow-lg shadow-[#00ADB5]/30 hover:bg-[#00ADB5]/30 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#00ADB5] mx-auto mb-4 flex items-center justify-center shadow">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-[#00ADB5]">Pack Bronze</h3>
            <p className="text-[#00ADB5] text-base font-semibold">Hall Indus</p>
          </div>
        </div>
      </div>
    </section>
  )
}