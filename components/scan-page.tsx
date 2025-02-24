"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QrCode, Camera } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"

export function ScanPage() {
  const [amount, setAmount] = useState("")
  useCurrency()
  const router = useRouter()

  const handleScan = () => {
    // In a real app, this would open the camera to scan a QR code
    console.log("Scanning QR code")
    router.push("/scan/success")
  }

  const handleGenerateQR = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would generate a QR code
    console.log(`Generating QR code for ${amount}`)
    router.push("/scan/success")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Scan & Pay</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Scan QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="w-full" onClick={handleScan}>
              <Camera className="mr-2 h-4 w-4" /> Scan QR Code
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Generate Payment QR</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerateQR} className="space-y-4">
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                <QrCode className="mr-2 h-4 w-4" /> Generate Payment QR
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

