import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  current: "grid" | "list"
  searchParams: Record<string, string | string[] | undefined>
}

export function ViewSwitcher({ current, searchParams }: Props) {
  const createLink = (view: "grid" | "list") => {
    const params = new URLSearchParams()

    Object.entries(searchParams).forEach(([key, value]) => {
      if (!value) return

      if (Array.isArray(value)) {
        params.set(key, value[0])
      } else {
        params.set(key, value)
      }
    })

    params.set("view", view)
    params.set("page", "1") // reset página al cambiar vista

    return `?${params.toString()}`
  }

  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant={current === "grid" ? "default" : "outline"}
        asChild
      >
        <Link href={createLink("grid")}>Galería</Link>
      </Button>

      <Button
        variant={current === "list" ? "default" : "outline"}
        asChild
      >
        <Link href={createLink("list")}>Lista</Link>
      </Button>
    </div>
  )
}
