import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessPageProps {
  title: string
  message: string
  backLink: string
  backLinkText: string
}

export function SuccessPage({ title, message, backLink, backLinkText }: SuccessPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-6">{message}</p>
      <Button asChild>
        <Link href={backLink}>{backLinkText}</Link>
      </Button>
    </div>
  )
}

