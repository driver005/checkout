# FiberSwaggerExampleApi.RefundApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RefundsGet**](RefundApi.md#v1RefundsGet) | **GET** /v1/refunds | get all existing Refunds
[**v1RefundsIdCancelePost**](RefundApi.md#v1RefundsIdCancelePost) | **POST** /v1/refunds/{id}/cancele | cancel Refund
[**v1RefundsIdDelete**](RefundApi.md#v1RefundsIdDelete) | **DELETE** /v1/refunds/{id} | delete Refund by given ID
[**v1RefundsIdGet**](RefundApi.md#v1RefundsIdGet) | **GET** /v1/refunds/{id} | get Refund by given ID or 404 error.
[**v1RefundsIdPost**](RefundApi.md#v1RefundsIdPost) | **POST** /v1/refunds/{id} | update Refund
[**v1RefundsPost**](RefundApi.md#v1RefundsPost) | **POST** /v1/refunds | create a new Refund



## v1RefundsGet

> [RefundRefund] v1RefundsGet()

get all existing Refunds

Get all existing Refunds.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.RefundApi();
apiInstance.v1RefundsGet((error, data, response) => {
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

[**[RefundRefund]**](RefundRefund.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RefundsIdCancelePost

> RefundRefund v1RefundsIdCancelePost(id)

cancel Refund

Cancel Refund.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.RefundApi();
let id = "id_example"; // String | Refund ID
apiInstance.v1RefundsIdCancelePost(id, (error, data, response) => {
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
 **id** | **String**| Refund ID | 

### Return type

[**RefundRefund**](RefundRefund.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1RefundsIdDelete

> String v1RefundsIdDelete(id)

delete Refund by given ID

Delete Refund by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.RefundApi();
let id = "id_example"; // String | Refund ID
apiInstance.v1RefundsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Refund ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1RefundsIdGet

> RefundRefund v1RefundsIdGet(id)

get Refund by given ID or 404 error.

Get Refund by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.RefundApi();
let id = "id_example"; // String | Refund ID
apiInstance.v1RefundsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Refund ID | 

### Return type

[**RefundRefund**](RefundRefund.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RefundsIdPost

> RefundRefund v1RefundsIdPost(id)

update Refund

Update Refund.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.RefundApi();
let id = "id_example"; // String | Refund ID
apiInstance.v1RefundsIdPost(id, (error, data, response) => {
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
 **id** | **String**| Refund ID | 

### Return type

[**RefundRefund**](RefundRefund.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1RefundsPost

> RefundRefund v1RefundsPost()

create a new Refund

Create a new Refund.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.RefundApi();
apiInstance.v1RefundsPost((error, data, response) => {
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

[**RefundRefund**](RefundRefund.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

