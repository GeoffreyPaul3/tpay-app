"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useCurrency } from "@/contexts/CurrencyContext"

const transactions = [
  {
    id: 1,
    name: "Prime Membership",
    date: "15.April - 11:02",
    amount: -1000.0,
    icon: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Nike Store",
    date: "12.April - 22:50",
    amount: -65.0,
    icon: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Richa Saini",
    date: "11.April - 18:44",
    amount: 450.0,
    icon: null,
  },
  {
    id: 4,
    name: "Airtime Purchase",
    date: "10.April - 09:15",
    amount: -20.0,
    icon: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Salary Deposit",
    date: "01.April - 00:01",
    amount: 5000.0,
    icon: null,
  },
]

export function TransactionHistory() {
  const [expanded, setExpanded] = useState(false)
  const { formatAmount } = useCurrency()

  return (
    <Card className="mt-6 mb-20 md:mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show All"}
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          <div className="space-y-4">
            {transactions.slice(0, expanded ? undefined : 3).map((transaction) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {transaction.icon ? (
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Image
                        src={transaction.icon || "/placeholder.svg"}
                        alt={transaction.name}
                        width={24}
                        height={24}
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold">
                      {transaction.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
                <div className={transaction.amount < 0 ? "text-red-500" : "text-green-500"}>
                  {transaction.amount < 0 ? "- " : "+ "}
                  {formatAmount(Math.abs(transaction.amount))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

