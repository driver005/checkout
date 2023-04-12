# FiberSwaggerExampleApi.BalanceBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **[String]** | Funds that are available to be transferred or paid out, whether automatically by Stripe or explicitly via the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). The available balance for each currency and payment type can be found in the &#x60;source_types&#x60; property. | [optional] 
**connectReserved** | **[String]** | Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the &#x60;source_types&#x60; property. | [optional] 
**createdAt** | **String** |  | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**id** | **String** |  | [optional] 
**instantAvailable** | **[String]** | Funds that can be paid out using Instant Payouts. | [optional] 
**issuing** | **String** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**object** | **String** |  | [optional] 
**pending** | **[String]** | Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the &#x60;source_types&#x60; property. | [optional] 
**updatedAt** | **String** |  | [optional] 


