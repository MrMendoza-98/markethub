import { Venture } from "./Venture"

export interface VentureSearchParams {
  category?: string | null
  search?: string | null
  sort?: "asc" | "desc"
  page?: number
  limit?: number
}

export interface VentureSearchResult {
  data: Venture[]
  total: number
  page: number
  totalPages: number
}

export interface VentureRepository {
  search(params: VentureSearchParams): Promise<VentureSearchResult>
}