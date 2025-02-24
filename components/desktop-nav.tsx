"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, QrCode, Send, Wallet, CreditCard, Receipt, Settings, Menu } from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: QrCode, label: "Scan & Pay", path: "/scan" },
  { icon: Send, label: "Send Money", path: "/send" },
  { icon: Wallet, label: "Receive Money", path: "/receive" },
  { icon: CreditCard, label: "Cards", path: "/cards" },
  { icon: Receipt, label: "Loans", path: "/loans" },
  { icon: Settings, label: "Settings", path: "/settings" },
]

export function DesktopNav({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn("pb-12 w-64 border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">TPay</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.path}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {!isCollapsed && item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

