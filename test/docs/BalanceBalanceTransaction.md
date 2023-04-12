# FiberSwaggerExampleApi.BalanceBalanceTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Gross amount of the transaction, in %s. | [optional] 
**availableOn** | **Number** | The date the transaction&#39;s net funds will become available in the Stripe balance. | [optional] 
**createdAt** | **String** |  | [optional] 
**currency** | **String** | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**description** | **String** | An arbitrary string attached to the object. Often useful for displaying to users. | [optional] 
**exchangeRate** | **Number** | The exchange rate used, if applicable, for this transaction. Specifically, if money was converted from currency A to currency B, then the &#x60;amount&#x60; in currency A, times &#x60;exchange_rate&#x60;, would be the &#x60;amount&#x60; in currency B. For example, suppose you charged a customer 10.00 EUR. Then the PaymentIntent&#39;s &#x60;amount&#x60; would be &#x60;1000&#x60; and &#x60;currency&#x60; would be &#x60;eur&#x60;. Suppose this was converted into 12.34 USD in your Stripe account. Then the BalanceTransaction&#39;s &#x60;amount&#x60; would be &#x60;1234&#x60;, &#x60;currency&#x60; would be &#x60;usd&#x60;, and &#x60;exchange_rate&#x60; would be &#x60;1.234&#x60;. | [optional] 
**fee** | **Number** | Fees (in %s) paid for this transaction. | [optional] 
**feeDetails** | **[String]** | Detailed breakdown of fees (in %s) paid for this transaction. | [optional] 
**id** | **String** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**net** | **Number** | Net amount of the transaction, in %s. | [optional] 
**object** | **String** |  | [optional] 
**reportingCategory** | **String** | [Learn more](https://stripe.com/docs/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective. | [optional] 
**source** | **String** |  | [optional] 
**status** | [**BalanceStatus**](BalanceStatus.md) | If the transaction&#39;s net funds are available in the Stripe balance yet. Either &#x60;available&#x60; or &#x60;pending&#x60;. | [optional] 
**type** | [**BalanceType**](BalanceType.md) | Transaction type: &#x60;adjustment&#x60;, &#x60;advance&#x60;, &#x60;advance_funding&#x60;, &#x60;anticipation_repayment&#x60;, &#x60;application_fee&#x60;, &#x60;application_fee_refund&#x60;, &#x60;charge&#x60;, &#x60;connect_collection_transfer&#x60;, &#x60;contribution&#x60;, &#x60;issuing_authorization_hold&#x60;, &#x60;issuing_authorization_release&#x60;, &#x60;issuing_dispute&#x60;, &#x60;issuing_transaction&#x60;, &#x60;payment&#x60;, &#x60;payment_failure_refund&#x60;, &#x60;payment_refund&#x60;, &#x60;payout&#x60;, &#x60;payout_cancel&#x60;, &#x60;payout_failure&#x60;, &#x60;refund&#x60;, &#x60;refund_failure&#x60;, &#x60;reserve_transaction&#x60;, &#x60;reserved_funds&#x60;, &#x60;stripe_fee&#x60;, &#x60;stripe_fx_fee&#x60;, &#x60;tax_fee&#x60;, &#x60;topup&#x60;, &#x60;topup_reversal&#x60;, &#x60;transfer&#x60;, &#x60;transfer_cancel&#x60;, &#x60;transfer_failure&#x60;, or &#x60;transfer_refund&#x60;. [Learn more](https://stripe.com/docs/reports/balance-transaction-types) about balance transaction types and what they represent. If you are looking to classify transactions for accounting purposes, you might want to consider &#x60;reporting_category&#x60; instead. | [optional] 
**updatedAt** | **String** |  | [optional] 


