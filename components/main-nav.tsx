"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Home, QrCode, Send, Wallet, CreditCard, Receipt, PhoneCall, Settings, LogOut, Menu } from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: QrCode, label: "Scan & Pay", path: "/scan" },
  { icon: Send, label: "Send Money", path: "/send" },
  { icon: Wallet, label: "Receive Money", path: "/receive" },
  { icon: CreditCard, label: "Cards", path: "/cards" },
  { icon: Receipt, label: "Loans", path: "/loans" },
  { icon: PhoneCall, label: "Airtime", path: "/airtime" },
  { icon: Settings, label: "Settings", path: "/settings" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="hidden md:flex flex-col w-64 h-screen bg-background border-r">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">TPay</span>
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.path ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/50",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </ScrollArea>
        <div className="p-6">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </nav>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                pathname === item.path ? "text-primary" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <ScrollArea className="h-[calc(100vh-8rem)]">
                <div className="space-y-4 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        pathname === item.path ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/50",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}

