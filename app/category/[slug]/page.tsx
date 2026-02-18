import { JsonVentureRepository } from "@/modules/ventures/infrastructure/jsonVentureRepository"
import { searchVentures } from "@/modules/ventures/application/searchVentures"
import { VentureCard } from "@/components/category/VentureCard"
import { FiltersBar } from "@/components/filters/FiltersBar"


type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{
    search?: string
    sort?: "asc" | "desc"
    page?: string
  }>
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params
  const query = await searchParams
  const repository = new JsonVentureRepository()

   const result = await searchVentures(repository, {
    category: slug,
    search: query.search,
    sort: query.sort || "asc",
    page: Number(query.page || 1)
  })

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold capitalize">
          {slug}
        </h1>
        <p className="text-muted-foreground">
          {result.total} emprendimientos encontrados
        </p>
        <FiltersBar />
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