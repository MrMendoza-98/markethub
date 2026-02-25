"use client";
import { Info, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from "next/image"
import { useTheme } from "next-themes";
import Link from "next/link";

export function HomeHeader() {
  const { setTheme, theme } = useTheme()
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
              className="size-9 rounded-full text-foreground hover:bg-card"
              aria-label="About"
              asChild
            >
              <Link href="/about">
                <Info className="size-[18px]" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full text-foreground hover:bg-card relative"
              aria-label="Switch theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
            {/* <Avatar className="size-10 ring-2 ring-primary/20">
              <AvatarImage src="/images/doctor-1.jpg" />
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">U</AvatarFallback>
            </Avatar> */}
          </div>
        </header>
    )
}