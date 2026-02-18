import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  name: string
  slug: string
}

export function CategoryCard({ name, slug }: Props) {
  return (
    <Link href={`/category/${slug}`}>
      <Card className="hover:shadow-md transition cursor-pointer">
        <CardHeader>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardHeader>

        <CardContent className="text-center text-sm text-muted-foreground">
          Ver emprendimientos
        </CardContent>
      </Card>
    </Link>
  )
}