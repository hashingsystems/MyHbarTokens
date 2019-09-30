import * as React from "react"

export const HederaPayment = (props) => {
  if (props.activated) {
    return (
      <hedera-micropayment
        data-submissionnode='0.0.11'
        data-paymentserver='https://mps.hashingsystems.com'
        data-recipientlist='[{"to": "0.0.99", "tinybars": "0.01" }]'
        data-contentid='79'
        data-type='article'
        data-memo='1275,79'
        data-extensionid='ligpaondaabclfigagcifobaelemiena'
        data-redirect='{"nonPayingAccount": "/insufficient-amount/", "noAccount": "/account-not-paired/", "homePage": "/"}'
        data-time='1562735597695'
      >
      </hedera-micropayment>
    )
  } else {
    return null
  }
}