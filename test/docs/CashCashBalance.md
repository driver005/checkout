# FiberSwaggerExampleApi.CashCashBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **Object** | A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). | [optional] 
**createdAt** | **String** |  | [optional] 
**customer** | **String** | The ID of the customer whose cash balance this object represents. | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**id** | **String** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**object** | **String** |  | [optional] 
**settingReconciliationMode** | **String** | The configuration for how funds that land in the customer cash balance are reconciled. | [optional] 
**settingUsingMerchantDefault** | **Boolean** | A flag to indicate if reconciliation mode returned is the user&#39;s default or is specific to this customer cash balance | [optional] 
**updatedAt** | **String** |  | [optional] 


