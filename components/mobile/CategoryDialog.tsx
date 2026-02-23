"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import categories from "@/data/categories.json"
type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentSlug: string
}

export function CategoryDialog({ open, onOpenChange, currentSlug }: Props) {
  const router = useRouter()

  function goTo(slug: string) {
    router.push(`/category/${slug}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Categoría</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.slug}
              onClick={() => goTo(cat.slug)}
              className={`w-full text-left p-3 rounded-lg border ${
                cat.slug === currentSlug ? "bg-muted" : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}