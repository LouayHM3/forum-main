import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ParticipantsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Inscription Participant</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Inscrivez-vous pour participer au Forum ENIT Entreprise 2025
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Prénom *</Label>
                  <Input id="first-name" placeholder="Ahmed" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nom *</Label>
                  <Input id="last-name" placeholder="Ben Salem" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="ahmed.bensalem@enit.utm.tn" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input id="phone" type="tel" placeholder="+216 XX XXX XXX" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Niveau d&apos;études *</Label>
                <Select required>
                  <SelectTrigger id="level">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1a">1ère année</SelectItem>
                    <SelectItem value="2a">2ème année</SelectItem>
                    <SelectItem value="3a">3ème année</SelectItem>
                    <SelectItem value="4a">4ème année</SelectItem>
                    <SelectItem value="5a">5ème année</SelectItem>
                    <SelectItem value="master">Master</SelectItem>
                    <SelectItem value="phd">Doctorat</SelectItem>
                    <SelectItem value="alumni">Alumni</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Spécialité *</Label>
                <Select required>
                  <SelectTrigger id="specialization">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="genie-civil">Génie Civil</SelectItem>
                    <SelectItem value="genie-electrique">Génie Électrique</SelectItem>
                    <SelectItem value="genie-mecanique">Génie Mécanique</SelectItem>
                    <SelectItem value="genie-industriel">Génie Industriel</SelectItem>
                    <SelectItem value="informatique">Informatique</SelectItem>
                    <SelectItem value="telecom">Télécommunications</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Domaine d&apos;intérêt *</Label>
                <Select required>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stage">Stage</SelectItem>
                    <SelectItem value="pfe">Projet de Fin d&apos;Études</SelectItem>
                    <SelectItem value="emploi">Emploi</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="conferences">Conférences</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Jours de participation *</Label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="day1" />
                    <label
                      htmlFor="day1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Jour 1 - Mardi 19 Novembre 2025
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="day2" />
                    <label
                      htmlFor="day2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Jour 2 - Mercredi 20 Novembre 2025
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  J&apos;accepte les termes et conditions *
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Confirmer l&apos;inscription
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
