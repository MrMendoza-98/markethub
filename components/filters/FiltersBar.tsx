"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function FiltersBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString())

    if (!value) params.delete(key)
    else params.set(key, value)

    params.set("page", "1") // reset paginación al filtrar
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-3 w-full md:w-auto flex-nowrap">
      <Input
        placeholder="Buscar emprendimiento..."
        defaultValue={searchParams.get("search") || ""}
        onChange={e => updateParam("search", e.target.value)}
        className="max-w-sm"
      />

      <Select
        defaultValue={searchParams.get("sort") || "asc"}
        onValueChange={value => updateParam("sort", value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ordenar" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">A → Z</SelectItem>
          <SelectItem value="desc">Z → A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
