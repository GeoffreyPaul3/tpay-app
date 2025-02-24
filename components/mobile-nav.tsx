"use client"

import type React from "react"

import { Home, QrCode, Send, Wallet, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  {
    icon: Home,
    label: "Home",
    path: "/",
  },
  {
    icon: QrCode,
    label: "Scan",
    path: "/scan",
  },
  {
    icon: Send,
    label: "Send",
    path: "/send",
  },
  {
    icon: Wallet,
    label: "Wallet",
    path: "/wallet",
  },
]

export function MobileNav({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50", className)}>
      <div className="container max-w-md mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={pathname === item.path ? "default" : "ghost"}
              size="icon"
              className="flex flex-col gap-1 h-16 w-16"
              onClick={() => router.push(item.path)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col gap-1 h-16 w-16"
            onClick={() => router.push("/settings")}
          >
            <Menu className="h-5 w-5" />
            <span className="text-xs">Menu</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

