import { JsonVentureRepository } from "@/modules/ventures/infrastructure/jsonVentureRepository"
import { searchVentures } from "@/modules/ventures/application/searchVentures"
import { FiltersBar } from "@/components/filters/FiltersBar"
import { VenturesPagination } from "@/components/filters/VenturesPagination"
import { ViewSwitcher } from "@/components/venture/ViewSwitcher"
import { VenturesGrid } from "@/components/venture/VenturesGrid"
import { CategorySelect } from "@/components/venture/CategorySelect"
import { MobileFiltersBar } from "@/components/mobile/MobileFiltersBar"

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{
    search?: string
    sort?: "asc" | "desc"
    page?: string
    view?: "grid" | "list"
  }>
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params
  const query = await searchParams

  const repository = new JsonVentureRepository()

  const page = Number(query.page || 1)
  const view = query.view || "grid"

  const result = await searchVentures(repository, {
    category: slug,
    search: query.search,
    sort: query.sort || "asc",
    page
  })

  return (
    <>
    <main className="container mx-auto py-10 px-4 pb-24 md:pb-1">
      <header className="mb-6 space-y-4 hidden md:block">
        <div>
          <h1 className="text-2xl font-bold capitalize">{slug}</h1>
          <p className="text-muted-foreground">
            {result.total} emprendimientos encontrados
          </p>
        </div>
        <div
          className="flex items-center gap-4 flex-wrap">
            <CategorySelect slug={slug} />
            <FiltersBar />
            <ViewSwitcher current={view} searchParams={query} />
        </div>
      </header>

      {/* 🔥 grid/list automático */}
      <VenturesGrid ventures={result.data} view={view} />

      {/* 🔥 paginación */}
      <div className="mt-10">
        <VenturesPagination meta={result} searchParams={query} />
      </div>
    </main>
    <MobileFiltersBar
        slug={slug}
        view={view}
        searchParams={query}
      />
    </>
  )
}
