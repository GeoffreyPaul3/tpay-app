import { SuccessPage } from "@/components/success-page"

export default function ReceiveMoneySuccess() {
  return (
    <SuccessPage
      title="QR Code Generated Successfully"
      message="Your QR code has been generated. Share it with the sender to receive money."
      backLink="/"
      backLinkText="Back to Dashboard"
    />
  )
}

