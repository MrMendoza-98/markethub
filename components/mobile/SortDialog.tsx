"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { useRouter, useSearchParams } from "next/navigation"
type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SortDialog({ open, onOpenChange }: Props) {
  const router = useRouter()
  const params = useSearchParams()

  function update(value: string) {
    const newParams = new URLSearchParams(params.toString())
    newParams.set("sort", value)
    newParams.set("page", "1")
    router.push(`?${newParams.toString()}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ordenar</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <button className="w-full p-3 border rounded-lg" onClick={() => update("asc")}>
            A → Z
          </button>
          <button className="w-full p-3 border rounded-lg" onClick={() => update("desc")}>
            Z → A
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}