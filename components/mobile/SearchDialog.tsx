"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: Props) {
  const router = useRouter()
  const params = useSearchParams()

  function update(value: string) {
    const newParams = new URLSearchParams(params.toString())
    newParams.set("search", value)
    newParams.set("page", "1")
    router.push(`?${newParams.toString()}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Buscar emprendimiento</DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Ej: Pizza, tecnología..."
          defaultValue={params.get("search") || ""}
          onKeyDown={e => {
            if (e.key === "Enter") {
              update(e.currentTarget.value)
            }
          }}
        />
      </DialogContent>
    </Dialog>
  )
}