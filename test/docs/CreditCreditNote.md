# FiberSwaggerExampleApi.CreditCreditNote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The integer amount in %s representing the total amount of the credit note, including tax. | [optional] 
**createdAt** | **String** |  | [optional] 
**currency** | **String** | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). | [optional] 
**customer** | **String** |  | [optional] 
**customerBalanceTransaction** | **String** |  | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**discountAmount** | **Number** | The integer amount in %s representing the total amount of discount that was credited. | [optional] 
**id** | **String** |  | [optional] 
**invoice** | **String** |  | [optional] 
**lines** | **[String]** | The aggregate amounts calculated per discount for all line items. | [optional] 
**livemode** | **Boolean** |  | [optional] 
**memo** | **String** | Customer-facing text that appears on the credit note PDF. | [optional] 
**metadata** | **Object** |  | [optional] 
**number** | **String** | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. | [optional] 
**object** | **String** |  | [optional] 
**outOfBandAmount** | **Number** | Amount that was credited outside of Stripe. | [optional] 
**pdf** | **String** | The link to download the PDF of the credit note. | [optional] 
**reason** | **String** | Reason for issuing this credit note, one of &#x60;duplicate&#x60;, &#x60;fraudulent&#x60;, &#x60;order_change&#x60;, or &#x60;product_unsatisfactory&#x60; | [optional] 
**refund** | **String** |  | [optional] 
**status** | **String** | Status of this credit note, one of &#x60;issued&#x60; or &#x60;void&#x60;. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding). | [optional] 
**subtotal** | **Number** | The integer amount in %s representing the amount of the credit note, excluding exclusive tax and invoice level discounts. | [optional] 
**subtotalExcludingTax** | **Number** | The integer amount in %s representing the amount of the credit note, excluding all tax and invoice level discounts. | [optional] 
**taxAmounts** | **[String]** | The aggregate amounts calculated per tax rate for all line items. | [optional] 
**total** | **Number** | The integer amount in %s representing the total amount of the credit note, including tax and all discount. | [optional] 
**totalExcludingTax** | **Number** | The integer amount in %s representing the total amount of the credit note, excluding tax, but including discounts. | [optional] 
**type** | [**CreditType**](CreditType.md) | Type of this credit note, one of &#x60;pre_payment&#x60; or &#x60;post_payment&#x60;. A &#x60;pre_payment&#x60; credit note means it was issued when the invoice was open. A &#x60;post_payment&#x60; credit note means it was issued when the invoice was paid. | [optional] 
**updatedAt** | **String** |  | [optional] 
**voidedAt** | **String** | The time that the credit note was voided. | [optional] 


