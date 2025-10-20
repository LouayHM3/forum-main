"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "ACCEUIL" },
    { href: "/about", label: "À PROPOS" },
    { href: "/programme", label: "PROGRAMME" },
    { href: "/exposants", label: "EXPOSANTS" },
    { href: "/participants", label: "PARTICIPANTS" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed h-24 top-0 left-0 right-0 z-[100] bg-primary/90 navbar-blur border-b border-secondary/20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/forum (1).png"
              alt="ENIT Junior Entreprise"
              width={90}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-white/90 hover:text-[#FCCD11] transition-colors px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
  <Button
    asChild
    size="lg"
    className="rounded-full bg-[#FCCD11] hover:bg-[#FCCD11]/90 text-white text-lg font-bold py-6 px-8"
  >
    <Link href="/inscription">Inscrivez-vous</Link>
  </Button>
</div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/90 hover:text-secondary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="lg"
                className="rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold w-full"
              >
                <Link href="/inscription" onClick={() => setIsOpen(false)}>
                  Inscrivez-vous
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}