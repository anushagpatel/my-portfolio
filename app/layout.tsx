import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Anusha G.P. - Software Engineer Portfolio",
  description: "Personal portfolio of Anusha G.P., MS Computer Science student and software engineer",
  keywords: "portfolio, computer science, software engineer, developer, student, full-stack",
  authors: [{ name: "Anusha G.P." }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  )
}
