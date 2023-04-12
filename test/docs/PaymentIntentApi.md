# FiberSwaggerExampleApi.PaymentIntentApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PaymentIntentsGet**](PaymentIntentApi.md#v1PaymentIntentsGet) | **GET** /v1/payment_intents | get all existing PaymentIntents
[**v1PaymentIntentsIdDelete**](PaymentIntentApi.md#v1PaymentIntentsIdDelete) | **DELETE** /v1/payment_intents/{id} | delete PaymentIntent by given ID
[**v1PaymentIntentsIdGet**](PaymentIntentApi.md#v1PaymentIntentsIdGet) | **GET** /v1/payment_intents/{id} | get PaymentIntent by given ID or 404 error.
[**v1PaymentIntentsIdPost**](PaymentIntentApi.md#v1PaymentIntentsIdPost) | **POST** /v1/payment_intents/{id} | update PaymentIntent
[**v1PaymentIntentsPost**](PaymentIntentApi.md#v1PaymentIntentsPost) | **POST** /v1/payment_intents | create a new PaymentIntent



## v1PaymentIntentsGet

> [IntentPaymentIntent] v1PaymentIntentsGet()

get all existing PaymentIntents

Get all existing PaymentIntents.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentIntentApi();
apiInstance.v1PaymentIntentsGet((error, data, response) => {
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

[**[IntentPaymentIntent]**](IntentPaymentIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PaymentIntentsIdDelete

> String v1PaymentIntentsIdDelete(id)

delete PaymentIntent by given ID

Delete PaymentIntent by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentIntentApi();
let id = "id_example"; // String | PaymentIntent ID
apiInstance.v1PaymentIntentsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| PaymentIntent ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentIntentsIdGet

> IntentPaymentIntent v1PaymentIntentsIdGet(id)

get PaymentIntent by given ID or 404 error.

Get PaymentIntent by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentIntentApi();
let id = "id_example"; // String | PaymentIntent ID
apiInstance.v1PaymentIntentsIdGet(id, (error, data, response) => {
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
 **id** | **String**| PaymentIntent ID | 

### Return type

[**IntentPaymentIntent**](IntentPaymentIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PaymentIntentsIdPost

> IntentPaymentIntent v1PaymentIntentsIdPost(id)

update PaymentIntent

Update PaymentIntent.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentIntentApi();
let id = "id_example"; // String | PaymentIntent ID
apiInstance.v1PaymentIntentsIdPost(id, (error, data, response) => {
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
 **id** | **String**| PaymentIntent ID | 

### Return type

[**IntentPaymentIntent**](IntentPaymentIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentIntentsPost

> IntentPaymentIntent v1PaymentIntentsPost()

create a new PaymentIntent

Create a new PaymentIntent.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentIntentApi();
apiInstance.v1PaymentIntentsPost((error, data, response) => {
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

[**IntentPaymentIntent**](IntentPaymentIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

