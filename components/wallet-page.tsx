"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, MinusCircle } from "lucide-react"
import { WalletCard } from "./wallet-card"


export function WalletPage() {
  const [balance] = useState(575200)
  const [amount, setAmount] = useState("")
  const router = useRouter()

  const handleAddFunds = () => {
    router.push("/wallet/add-funds")
  }

  const handleWithdraw = () => {
    router.push("/wallet/withdraw")
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>
      <WalletCard balance={balance} />
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={handleAddFunds}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Funds
              </Button>
              <Button variant="outline" onClick={handleWithdraw}>
                <MinusCircle className="mr-2 h-4 w-4" /> Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

