import { JsonVentureRepository } from "@/modules/ventures/infrastructure/jsonVentureRepository"
import { searchVentures } from "@/modules/ventures/application/searchVentures"
import { VentureCard } from "@/components/category/VentureCard"

type Props = {
  params: { slug: string }
  searchParams: {
    search?: string
    sort?: "asc" | "desc"
    page?: string
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const repository = new JsonVentureRepository()

  const result = await searchVentures(repository, {
    category: params.slug,
    search: searchParams.search,
    sort: searchParams.sort || "asc",
    page: Number(searchParams.page || 1)
  })

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold capitalize">
          {params.slug}
        </h1>
        <p className="text-muted-foreground">
          {result.total} emprendimientos encontrados
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {result.data.map(v => (
          <VentureCard
            key={v.id}
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
      </section>
    </main>
  )
}