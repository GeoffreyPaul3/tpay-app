import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"


export function DashboardHeader() {
  const { toast } = useToast()

  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12 rounded-xl border-2 border-primary/10">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>NK</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-muted-foreground text-sm">Good evening,</div>
          <div className="text-lg font-semibold">Neha Kapoor</div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => {
          toast({
            title: "No new notifications",
            description: "We'll notify you when something arrives",
          })
        }}
      >
        <Bell className="w-6 h-6" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
      </Button>
    </div>
  )
}

