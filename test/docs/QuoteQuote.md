# FiberSwaggerExampleApi.QuoteQuote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountSubtotal** | **Number** | Total before any discounts or taxes are applied. | [optional] 
**amountTotal** | **Number** | Total after discounts and taxes are applied. | [optional] 
**automaticTax** | **Boolean** |  | [optional] 
**collectionMethod** | **String** | Either &#x60;charge_automatically&#x60;, or &#x60;send_invoice&#x60;. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as &#x60;active&#x60;. Defaults to &#x60;charge_automatically&#x60;. | [optional] 
**computed** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**currency** | **String** | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). | [optional] 
**customer** | **String** |  | [optional] 
**defaultTaxRates** | **[String]** |  | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**description** | **String** | A description that will be displayed on the quote PDF. | [optional] 
**discounts** | **[String]** |  | [optional] 
**expiresAt** | **Number** | The date on which the quote will be canceled if in &#x60;open&#x60; or &#x60;draft&#x60; status. Measured in seconds since the Unix epoch. | [optional] 
**footer** | **String** | A footer that will be displayed on the quote PDF. | [optional] 
**header** | **String** | A header that will be displayed on the quote PDF. | [optional] 
**id** | **String** |  | [optional] 
**invoice** | **String** |  | [optional] 
**invoiceSettings** | **String** | Unique identifier for the object. | [optional] 
**lineItems** | **[String]** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**number** | **String** | A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize). | [optional] 
**object** | **String** |  | [optional] 
**status** | **String** | The status of the quote. | [optional] 
**statusTransitions** | **String** |  | [optional] 
**subscription** | **String** |  | [optional] 
**subscriptionData** | **String** |  | [optional] 
**subscriptionSchedule** | **String** |  | [optional] 
**totalDetails** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


