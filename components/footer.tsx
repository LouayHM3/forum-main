import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          {/* Remove ENIT and UTM logos section */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <Image
              src="/img/img/Primary logo - White.png"
              alt="ENIT Junior Entreprise"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-8 mb-6">
            <Image
              src="/img/img/00adb5 on white.png"
              alt="Proficiency is our currency"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-white/80">La première Junior Entreprise en Tunisie</p>
        </div>
        
        <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
        <p className="text-lg mb-4">
          <a href="mailto:contact@enitje.com" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
            contact@enitje.com
          </a>
        </p>
        <p className="text-lg mb-8">Suivez-nous sur les réseaux sociaux</p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.facebook.com/juniorenit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all"
          >
            <Facebook className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
            <span className="text-secondary font-medium">Facebook</span>
          </a>
          <a 
            href="https://www.instagram.com/enit.juniorentreprise/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all"
          >
            <Instagram className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
            <span className="text-secondary font-medium">Instagram</span>
          </a>
          <a 
            href="https://www.linkedin.com/company/enitjuniorentreprise" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all"
          >
            <Linkedin className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
            <span className="text-secondary font-medium">LinkedIn</span>
          </a>
        </div>
        
        <p className="mt-8 text-white/60">&copy; {new Date().getFullYear()} ENIT Junior Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
