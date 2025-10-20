import { Clock, MapPin, Users } from "lucide-react"

export default function ProgrammePage() {
  const timeline = [
    {
      day: "Mardi 19 Novembre 2025",
      events: [
        { time: "08:00 - 09:00", title: "Accueil et inscription", location: "Hall principal" },
        {
          time: "09:00 - 10:00",
          title: "Cérémonie d'ouverture",
          location: "Amphithéâtre A",
          speakers: ["Directeur ENIT", "Représentants entreprises"],
        },
        { time: "10:00 - 12:00", title: "Visite des stands", location: "Espace exposition" },
        { time: "12:00 - 13:00", title: "Pause déjeuner", location: "Cafétéria" },
        {
          time: "13:00 - 14:30",
          title: "Conférence: L'avenir de l'ingénierie en Tunisie",
          location: "Amphithéâtre A",
          speakers: ["Dr. Ahmed Ben Salem", "Mme. Leila Mansour"],
        },
        { time: "14:30 - 16:00", title: "Ateliers thématiques", location: "Salles B1, B2, B3" },
        { time: "16:00 - 17:30", title: "Sessions de recrutement", location: "Stands entreprises" },
        { time: "17:30 - 18:00", title: "Cérémonie de clôture", location: "Amphithéâtre A" },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Programme</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez le programme détaillé du Forum ENIT Entreprise 2025
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {timeline.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-16 last:mb-0">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 mb-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold">{day.day}</h2>
              </div>

              {/* Timeline */}
              <div className="relative pl-8 md:pl-12">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-secondary" />

                <div className="space-y-8">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[1.6rem] md:-left-[2.1rem] top-2 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" />

                      <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                          <Clock size={18} />
                          <span>{event.time}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {event.location}
                          </div>
                          {event.speakers && (
                            <div className="flex items-center gap-1">
                              <Users size={16} />
                              {event.speakers.join(", ")}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
