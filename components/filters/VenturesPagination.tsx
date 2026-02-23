import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"

type Props = {
  meta: {
    page: number
    totalPages: number
  }
  searchParams: Record<string, string | string[] | undefined>
}

export function VenturesPagination({ meta, searchParams }: Props) {
  const { page, totalPages } = meta

  if (totalPages <= 1) return null

  const createLink = (p: number) => {
    const params = new URLSearchParams()

    Object.entries(searchParams).forEach(([key, value]) => {
      if (!value) return
      params.set(key, Array.isArray(value) ? value[0] : value)
    })

    params.set("page", String(p))
    return `?${params.toString()}`
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <Pagination className="mt-8">
      <PaginationContent>

        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createLink(page - 1)} />
          </PaginationItem>
        )}

        {pages.map(p => (
          <PaginationItem key={p}>
            <PaginationLink
              href={createLink(p)}
              isActive={p === page}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href={createLink(page + 1)} />
          </PaginationItem>
        )}

      </PaginationContent>
    </Pagination>
  )
}
