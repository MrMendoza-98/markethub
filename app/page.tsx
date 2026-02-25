import { getCategories } from "@/modules/ventures/infrastructure/jsonCategoryRepository"
import { CategoryCard } from "@/components/category/CategoryCard"
import { HomeHeader } from "@/components/HomeHeader"
import { PromoBanner } from "@/components/PromoBanner"
import { CategoryGrid } from "@/components/CategoryGrid"
import { TopVentures } from "@/components/TopVentures"

export default async function LobbyPage() {
  const categories = await getCategories()

  return (
    <main className="container mx-auto flex flex-col gap-5 px-5 pt-10 pb-6">
      <HomeHeader />
      <PromoBanner />
      <CategoryGrid />
      <TopVentures />
      
    </main>
  )
}