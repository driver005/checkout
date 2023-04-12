# FiberSwaggerExampleApi.CheckoutSessionApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CheckoutSessionsGet**](CheckoutSessionApi.md#v1CheckoutSessionsGet) | **GET** /v1/checkout/sessions | get all existing CheckoutSessions
[**v1CheckoutSessionsIdDelete**](CheckoutSessionApi.md#v1CheckoutSessionsIdDelete) | **DELETE** /v1/checkout/sessions/{id} | delete CheckoutSession by given ID
[**v1CheckoutSessionsIdExpirePost**](CheckoutSessionApi.md#v1CheckoutSessionsIdExpirePost) | **POST** /v1/checkout/sessions/{id}/expire | expire CheckoutSession
[**v1CheckoutSessionsIdGet**](CheckoutSessionApi.md#v1CheckoutSessionsIdGet) | **GET** /v1/checkout/sessions/{id} | get CheckoutSession by given ID or 404 error.
[**v1CheckoutSessionsIdPost**](CheckoutSessionApi.md#v1CheckoutSessionsIdPost) | **POST** /v1/checkout/sessions/{id} | update CheckoutSession
[**v1CheckoutSessionsPost**](CheckoutSessionApi.md#v1CheckoutSessionsPost) | **POST** /v1/checkout/sessions | create a new CheckoutSession



## v1CheckoutSessionsGet

> [CheckoutCheckoutSession] v1CheckoutSessionsGet()

get all existing CheckoutSessions

Get all existing CheckoutSessions.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CheckoutSessionApi();
apiInstance.v1CheckoutSessionsGet((error, data, response) => {
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

[**[CheckoutCheckoutSession]**](CheckoutCheckoutSession.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CheckoutSessionsIdDelete

> String v1CheckoutSessionsIdDelete(id)

delete CheckoutSession by given ID

Delete CheckoutSession by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CheckoutSessionApi();
let id = "id_example"; // String | CheckoutSession ID
apiInstance.v1CheckoutSessionsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| CheckoutSession ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CheckoutSessionsIdExpirePost

> CheckoutCheckoutSession v1CheckoutSessionsIdExpirePost(id)

expire CheckoutSession

Expire CheckoutSession.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CheckoutSessionApi();
let id = "id_example"; // String | CheckoutSession ID
apiInstance.v1CheckoutSessionsIdExpirePost(id, (error, data, response) => {
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
 **id** | **String**| CheckoutSession ID | 

### Return type

[**CheckoutCheckoutSession**](CheckoutCheckoutSession.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CheckoutSessionsIdGet

> CheckoutCheckoutSession v1CheckoutSessionsIdGet(id)

get CheckoutSession by given ID or 404 error.

Get CheckoutSession by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CheckoutSessionApi();
let id = "id_example"; // String | CheckoutSession ID
apiInstance.v1CheckoutSessionsIdGet(id, (error, data, response) => {
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
 **id** | **String**| CheckoutSession ID | 

### Return type

[**CheckoutCheckoutSession**](CheckoutCheckoutSession.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CheckoutSessionsIdPost

> CheckoutCheckoutSession v1CheckoutSessionsIdPost(id)

update CheckoutSession

Update CheckoutSession.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CheckoutSessionApi();
let id = "id_example"; // String | CheckoutSession ID
apiInstance.v1CheckoutSessionsIdPost(id, (error, data, response) => {
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
 **id** | **String**| CheckoutSession ID | 

### Return type

[**CheckoutCheckoutSession**](CheckoutCheckoutSession.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CheckoutSessionsPost

> CheckoutCheckoutSession v1CheckoutSessionsPost()

create a new CheckoutSession

Create a new CheckoutSession.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CheckoutSessionApi();
apiInstance.v1CheckoutSessionsPost((error, data, response) => {
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

[**CheckoutCheckoutSession**](CheckoutCheckoutSession.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

