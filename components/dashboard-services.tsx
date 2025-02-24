"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { ScanLine, Send, Download, Wallet } from "lucide-react"

const services = [
  {
    icon: ScanLine,
    name: "Scan & Pay",
    route: "/scan",
    color: "text-blue-500",
  },
  {
    icon: Send,
    name: "Send Money",
    route: "/send",
    color: "text-green-500",
  },
  {
    icon: Download,
    name: "Receive Money",
    route: "/receive",
    color: "text-purple-500",
  },
  {
    icon: Wallet,
    name: "Go to Wallet",
    route: "/wallet",
    color: "text-orange-500",
  },
]

export function DashboardServices() {
  const router = useRouter()

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Services</h2>
      <div className="grid grid-cols-4 gap-3">
        {services.map((service) => (
          <Card
            key={service.name}
            className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors cursor-pointer p-4 rounded-2xl flex flex-col items-center gap-2"
            onClick={() => router.push(service.route)}
          >
            <service.icon className={`w-6 h-6 ${service.color}`} />
            <span className="text-xs text-center font-medium">{service.name}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}

