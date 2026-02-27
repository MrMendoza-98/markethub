"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getVentureAction } from "@/lib/actions"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Star, ArrowUpRight, MapPin, MessageCirclePlus } from "lucide-react"

type Props = {
  id: number
  name: string
  description: string
  thumbnail: string
  whatsapp?: string
  phone?: string
  email?: string
  website?: string
  instagram?: string
  view?: "grid" | "list"
  rating?: number
  reviews?: number
  location?: string
}

export function VentureCard({
  view = "grid",
  ...props
}: Props) {
  const action = getVentureAction(props)

  // ---------- LIST VIEW ----------
  if (view === "list") {
    return (
      <Card className="border-transparent shadow-sm py-4 gap-3 cursor-pointer transition-all hover:shadow-md ">
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
       <CardHeader className="flex items-center justify-between px-3">
        <Avatar className="size-14 ring-2 ring-primary/20" >
          <AvatarImage src={props.thumbnail} alt={props.name} />
          <AvatarFallback className="bg-secondary text-secondary-foreground text-sm">{
          props.name
              .split(" ")
              .map((n) => n[0])
              .join("")}</AvatarFallback>
        </Avatar>

        <CardTitle className="text-lg pl-2">
          {props.name}
        </CardTitle>
       </CardHeader>
       <CardContent className="flex flex-col flex-1 p-3">

        <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
          {props.description}
        </p>
        <div className="flex items-center gap-0.5">
          <MapPin className="size-3.5 text-shadow-emerald-400" />
          <span className="text-xs font-semibold text-card-foreground">
            {props.location}
          </span>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <Star className="size-5 fill-yellow-300 text-yellow-300" />
              <span className="text-xs font-semibold text-card-foreground">
                {props.rating}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {props.reviews} Reviews
            </span>
          </div>
          <div className="flex gap-2">
            {action && (
              <Button asChild 
                className="size-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label={`View ${props.name} profile`}
                onClick={async (e) => {
                e.preventDefault();
                try {
                  const res = await fetch("/api/venture-reviews", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: props.id })
                  });
                  if (!res.ok) throw new Error("Error");
                  window.open(action.href, action.external ? "_blank" : "_self");
                } catch (err) {
                  alert("Error al actualizar reviews");
                }
                }}>
                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                >
                  <ArrowUpRight className="size-5 text-muted-foreground" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
