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
      className="border rounded-md px-3 py-2 text-sm"
    >
      {categories.map(cat => (
        <option key={cat.id} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  )
}