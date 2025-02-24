"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Plus } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"

interface VirtualCard {
  id: number
  last4: string
  balance: number
  currency: string
}

const dummyCards: VirtualCard[] = [
  { id: 1, last4: "1234", balance: 1000, currency: "USD" },
  { id: 2, last4: "5678", balance: 500, currency: "USD" },
]

export function CardsPage() {
  const [cards, setCards] = useState<VirtualCard[]>(dummyCards)
  const { formatAmount } = useCurrency()
  const router = useRouter()

  const addNewCard = () => {
    const newCard: VirtualCard = {
      id: cards.length + 1,
      last4: Math.floor(1000 + Math.random() * 9000).toString(),
      balance: 0,
      currency: "USD",
    }
    setCards([...cards, newCard])
  }


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Virtual Cards</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle>Virtual Card ending in {card.last4}</CardTitle>
              <CardDescription>Balance: {formatAmount(card.balance)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <CreditCard className="h-8 w-8 text-primary" />
                <Button variant="outline" onClick={() => router.push(`/cards/${card.id}`)}>
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card
          className="flex items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors"
          onClick={addNewCard}
        >
          <CardContent>
            <div className="flex flex-col items-center">
              <Plus className="h-8 w-8 mb-2" />
              <p>Add New Virtual Card</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

