"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrency } from "@/contexts/CurrencyContext"

interface CardManagementPageProps {
  cardId: number
}

export function CardManagementPage({ cardId }: CardManagementPageProps) {
  const [amount, setAmount] = useState("")
  useCurrency()
  const router = useRouter()

  const handleFundCard = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would call an API to fund the card
    console.log(`Funding card ${cardId} with ${amount}`)
    router.push("/cards/success")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Virtual Card</h1>
      <Card>
        <CardHeader>
          <CardTitle>Fund Card</CardTitle>
          <CardDescription>Add funds to your virtual card</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFundCard} className="space-y-4">
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
              Fund Card
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

