import data from "@/data/ventures.json"
import {
  VentureRepository,
  VentureSearchParams,
  VentureSearchResult
} from "../domain/VentureRepository"

export class JsonVentureRepository implements VentureRepository {
  async search(params: VentureSearchParams): Promise<VentureSearchResult> {
    const { category, search, sort = "asc", page = 1, limit = 12 } = params

    let results = data.filter(v => v.isActive)

    if (category) {
      const normalized = category.toLowerCase().trim()
      results = results.filter(
        v => v.categorySlug.toLowerCase() === normalized
      )
      console.log("Filtered by category:", category, results.length)
    }

    if (search) {
      const text = search.toLowerCase()
      results = results.filter(v =>
        v.name.toLowerCase().includes(text) ||
        v.description.toLowerCase().includes(text)
      )
    }

    results.sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )

    const total = results.length
    const start = (page - 1) * limit
    const paginated = results.slice(start, start + limit)

    return {
      data: paginated,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    }
  }
}