import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HomeHeader } from "@/components/HomeHeader"
import { ArrowLeft, Clock, Heart, Shield, FishSymbol, Users, Quote } from "lucide-react"
const values = [
  {
    icon: Heart,
    title: "Patient-Centered",
    description:
      "Designed with the patient experience at the forefront, making healthcare accessible and simple.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    description:
      "Your health data is protected with the highest security standards and encrypted at all times.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description:
      "Book appointments in seconds, not hours. No more waiting on hold or navigating complex systems.",
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: Users,
    title: "Verified Doctors",
    description:
      "Every doctor on our platform is verified, reviewed, and committed to providing quality care.",
    color: "bg-amber-50 text-amber-500",
  },
]

export function AboutContent() {
    return (
        <main className="container mx-auto flex flex-col gap-5 px-5 pt-10 pb-6">
            {/* Header */}
            <header className="flex items-center gap-3 px-5 pt-2 pb-4">
                <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full text-foreground hover:bg-card"
                asChild
                >
                <Link href="/">
                    <ArrowLeft className="size-5" />
                </Link>
                </Button>
                <h1 className="text-lg font-bold text-foreground">About MarketHub</h1>
            </header>

            {/* Logo + Name */}
            <div className="flex flex-col items-center gap-3 px-5 pb-5">
                <div className="size-20 rounded-2xl overflow-hidden bg-card shadow-md flex items-center justify-center ring-2 ring-primary/15">
                <Image
                    src="/images/app-logo.jpg"
                    alt="MediCare logo"
                    width={80}
                    height={80}
                    className="size-full object-cover bg-white"
                />
                </div>
                <div className="text-center">
                <h2 className="text-xl font-bold text-foreground">MarketHub</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Version 1.0.0</p>
                </div>
            </div>

            {/* Mission */}
            <div className="px-5 pb-5">
                <Card className="bg-card border-transparent p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <FishSymbol className="size-4 text-primary" />
                    <h3 className="text-sm font-bold text-foreground">Proposito</h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                    MarketHub nace como una plataforma de servicio solidario destinada a apoyar la peregrinación 2026 y 2027 de los jóvenes pertenecientes a las comunidades del Camino Neocatecumenal en la Diócesis de Cúcuta, en la Parroquia Divino Niño Jesús de Tasajero. Su finalidad es generar fondos solidarios, promoviendo la unidad, el apoyo mutuo y la vivencia comunitaria de la fe.
                </p>
                </Card>
            </div>
            {/* Team Section */}
            <div className="px-5 pb-5">
                <h3 className="text-sm font-bold text-foreground mb-3">
                Jóvenes peregrinos del Camino Neocatecumenal en Cúcuta
                </h3>

                {/* Group Photo */}
                <Card className="bg-card border-transparent shadow-sm overflow-hidden mb-3 py-0">
                <div className="relative w-full h-100 object-cover object-top">
                    <Image
                    src="/images/team-group.jpg"
                    alt="MediCare team working together"
                    fill
                    className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs font-semibold text-card">
                        Parroquia Divino Niño Jesús de Tasajero - Cúcuta, Colombia
                    </p>
                    </div>
                </div>
                </Card>

                {/* Inspirational Quote */}
                <Card className="bg-primary/5 border-transparent p-3 shadow-sm mb-3">
                <div className="flex gap-2">
                    <Quote className="size-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-[11px] text-foreground/80 leading-relaxed italic">
                    {'"Bienaventurado el hombre que tiene en ti sus fuerzas, en cuyo corazón están tus caminos. Pasará por el valle de las lágrimas, pero lo transformará en manantial; la lluvia temprana lo cubrirá de bendiciones."'} - Salmo 84:5-7
                    </p>
                </div>
                </Card>
            </div>
           

            {/* Stats */}
            <div className="px-5 pb-5">
                <Card className="bg-primary border-transparent p-4 shadow-sm">
                <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                    <p className="text-lg font-bold text-primary-foreground">100+</p>
                    <p className="text-base text-primary-foreground/70">Emprendimientos</p>
                    </div>
                    <div>
                    <p className="text-lg font-bold text-primary-foreground">50K+</p>
                    <p className="text-base text-primary-foreground/70">Visitas</p>
                    </div>
                </div>
                </Card>
            </div>

            {/* Credits */}
            {/* <div className="px-5 pt-2">
                <div className="text-center">
                <p className="text-[10px] text-muted-foreground">
                    Developed with care by
                </p>
                <p className="text-sm font-bold text-foreground mt-0.5">Platsmoo</p>
                </div>
            </div> */}
        </main>
        )
}