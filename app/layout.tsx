import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AppWrapper } from "@/components/app-wrapper"
import "./globals.css"


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Forum ENIT Entreprise 2025",
  description: "Le rendez-vous annuel qui connecte les entreprises et les talents de demain - 19-20 Novembre 2025",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${montserrat.variable}`}>
        <AppWrapper>
          {children}
        </AppWrapper>
        <Analytics />
      </body>
    </html>
  )
}
