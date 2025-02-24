"use client"

import { useState } from "react"
import { DashboardHeader } from "./dashboard-header"
import { WalletCard } from "./wallet-card"
import { QuickActions } from "./quick-actions"
import { DashboardServices } from "./dashboard-services"
import { TransactionHistory } from "./transaction-history"


export function DashboardPage() {
  const [balance] = useState(575200)

  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6">
          <WalletCard balance={balance} />
          <QuickActions />
        </div>
        <div className="lg:col-span-2">
          <DashboardServices />
          <TransactionHistory />
        </div>
      </div>
    </div>
  )
}

