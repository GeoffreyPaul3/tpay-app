import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Bell, CreditCard, Send, ScanLine, Download } from "lucide-react"
import Image from "next/image"

export default function BankingApp() {
  return (
    <div className="max-w-md mx-auto bg-[#0A0F1C] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 rounded-xl">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-24%20at%2010.30.58_11a64610.jpg-nKejf845D1Fh83IcLkZqEwxZegNzsN.jpeg"
              alt="User"
            />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-gray-400 text-sm">Good evening,</div>
            <div className="text-lg font-semibold">Neha Kapoor</div>
          </div>
        </div>
        <button className="relative">
          <Bell className="w-6 h-6" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        </button>
      </div>

      {/* Services */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-white text-blue-600 p-4 rounded-2xl flex flex-col items-center gap-2">
            <ScanLine className="w-6 h-6" />
            <span className="text-xs text-center">Scan & Pay</span>
          </Card>
          <Card className="bg-[#151B2E] p-4 rounded-2xl flex flex-col items-center gap-2">
            <Send className="w-6 h-6" />
            <span className="text-xs text-center">Send Money</span>
          </Card>
          <Card className="bg-[#151B2E] p-4 rounded-2xl flex flex-col items-center gap-2">
            <Download className="w-6 h-6" />
            <span className="text-xs text-center">Receive Money</span>
          </Card>
          <Card className="bg-[#151B2E] p-4 rounded-2xl flex flex-col items-center gap-2">
            <CreditCard className="w-6 h-6" />
            <span className="text-xs text-center">Go to Wallet</span>
          </Card>
        </div>
      </div>

      {/* Card */}
      <div className="mb-8">
        <Card className="bg-[#2563EB] p-6 rounded-3xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-gray-200 mb-1">Current Balance</div>
              <div className="text-3xl font-bold">₹5,75,200</div>
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
              <div className="w-8 h-8 bg-orange-400 rounded-full opacity-80"></div>
            </div>
          </div>
          <div className="text-lg tracking-wider mb-2">5282 3456 7890 1289</div>
          <div className="text-sm">09/25</div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Prime" width={24} height={24} />
              </div>
              <div>
                <div className="font-medium">Prime Membership</div>
                <div className="text-sm text-gray-400">15.April - 11:02</div>
              </div>
            </div>
            <div className="text-red-500">- ₹ 1000.00</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Nike" width={24} height={24} />
              </div>
              <div>
                <div className="font-medium">Nike Store</div>
                <div className="text-sm text-gray-400">12.April - 22:50</div>
              </div>
            </div>
            <div className="text-red-500">- ₹ 65.00</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
                W
              </div>
              <div>
                <div className="font-medium">Richa Saini</div>
                <div className="text-sm text-gray-400">11.April - 18:44</div>
              </div>
            </div>
            <div className="text-green-500">+ ₹ 450.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

