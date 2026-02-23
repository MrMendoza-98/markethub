"use client"

import { Button } from "@/components/ui/button"
import { Search, ListFilter, LayoutGrid, Menu } from "lucide-react"
import { SearchDialog } from "./SearchDialog"
import { CategoryDialog } from "./CategoryDialog"
import { SortDialog } from "./SortDialog"
import { ViewDialog } from "./ViewDialog"
import { useState } from "react"

type Props = {
  slug: string
  view: "grid" | "list"
  searchParams: {
    search?: string
    sort?: "asc" | "desc"
    page?: string
    view?: "grid" | "list"
  }
}

export function MobileFiltersBar({ slug, searchParams, view }: Props) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      {/* Barra flotante estilo app */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-3 md:hidden">
        <div className="flex justify-around">
          <Button variant="outline" size="icon" onClick={() => setOpen("category")}>
            <Menu />
          </Button>

          <Button variant="outline" size="icon" onClick={() => setOpen("search")}>
            <Search />
          </Button>

          <Button variant="outline" size="icon" onClick={() => setOpen("sort")}>
            <ListFilter />
          </Button>

          <Button variant="outline" size="icon" onClick={() => setOpen("view")}>
            <LayoutGrid />
          </Button>
        </div>
      </div>

      {/* Modales */}
      <SearchDialog open={open === "search"} onOpenChange={() => setOpen(null)} />
      <CategoryDialog open={open === "category"} onOpenChange={() => setOpen(null)} currentSlug={slug} />
      <SortDialog open={open === "sort"} onOpenChange={() => setOpen(null)} />
      <ViewDialog open={open === "view"} onOpenChange={() => setOpen(null)} currentView={view} searchParams={searchParams} />
    </>
  )
}