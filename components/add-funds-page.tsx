"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const banks = [
  { name: "National Bank of Malawi", accountNumber: "1234567890" },
  { name: "First Capital Bank", accountNumber: "2345678901" },
  { name: "FDH Bank", accountNumber: "3456789012" },
  { name: "Standard Bank", accountNumber: "4567890123" },
]

const mobileMoney = [
  { name: "TNM Mpamba", agentCode: "5678" },
  { name: "Airtel Money", agentCode: "6789" },
]

export function AddFundsPage() {
  const [method, setMethod] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the fund addition
    console.log(`Adding funds via ${method}: ${selectedOption}`)
    router.push("/wallet/success")
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Funds to Wallet</h1>
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="method">Select Method</Label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger id="method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="mobile">Mobile Money</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {method === "bank" && (
              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank</Label>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger id="bank">
                    <SelectValue placeholder="Select bank" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank) => (
                      <SelectItem key={bank.name} value={bank.name}>
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedOption && (
                  <div className="mt-4 p-4 bg-secondary rounded-md">
                    <p className="font-medium">Account Number:</p>
                    <p>{banks.find((bank) => bank.name === selectedOption)?.accountNumber}</p>
                  </div>
                )}
              </div>
            )}

            {method === "mobile" && (
              <div className="space-y-2">
                <Label htmlFor="mobile">Select Mobile Money Provider</Label>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger id="mobile">
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {mobileMoney.map((provider) => (
                      <SelectItem key={provider.name} value={provider.name}>
                        {provider.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedOption && (
                  <div className="mt-4 p-4 bg-secondary rounded-md">
                    <p className="font-medium">Agent Code:</p>
                    <p>{mobileMoney.find((provider) => provider.name === selectedOption)?.agentCode}</p>
                  </div>
                )}
              </div>
            )}

            <Button type="submit" className="w-full">
              Confirm
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

