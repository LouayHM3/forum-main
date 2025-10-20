"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2, User, ArrowRight } from "lucide-react"

export default function InscriptionPage() {
  const [selectedType, setSelectedType] = useState<"exposant" | "participant" | null>(null)

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Inscription</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choisissez votre type d&apos;inscription pour participer au Forum ENIT Entreprise 2025
          </p>
        </div>

        {!selectedType ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Exposant Card */}
            <Card
              className="hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedType("exposant")}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Building2 size={40} />
                </div>
                <CardTitle className="text-2xl">Inscrivez-vous en tant qu&apos;exposant</CardTitle>
                <CardDescription className="text-base">
                  Réservez votre stand et présentez votre entreprise aux futurs ingénieurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Stand d&apos;exposition personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Accès aux sessions de recrutement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Visibilité sur tous les supports de communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Networking avec les autres entreprises</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full group-hover:bg-primary/90" size="lg">
                  Continuer
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>

            {/* Participant Card */}
            <Card
              className="hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedType("participant")}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <User size={40} />
                </div>
                <CardTitle className="text-2xl">Accédez en tant que participant</CardTitle>
                <CardDescription className="text-base">
                  Découvrez les opportunités et rencontrez les entreprises leaders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Accès gratuit à tous les stands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Participation aux conférences et ateliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Opportunités de networking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Dépôt de CV auprès des entreprises</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full group-hover:bg-primary/90" size="lg">
                  Continuer
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Button variant="ghost" onClick={() => setSelectedType(null)} className="mb-6">
              ← Retour
            </Button>

            {selectedType === "exposant" ? <ExposantForm /> : <ParticipantForm />}
          </div>
        )}
      </div>
    </div>
  )
}

function ExposantForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Formulaire d&apos;inscription - Exposant</CardTitle>
        <CardDescription>Remplissez les informations de votre entreprise</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Nom de l&apos;entreprise *</Label>
              <Input id="company-name" placeholder="TechCorp Tunisia" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sector">Secteur d&apos;activité *</Label>
              <Input id="sector" placeholder="Technologies de l'information" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Nom du contact *</Label>
              <Input id="contact-name" placeholder="Ahmed Ben Salem" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Poste *</Label>
              <Input id="position" placeholder="Directeur RH" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email professionnel *</Label>
              <Input id="email" type="email" placeholder="contact@entreprise.tn" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input id="phone" type="tel" placeholder="+216 XX XXX XXX" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stand-type">Type de stand *</Label>
            <select id="stand-type" className="w-full h-10 px-3 rounded-md border border-input bg-background" required>
              <option value="">Sélectionnez un type</option>
              <option value="standard">Standard (9m²)</option>
              <option value="premium">Premium (12m²)</option>
              <option value="vip">VIP (18m²)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description de l&apos;entreprise</Label>
            <Textarea id="description" placeholder="Présentez votre entreprise et vos activités..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="needs">Besoins spécifiques</Label>
            <Textarea id="needs" placeholder="Équipements, branchements électriques, etc." rows={3} />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full">
            Soumettre l&apos;inscription
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function ParticipantForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Formulaire d&apos;inscription - Participant</CardTitle>
        <CardDescription>Remplissez vos informations personnelles</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Prénom *</Label>
              <Input id="first-name" placeholder="Ahmed" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Nom *</Label>
              <Input id="last-name" placeholder="Ben Salem" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="participant-email">Email *</Label>
              <Input id="participant-email" type="email" placeholder="ahmed.bensalem@enit.utm.tn" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="participant-phone">Téléphone *</Label>
              <Input id="participant-phone" type="tel" placeholder="+216 XX XXX XXX" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Statut *</Label>
            <select id="status" className="w-full h-10 px-3 rounded-md border border-input bg-background" required>
              <option value="">Sélectionnez votre statut</option>
              <option value="student">Étudiant ENIT</option>
              <option value="alumni">Ancien élève</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level">Niveau d&apos;études</Label>
              <select id="level" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option value="">Sélectionnez</option>
                <option value="1a">1ère année</option>
                <option value="2a">2ème année</option>
                <option value="3a">3ème année</option>
                <option value="master">Master</option>
                <option value="phd">Doctorat</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="speciality">Spécialité</Label>
              <Input id="speciality" placeholder="Génie informatique" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Secteurs d&apos;intérêt</Label>
            <Textarea id="interests" placeholder="Technologies, Finance, Industrie, etc." rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">CV (optionnel)</Label>
            <Input id="cv" type="file" accept=".pdf,.doc,.docx" />
            <p className="text-xs text-muted-foreground">Format accepté: PDF, DOC, DOCX (max 5MB)</p>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full">
            Soumettre l&apos;inscription
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
