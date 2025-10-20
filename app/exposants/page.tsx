import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ExposantsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-balance">
            Réservez votre stand
          </h1>

          {/* Floor Plan */}
          <div className="mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border shadow-lg">
              <img
                src="/exhibition-floor-plan-layout-stands.jpg"
                alt="Plan des stands"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Formulaire de Réservation</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nom de l&apos;entreprise *</Label>
                  <Input id="company-name" placeholder="TechCorp" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Secteur d&apos;activité *</Label>
                  <Select required>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technologies</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="industry">Industrie</SelectItem>
                      <SelectItem value="consulting">Conseil</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nom du contact *</Label>
                  <Input id="contact-name" placeholder="Ahmed Ben Salem" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Poste *</Label>
                  <Input id="position" placeholder="Responsable RH" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="contact@techcorp.tn" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input id="phone" type="tel" placeholder="+216 XX XXX XXX" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stand-type">Type de stand *</Label>
                <Select required>
                  <SelectTrigger id="stand-type">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (9m²)</SelectItem>
                    <SelectItem value="premium">Premium (18m²)</SelectItem>
                    <SelectItem value="vip">VIP (27m²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stand-preference">Préférence d&apos;emplacement</Label>
                <Input id="stand-preference" placeholder="Ex: Près de l'entrée principale" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="participants-count">Nombre de participants</Label>
                <Input id="participants-count" type="number" placeholder="3" min="1" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requests">Demandes spéciales</Label>
                <Textarea
                  id="special-requests"
                  placeholder="Équipements supplémentaires, besoins particuliers..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Soumettre la réservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
