import { SuccessPage } from "@/components/success-page"

export default function SendMoneySuccess() {
  return (
    <SuccessPage
      title="Money Sent Successfully"
      message="Your money has been sent successfully. The recipient will receive the funds shortly."
      backLink="/"
      backLinkText="Back to Dashboard"
    />
  )
}

