import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PromoBanner() {
    return (
        <Card className="relative overflow-hidden bg-primary border-transparent py-0">
            <div className="flex items-center">
                <div className="flex-1 p-4">
                    <p className="text-primary-foreground/80 text-[10px] font-medium uppercase tracking-wider">
                        Directorio de Emprendimientos
                    </p>
                    <h2 className="text-base font-bold text-primary-foreground mt-1 leading-tight text-balance">¡Bienvenido a MarketHub!</h2>
                    <Button 
                    size="sm" 
                    className="mt-3 h-8 rounded-lg bg-card text-primary hover:bg-card/90 text-xs font-semibold px-4">
                        Encuentra negocios por categoría
                    </Button>
                </div>
                <div className="w-28 h-32 relative shrink-0">
                    <Image 
                    src="/images/home-banner.png" 
                    alt="MarketHub" 
                    fill 
                    className="object-cover object-center"
                    />
                </div>
            </div>

        </Card>
    )
}
