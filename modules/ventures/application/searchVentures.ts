import {
  VentureRepository,
  VentureSearchParams,
  VentureSearchResult
} from "../domain/VentureRepository"

export async function searchVentures(
  repository: VentureRepository,
  params: VentureSearchParams
): Promise<VentureSearchResult> {
  return repository.search(params)
}