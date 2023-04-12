# FiberSwaggerExampleApi.DisputeDispute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed). | [optional] 
**balanceTransactions** | **[String]** | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. | [optional] 
**charge** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**currency** | **String** | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**evidence** | **String** |  | [optional] 
**evidenceDetails** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**isChargeRefundable** | **Boolean** | If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute. | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**object** | **String** |  | [optional] 
**paymentIntent** | **String** |  | [optional] 
**reason** | [**DisputeReason**](DisputeReason.md) | Reason given by cardholder for dispute. Possible values are &#x60;bank_cannot_process&#x60;, &#x60;check_returned&#x60;, &#x60;credit_not_processed&#x60;, &#x60;customer_initiated&#x60;, &#x60;debit_not_authorized&#x60;, &#x60;duplicate&#x60;, &#x60;fraudulent&#x60;, &#x60;general&#x60;, &#x60;incorrect_account_details&#x60;, &#x60;insufficient_funds&#x60;, &#x60;product_not_received&#x60;, &#x60;product_unacceptable&#x60;, &#x60;subscription_canceled&#x60;, or &#x60;unrecognized&#x60;. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories). | [optional] 
**status** | [**DisputeStatus**](DisputeStatus.md) | Current status of dispute. Possible values are &#x60;warning_needs_response&#x60;, &#x60;warning_under_review&#x60;, &#x60;warning_closed&#x60;, &#x60;needs_response&#x60;, &#x60;under_review&#x60;, &#x60;charge_refunded&#x60;, &#x60;won&#x60;, or &#x60;lost&#x60;. | [optional] 
**updatedAt** | **String** |  | [optional] 


