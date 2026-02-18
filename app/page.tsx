import { getCategories } from "@/modules/ventures/infrastructure/jsonCategoryRepository"
import { CategoryCard } from "@/components/category/CategoryCard"

export default async function LobbyPage() {
  const categories = await getCategories()

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Directorio de Emprendimientos</h1>
        <p className="text-muted-foreground">
          Encuentra negocios por categoría
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            name={category.name}
            slug={category.slug}
          />
        ))}
      </section>
    </main>
  )
}