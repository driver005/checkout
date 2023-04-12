# FiberSwaggerExampleApi.PayoutApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PayoutsGet**](PayoutApi.md#v1PayoutsGet) | **GET** /v1/payouts | get all existing Payouts
[**v1PayoutsIdCancelePost**](PayoutApi.md#v1PayoutsIdCancelePost) | **POST** /v1/payouts/{id}/cancele | cancel Payout
[**v1PayoutsIdDelete**](PayoutApi.md#v1PayoutsIdDelete) | **DELETE** /v1/payouts/{id} | delete Payout by given ID
[**v1PayoutsIdGet**](PayoutApi.md#v1PayoutsIdGet) | **GET** /v1/payouts/{id} | get Payout by given ID or 404 error.
[**v1PayoutsIdPost**](PayoutApi.md#v1PayoutsIdPost) | **POST** /v1/payouts/{id} | update Payout
[**v1PayoutsIdReversePost**](PayoutApi.md#v1PayoutsIdReversePost) | **POST** /v1/payouts/{id}/reverse | reverse Payout
[**v1PayoutsPost**](PayoutApi.md#v1PayoutsPost) | **POST** /v1/payouts | create a new Payout



## v1PayoutsGet

> [PayoutPayout] v1PayoutsGet()

get all existing Payouts

Get all existing Payouts.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
apiInstance.v1PayoutsGet((error, data, response) => {
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

[**[PayoutPayout]**](PayoutPayout.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PayoutsIdCancelePost

> PayoutPayout v1PayoutsIdCancelePost(id)

cancel Payout

Cancel Payout.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
let id = "id_example"; // String | Payout ID
apiInstance.v1PayoutsIdCancelePost(id, (error, data, response) => {
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
 **id** | **String**| Payout ID | 

### Return type

[**PayoutPayout**](PayoutPayout.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PayoutsIdDelete

> String v1PayoutsIdDelete(id)

delete Payout by given ID

Delete Payout by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
let id = "id_example"; // String | Payout ID
apiInstance.v1PayoutsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Payout ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PayoutsIdGet

> PayoutPayout v1PayoutsIdGet(id)

get Payout by given ID or 404 error.

Get Payout by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
let id = "id_example"; // String | Payout ID
apiInstance.v1PayoutsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Payout ID | 

### Return type

[**PayoutPayout**](PayoutPayout.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PayoutsIdPost

> PayoutPayout v1PayoutsIdPost(id)

update Payout

Update Payout.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
let id = "id_example"; // String | Payout ID
apiInstance.v1PayoutsIdPost(id, (error, data, response) => {
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
 **id** | **String**| Payout ID | 

### Return type

[**PayoutPayout**](PayoutPayout.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PayoutsIdReversePost

> PayoutPayout v1PayoutsIdReversePost(id)

reverse Payout

Reverse Payout.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
let id = "id_example"; // String | Payout ID
apiInstance.v1PayoutsIdReversePost(id, (error, data, response) => {
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
 **id** | **String**| Payout ID | 

### Return type

[**PayoutPayout**](PayoutPayout.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PayoutsPost

> PayoutPayout v1PayoutsPost()

create a new Payout

Create a new Payout.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PayoutApi();
apiInstance.v1PayoutsPost((error, data, response) => {
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

[**PayoutPayout**](PayoutPayout.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

