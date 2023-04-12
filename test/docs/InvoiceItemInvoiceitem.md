# FiberSwaggerExampleApi.InvoiceItemInvoiceitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount (in the &#x60;currency&#x60; specified) of the invoice item. This should always be equal to &#x60;unit_amount * quantity&#x60;. | [optional] 
**createdAt** | **String** |  | [optional] 
**currency** | **String** | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). | [optional] 
**customer** | **String** |  | [optional] 
**date** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**description** | **String** | An arbitrary string attached to the object. Often useful for displaying to users. | [optional] 
**discountable** | **Boolean** | If true, discounts will apply to this invoice item. Always false for prorations. | [optional] 
**discounts** | **[String]** | The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use &#x60;expand[]&#x3D;discounts&#x60; to expand each discount. | [optional] 
**id** | **String** |  | [optional] 
**invoice** | **String** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**object** | **String** |  | [optional] 
**periodEnd** | **Number** | Unique identifier for the object. | [optional] 
**periodStart** | **Number** |  | [optional] 
**price** | **String** |  | [optional] 
**proration** | **Boolean** | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. | [optional] 
**quantity** | **Number** | Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for. | [optional] 
**subscription** | **String** |  | [optional] 
**subscriptionItem** | **String** |  | [optional] 
**taxRates** | **String** | The tax rates which apply to the invoice item. When set, the &#x60;default_tax_rates&#x60; on the invoice do not apply to this invoice item. | [optional] 
**unitAmount** | **Number** | Unit amount (in the &#x60;currency&#x60; specified) of the invoice item. | [optional] 
**unitAmountDecimal** | **Number** | Same as &#x60;unit_amount&#x60;, but contains a decimal value with at most 12 decimal places. | [optional] 
**updatedAt** | **String** |  | [optional] 


