import type React from "react"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

import { CurrencyProvider } from "@/contexts/CurrencyContext"

import "./globals.css"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <CurrencyProvider>
            <div className="flex h-screen overflow-hidden">
              <MainNav />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
            <Toaster />
          </CurrencyProvider>
      </body>
    </html>
  )
}

