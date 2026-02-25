
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Link from "next/link";
import ventures from "@/data/ventures.json";

export function TopVentures() {
    return (
        <section>
        <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-foreground">Top Empredimientos</h2>
        </div>
            <div className="relative">
                <button
                    type="button"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background border rounded-full shadow p-1 flex items-center justify-center"
                    onClick={() => {
                        const container = document.getElementById('ventures-scroll');
                        if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
                    }}
                    aria-label="Scroll left"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <div
                    id="ventures-scroll"
                    className="flex gap-3 overflow-x-auto pb-1 -mx-5 px-5 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {ventures
                        .slice() // para no mutar el array original
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 20)
                        .map((venture) => (
                            <Card
                                key={venture.id}
                                className="shrink-0 w-[130px] border-transparent shadow-sm py-4 gap-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <CardContent className="flex flex-col items-center gap-2 px-3">
                                    <Avatar className="size-12 ring-2 ring-primary/20">
                                        <AvatarImage src={venture.thumbnail} alt={venture.name} />
                                        <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                                            {venture.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-xs text-card-foreground leading-tight text-balance">
                                            {venture.name}
                                        </h3>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">
                                            {venture.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <Star className="size-3 fill-warning text-warning" />
                                        <span className="text-[10px] font-semibold text-card-foreground">
                                            {venture.rating}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>
                <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background border rounded-full shadow p-1 flex items-center justify-center"
                    onClick={() => {
                        const container = document.getElementById('ventures-scroll');
                        if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
                    }}
                    aria-label="Scroll right"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
            </div>
        </section>
    )
}