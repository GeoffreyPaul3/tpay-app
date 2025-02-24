"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Copy } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"

export function ReceiveMoneyPage() {
  const [amount, setAmount] = useState("")
  const walletId = "TPay-1234-5678"
  useCurrency()
  const router = useRouter()

  const handleGenerateQR = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would generate a QR code
    console.log(`Generating QR code for ${amount}`)
    router.push("/receive/success")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletId)
    // In a real app, you'd show a toast notification here
    console.log("Wallet ID copied to clipboard")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Receive Money</h1>
      <Card>
        <CardHeader>
          <CardTitle>Generate QR Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleGenerateQR} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (optional)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              <QrCode className="mr-2 h-4 w-4" /> Generate QR Code
            </Button>
          </form>
          <div className="flex items-center justify-between p-2 bg-secondary rounded">
            <span className="text-sm font-medium">{walletId}</span>
            <Button variant="ghost" size="sm" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

