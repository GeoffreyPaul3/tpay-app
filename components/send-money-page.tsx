"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"

export function SendMoneyPage() {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  useCurrency()
  const router = useRouter()

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the money
    console.log(`Sending ${amount} to ${recipient}`)
    router.push("/send/success")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Send Money</h1>
      <Card>
        <CardHeader>
          <CardTitle>Transfer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSendMoney} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input
                id="recipient"
                placeholder="Enter recipient's name or ID"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Money
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

