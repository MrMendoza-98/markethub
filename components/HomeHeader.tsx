import { Bell } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from "next/image"

export function HomeHeader() {
    return (
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="size-10 rounded-xl overflow-hidden bg-card shadow-sm flex items-center justify-center">
              <Image 
              src="/images/app-logo.png" 
              alt="MarketHub" 
              width={100} 
              height={100} 
              className="size-full object-cover"
              />
            </a>
            <div>
                <p className="text-muted-foreground">Bienvenido</p>
                <h1 className="text-2xl font-bold text-foreground landing-tight">MarketHub</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
            variant="ghost" 
            size="icon"
            className="size-10 rounded-full text-foreground hover:bg-card relative"
            aria-label="Switch theme"
            >
              <Bell className="h-5 w-5" />
            </Button>
            {/* <Avatar className="size-10 ring-2 ring-primary/20">
              <AvatarImage src="/images/doctor-1.jpg" />
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">U</AvatarFallback>
            </Avatar> */}
          </div>
        </header>
    )
}