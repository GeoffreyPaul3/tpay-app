"use client"

import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { PhoneCall, Receipt, CreditCard, Send, Wallet } from "lucide-react"
import { useRouter } from "next/navigation"

const actions = [
  { icon: PhoneCall, label: "Buy Airtime", path: "/airtime" },
  { icon: Receipt, label: "Apply Loan", path: "/loans" },
  { icon: CreditCard, label: "Cards", path: "/cards" },
  { icon: Send, label: "Send Money", path: "/send" },
  { icon: Wallet, label: "Receive Money", path: "/receive" },
]

export function QuickActions() {
  useToast()
  const router = useRouter()

  const handleAction = (path: string) => {
    router.push(path)
  }

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            onClick={() => handleAction(action.path)}
          >
            <action.icon className="h-6 w-6 mb-2" />
            <span className="text-xs text-center font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </Card>
  )
}

