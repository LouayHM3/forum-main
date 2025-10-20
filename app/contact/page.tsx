import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@forumenit.tn",
      link: "mailto:contact@forumenit.tn",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+216 XX XXX XXX",
      link: "tel:+216XXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "École Nationale d'Ingénieurs de Tunis, BP 37, Le Belvédère 1002 Tunis, Tunisie",
      link: "https://maps.google.com",
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Contactez-nous</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une question ? Une suggestion ? N&apos;hésitez pas à nous contacter, notre équipe vous répondra dans les
            plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
              <CardDescription>Remplissez le formulaire ci-dessous</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-first-name">Prénom *</Label>
                    <Input id="contact-first-name" placeholder="Ahmed" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-last-name">Nom *</Label>
                    <Input id="contact-last-name" placeholder="Ben Salem" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input id="contact-email" type="email" placeholder="ahmed@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input id="subject" placeholder="Demande d'information" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Votre message..." rows={6} required />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Suivez-nous sur les réseaux sociaux</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Carte ENIT"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
