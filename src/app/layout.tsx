"use client"

import "@/app/globals.css"
import { Geist } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider defaultTheme="light" storageKey="next-ui-theme">
        <html lang="en">
          <body className={cn("min-h-screen bg-background font-geist antialiased", geist.className)}>
            {children}
          </body>
        </html>
      </ThemeProvider>
  )
}
