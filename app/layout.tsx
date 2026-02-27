import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketHub",
  description: "Directorio de emprendimientos",
  generator: 'platsmo.com',
  icons: {
     icon: [
      {
        url: '/images/SVG/Recurso 1.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/SVG/Recurso 1.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/SVG/Recurso 1.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/SVG/Recurso 1.svg.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <footer className="container flex mx-auto items-center justify-center gap-1.5 text-muted-foreground mb-4">
        <span className="text-xs">Developed by</span>
        <span className="text-xs font-semibold text-foreground">Platsmo</span>
      </footer>
      </body>
    </html>
  );
}
