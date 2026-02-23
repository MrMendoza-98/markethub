"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentView: "grid" | "list"
  searchParams: Record<string, string>
}
export function ViewDialog({ open, onOpenChange, currentView, searchParams }: Props) {
  const router = useRouter()

  function update(view: string) {
    const params = new URLSearchParams(searchParams)
    params.set("view", view)
    params.set("page", "1")
    router.push(`?${params.toString()}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vista</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <button
            className={`w-full p-3 border rounded-lg ${currentView === "grid" ? "bg-muted" : ""}`}
            onClick={() => update("grid")}
          >
            Galería
          </button>

          <button
            className={`w-full p-3 border rounded-lg ${currentView === "list" ? "bg-muted" : ""}`}
            onClick={() => update("list")}
          >
            Lista
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}