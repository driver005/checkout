# FiberSwaggerExampleApi.PlanPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the plan can be used for new purchases. | [optional] 
**aggregateUsage** | **String** | Specifies a usage aggregation strategy for plans of &#x60;usage_type&#x3D;metered&#x60;. Allowed values are &#x60;sum&#x60; for summing up all usage during a period, &#x60;last_during_period&#x60; for using the last usage record reported within a period, &#x60;last_ever&#x60; for using the last usage record ever (across period bounds) or &#x60;max&#x60; which uses the usage record with the maximum reported usage during a period. Defaults to &#x60;sum&#x60;. | [optional] 
**amount** | **Number** | The unit amount in %s to be charged, represented as a whole integer if possible. Only set if &#x60;billing_scheme&#x3D;per_unit&#x60;. | [optional] 
**amountDecimal** | **Number** | The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if &#x60;billing_scheme&#x3D;per_unit&#x60;. | [optional] 
**billingScheme** | **String** | Describes how to compute the price per period. Either &#x60;per_unit&#x60; or &#x60;tiered&#x60;. &#x60;per_unit&#x60; indicates that the fixed amount (specified in &#x60;amount&#x60;) will be charged per unit in &#x60;quantity&#x60; (for plans with &#x60;usage_type&#x3D;licensed&#x60;), or per unit of total usage (for plans with &#x60;usage_type&#x3D;metered&#x60;). &#x60;tiered&#x60; indicates that the unit pricing will be computed using a tiering strategy as defined using the &#x60;tiers&#x60; and &#x60;tiers_mode&#x60; attributes. | [optional] 
**createdAt** | **String** |  | [optional] 
**currency** | **String** | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**id** | **String** |  | [optional] 
**interval** | **String** | The frequency at which a subscription is billed. One of &#x60;day&#x60;, &#x60;week&#x60;, &#x60;month&#x60; or &#x60;year&#x60;. | [optional] 
**intervalCount** | **Number** | The number of intervals (specified in the &#x60;interval&#x60; attribute) between subscription billings. For example, &#x60;interval&#x3D;month&#x60; and &#x60;interval_count&#x3D;3&#x60; bills every 3 months. | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**nickname** | **String** | A brief description of the plan, hidden from customers. | [optional] 
**object** | **String** |  | [optional] 
**product** | **String** |  | [optional] 
**tiers** | **[String]** | Each element represents a pricing tier. This parameter requires &#x60;billing_scheme&#x60; to be set to &#x60;tiered&#x60;. See also the documentation for &#x60;billing_scheme&#x60;. | [optional] 
**tiersMode** | **String** | Defines if the tiering price should be &#x60;graduated&#x60; or &#x60;volume&#x60; based. In &#x60;volume&#x60;-based tiering, the maximum quantity within a period determines the per unit price. In &#x60;graduated&#x60; tiering, pricing can change as the quantity grows. | [optional] 
**transformUsage** | **String** |  | [optional] 
**trialPeriodDays** | **Number** | Default number of trial days when subscribing a customer to this plan using [&#x60;trial_from_plan&#x3D;true&#x60;](https://stripe.com/docs/api#create_subscription-trial_from_plan). | [optional] 
**updatedAt** | **String** |  | [optional] 
**usageType** | **String** | Configures how the quantity per period should be determined. Can be either &#x60;metered&#x60; or &#x60;licensed&#x60;. &#x60;licensed&#x60; automatically bills the &#x60;quantity&#x60; set when adding it to a subscription. &#x60;metered&#x60; aggregates the total usage based on usage records. Defaults to &#x60;licensed&#x60;. | [optional] 


