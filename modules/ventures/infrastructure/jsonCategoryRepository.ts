import data from "@/data/categories.json"

export type Category = {
  id: number
  name: string
  slug: string
}

export async function getCategories(): Promise<Category[]> {
  return data
}