"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AirtimePage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [provider, setProvider] = useState("")
  const router = useRouter()

  const handleBuyAirtime = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the airtime purchase
    console.log(`Buying ${amount} airtime for ${phoneNumber} on ${provider}`)
    router.push("/airtime/success")
  }

  return (
    <div className="container max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Buy Airtime</h1>
      <Card>
        <CardHeader>
          <CardTitle>Purchase Airtime</CardTitle>
          <CardDescription>Top up your phone or others</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBuyAirtime} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="provider">Select Provider</Label>
              <Select value={provider} onValueChange={setProvider}>
                <SelectTrigger>
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tnm">TNM</SelectItem>
                  <SelectItem value="airtel">Airtel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              />
            </div>
            <Button type="submit" className="w-full">
              Buy Airtime
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

