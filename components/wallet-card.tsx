"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Eye, EyeOff, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useCurrency, currencies } from "@/contexts/CurrencyContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface WalletCardProps {
  balance: number
}

export function WalletCard({ balance }: WalletCardProps) {
  const [showBalance, setShowBalance] = useState(true)
  const { currency, setCurrency, formatAmount } = useCurrency()

  return (
    <Card className="bg-gradient-to-br from-primary/50 to-primary p-6 rounded-3xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-primary-foreground/80 mb-2 flex items-center gap-2">
            Current Balance
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <motion.div
            key={showBalance ? "balance" : "hidden"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground"
          >
            {showBalance ? formatAmount(balance) : "••••••"}
          </motion.div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {currency.code} <span className="ml-2">▼</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {currencies.map((curr) => (
              <DropdownMenuItem key={curr.code} onSelect={() => setCurrency(curr)}>
                {curr.name} ({curr.code})
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-xl tracking-wider mb-2 text-primary-foreground/90">**** **** **** 1289</div>
          <div className="text-sm md:text-base text-primary-foreground/70">Valid Thru 09/25</div>
        </div>
        <CreditCard className="h-10 w-10 text-primary-foreground/70" />
      </div>
    </Card>
  )
}

