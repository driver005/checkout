# FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canceledAt** | **Number** | Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch. | [optional] 
**completedAt** | **Number** | Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch. | [optional] 
**createdAt** | **String** |  | [optional] 
**customer** | **String** |  | [optional] 
**defaultSettings** | **String** |  | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**endBehavior** | **String** | Behavior of the subscription schedule and underlying subscription when it ends. Possible values are &#x60;release&#x60; or &#x60;cancel&#x60; with the default being &#x60;release&#x60;. &#x60;release&#x60; will end the subscription schedule and keep the underlying subscription running.&#x60;cancel&#x60; will end the subscription schedule and cancel the underlying subscription. | [optional] 
**endDate** | **Number** | The end of this phase of the subscription schedule. | [optional] 
**id** | **String** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**object** | **String** |  | [optional] 
**phases** | **String** | Configuration for the subscription schedule&#39;s phases. | [optional] 
**releasedAt** | **String** | Time at which the subscription schedule was released. Measured in seconds since the Unix epoch. | [optional] 
**releasedSubscription** | **String** | ID of the subscription once managed by the subscription schedule (if it is released). | [optional] 
**startDate** | **Number** | The start of this phase of the subscription schedule. | [optional] 
**status** | **String** | The present status of the subscription schedule. Possible values are &#x60;not_started&#x60;, &#x60;active&#x60;, &#x60;completed&#x60;, &#x60;released&#x60;, and &#x60;canceled&#x60;. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules). | [optional] 
**updatedAt** | **String** |  | [optional] 


