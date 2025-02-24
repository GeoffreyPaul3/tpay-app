import { SuccessPage } from "@/components/success-page"

export default function ScanPaySuccess() {
  return (
    <SuccessPage
      title="Transaction Successful"
      message="Your scan and pay transaction has been completed successfully."
      backLink="/"
      backLinkText="Back to Dashboard"
    />
  )
}

