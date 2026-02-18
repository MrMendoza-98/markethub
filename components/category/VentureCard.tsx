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
}

export function VentureCard(props: Props) {
  const action = getVentureAction(props)

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

        <p className="text-sm text-muted-foreground flex-1">
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
