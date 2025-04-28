import "@/app/globals.css"
import { Geist } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-provider"

const geist = Geist({
  subsets: ["latin"],
})

export const metadata = {
  title: "Vitor Antunes - Portfolio",
  description: "A developer focused on innovation and user-centric solutions",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2b7fff",
  appleMobileWebAppCapable: "yes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-geist antialiased", geist.className)}>
        <ThemeProvider defaultTheme="light" storageKey="next-ui-theme">
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}