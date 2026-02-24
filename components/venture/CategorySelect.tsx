"use client"

import { useRouter, useSearchParams } from "next/navigation"
import categories from "@/data/categories.json"



export function CategorySelect({ slug }: { slug: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())

    // reset página al cambiar categoría
    params.set("page", "1")

    router.push(`/category/${slug}?${params.toString()}`)
  }

  return (
    <select
      value={slug}
      onChange={e => handleChange(e.target.value)}
      className="h-10 rounded-xl px-3 py-2 bg-card text-card-foreground border-transparent text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
    >
      {categories.map(cat => (
        <option key={cat.id} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  )
}