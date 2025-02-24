"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useCurrency } from "@/contexts/CurrencyContext"

export function LoansPage() {
  const [amount, setAmount] = useState(5000)
  const [duration, setDuration] = useState("12")
  const [calculatorAmount, setCalculatorAmount] = useState(5000)
  const [calculatorDuration, setCalculatorDuration] = useState(12)
  const { formatAmount } = useCurrency()
  const router = useRouter()

  const calculateMonthlyPayment = (principal: number, months: number, rate: number) => {
    const monthlyRate = rate / 12 / 100
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
  }

  const monthlyPayment = calculateMonthlyPayment(calculatorAmount, calculatorDuration, 10) // Assuming 10% annual interest rate

  const handleApplyLoan = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the loan application
    console.log(`Applying for loan: ${amount} for ${duration} months`)
    router.push("/loans/success")
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Loan Application</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Apply for a Loan</CardTitle>
            <CardDescription>Fill out the form to apply for a loan</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApplyLoan} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Loan Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Loan Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 months</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Apply for Loan
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Loan Calculator</CardTitle>
            <CardDescription>Estimate your monthly payments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Loan Amount: {formatAmount(calculatorAmount)}</Label>
              <Slider
                min={1000}
                max={50000}
                step={1000}
                value={[calculatorAmount]}
                onValueChange={(value) => setCalculatorAmount(value[0])}
              />
            </div>
            <div className="space-y-2">
              <Label>Loan Duration: {calculatorDuration} months</Label>
              <Slider
                min={3}
                max={60}
                step={3}
                value={[calculatorDuration]}
                onValueChange={(value) => setCalculatorDuration(value[0])}
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Estimated Monthly Payment:</p>
              <p className="text-2xl font-bold text-primary">{formatAmount(monthlyPayment)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

