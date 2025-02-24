import { SuccessPage } from "@/components/success-page"

export default function CardOperationSuccess() {
  return (
    <SuccessPage
      title="Card Operation Successful"
      message="Your virtual card has been successfully updated."
      backLink="/cards"
      backLinkText="Back to Cards"
    />
  )
}

