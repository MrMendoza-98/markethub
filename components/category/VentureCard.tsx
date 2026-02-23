import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getVentureAction } from "@/lib/actions"

type Props = {
  name: string
  description: string
  thumbnail: string
  whatsapp?: string
  phone?: string
  email?: string
  website?: string
  instagram?: string
  view?: "grid" | "list"
}

export function VentureCard({
  view = "grid",
  ...props
}: Props) {
  const action = getVentureAction(props)

  // ---------- LIST VIEW ----------
  if (view === "list") {
    return (
      <Card className="hover:shadow-md transition">
        <CardContent className="flex gap-4 p-4">
          <img
            src={props.thumbnail}
            alt={props.name}
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div className="flex flex-col flex-1">
            <CardTitle className="text-base mb-1">
              {props.name}
            </CardTitle>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {props.description}
            </p>
          </div>

          {action && (
            <Button asChild size="sm">
              <a
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
              >
                {action.label}
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  // ---------- GRID VIEW (default) ----------
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition">
      <CardHeader className="p-0">
        <img
          src={props.thumbnail}
          alt={props.name}
          className="w-full h-40 object-cover rounded-t-xl"
        />
      </CardHeader>

      <CardContent className="flex flex-col flex-1 p-4">
        <CardTitle className="text-lg mb-2">
          {props.name}
        </CardTitle>

        <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
          {props.description}
        </p>

        {action && (
          <Button asChild className="mt-4 w-full">
            <a
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
            >
              {action.label}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
