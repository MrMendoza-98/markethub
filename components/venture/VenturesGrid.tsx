import { VentureCard } from "../category/VentureCard"

type Venture = {
  id: number
  name: string
  description: string
  thumbnail: string
  whatsapp?: string
  phone?: string
  email?: string
  website?: string
  instagram?: string
  rating?: number
  reviews?: number
  location?: string
}

type Props = {
  ventures: Venture[]
  view?: "grid" | "list"
}

export function VenturesGrid({ ventures, view = "grid" }: Props) {
  if (!ventures.length) {
    return (
      <p className="text-muted-foreground">
        No se encontraron emprendimientos
      </p>
    )
  }

  if (view === "list") {
    return (
      <div className="space-y-4">
        {ventures.map(v => (
          <VentureCard
            key={v.id}
            id={v.id}
            view="list"
            name={v.name}
            description={v.description}
            thumbnail={v.thumbnail}
            whatsapp={v.whatsapp}
            phone={v.phone}
            email={v.email}
            website={v.website}
            instagram={v.instagram}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {ventures.map(v => (
        <VentureCard
          key={v.id}
          id={v.id}
          view="grid"
          name={v.name}
          description={v.description}
          thumbnail={v.thumbnail}
          whatsapp={v.whatsapp}
          phone={v.phone}
          email={v.email}
          website={v.website}
          instagram={v.instagram}
          rating={v.rating}
          reviews={v.reviews}
          location={v.location}
        />
      ))}
    </div>
  )
}
