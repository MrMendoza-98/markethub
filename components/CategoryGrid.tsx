import { Card } from "@/components/ui/card"
import  { Stethoscope, Brain, Eye, Heart, Bone, Baby, Microscope, Pill, LucideIcon }  from "lucide-react"
import { cn } from "@/lib/utils"
import categoriesData from "@/data/categories.json"
import React from "react"
import Link from "next/link"
const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Brain,
  Eye,
  Heart,
  Bone,
  Baby,
  Microscope,
  Pill,
}


interface Category {
  id: string
  name: string
  slug: string
  bgColor: string
  iconColor: string
  icon: LucideIcon
}



export function CategoryGrid() {
    return (
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-foreground">Categories</h2>
            
          </div>
          <div className="grid grid-cols-4 gap-3">
            {categoriesData.map((category) => (
              <button
                key={category.id}
                className="flex flex-col items-center gap-2 group"
              >
                <Link href={`/category/${category.slug}`}>
                  <Card className="size-20 flex items-center justify-center border-transparent shadow-sm group-hover:shadow-md transition-shadow p-0">
                    <div
                      className={cn(
                        "size-15 rounded-xl flex items-center justify-center",
                        category.bgColor
                      )}
                    >
                        {React.createElement(iconMap[category.icon], { className: cn("size-5", category.iconColor) })}
                    </div>
                  </Card>
                  <span className="text-sm font-medium text-muted-foreground text-center leading-tight">
                    {category.name}
                  </span>
                </Link>
              </button>
            ))}
          </div>
        </section>
    )
}