# FiberSwaggerExampleApi.SubscriptionApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SubscriptionsGet**](SubscriptionApi.md#v1SubscriptionsGet) | **GET** /v1/subscriptions | get all existing Subscriptions
[**v1SubscriptionsIdDelete**](SubscriptionApi.md#v1SubscriptionsIdDelete) | **DELETE** /v1/subscriptions/{id} | delete Subscription by given ID
[**v1SubscriptionsIdGet**](SubscriptionApi.md#v1SubscriptionsIdGet) | **GET** /v1/subscriptions/{id} | get Subscription by given ID or 404 error.
[**v1SubscriptionsIdPost**](SubscriptionApi.md#v1SubscriptionsIdPost) | **POST** /v1/subscriptions/{id} | update Subscription
[**v1SubscriptionsPost**](SubscriptionApi.md#v1SubscriptionsPost) | **POST** /v1/subscriptions | create a new Subscription



## v1SubscriptionsGet

> [SubscriptionSubscription] v1SubscriptionsGet()

get all existing Subscriptions

Get all existing Subscriptions.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionApi();
apiInstance.v1SubscriptionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SubscriptionSubscription]**](SubscriptionSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionsIdDelete

> String v1SubscriptionsIdDelete(id)

delete Subscription by given ID

Delete Subscription by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionApi();
let id = "id_example"; // String | Subscription ID
apiInstance.v1SubscriptionsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionsIdGet

> SubscriptionSubscription v1SubscriptionsIdGet(id)

get Subscription by given ID or 404 error.

Get Subscription by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionApi();
let id = "id_example"; // String | Subscription ID
apiInstance.v1SubscriptionsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 

### Return type

[**SubscriptionSubscription**](SubscriptionSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionsIdPost

> SubscriptionSubscription v1SubscriptionsIdPost(id)

update Subscription

Update Subscription.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionApi();
let id = "id_example"; // String | Subscription ID
apiInstance.v1SubscriptionsIdPost(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 

### Return type

[**SubscriptionSubscription**](SubscriptionSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionsPost

> SubscriptionSubscription v1SubscriptionsPost()

create a new Subscription

Create a new Subscription.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionApi();
apiInstance.v1SubscriptionsPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SubscriptionSubscription**](SubscriptionSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

