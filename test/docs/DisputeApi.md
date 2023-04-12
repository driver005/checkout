# FiberSwaggerExampleApi.DisputeApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DisputesGet**](DisputeApi.md#v1DisputesGet) | **GET** /v1/disputes | get all existing Disputes
[**v1DisputesIdClosePost**](DisputeApi.md#v1DisputesIdClosePost) | **POST** /v1/disputes/{id}/close | close Dispute
[**v1DisputesIdDelete**](DisputeApi.md#v1DisputesIdDelete) | **DELETE** /v1/disputes/{id} | delete Dispute by given ID
[**v1DisputesIdGet**](DisputeApi.md#v1DisputesIdGet) | **GET** /v1/disputes/{id} | get Dispute by given ID or 404 error.
[**v1DisputesIdPost**](DisputeApi.md#v1DisputesIdPost) | **POST** /v1/disputes/{id} | update Dispute
[**v1DisputesPost**](DisputeApi.md#v1DisputesPost) | **POST** /v1/disputes | create a new Dispute



## v1DisputesGet

> [DisputeDispute] v1DisputesGet()

get all existing Disputes

Get all existing Disputes.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DisputeApi();
apiInstance.v1DisputesGet((error, data, response) => {
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

[**[DisputeDispute]**](DisputeDispute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DisputesIdClosePost

> DisputeDispute v1DisputesIdClosePost(id)

close Dispute

Close Dispute.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DisputeApi();
let id = "id_example"; // String | Dispute ID
apiInstance.v1DisputesIdClosePost(id, (error, data, response) => {
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
 **id** | **String**| Dispute ID | 

### Return type

[**DisputeDispute**](DisputeDispute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DisputesIdDelete

> String v1DisputesIdDelete(id)

delete Dispute by given ID

Delete Dispute by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DisputeApi();
let id = "id_example"; // String | Dispute ID
apiInstance.v1DisputesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Dispute ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DisputesIdGet

> DisputeDispute v1DisputesIdGet(id)

get Dispute by given ID or 404 error.

Get Dispute by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DisputeApi();
let id = "id_example"; // String | Dispute ID
apiInstance.v1DisputesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Dispute ID | 

### Return type

[**DisputeDispute**](DisputeDispute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DisputesIdPost

> DisputeDispute v1DisputesIdPost(id)

update Dispute

Update Dispute.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DisputeApi();
let id = "id_example"; // String | Dispute ID
apiInstance.v1DisputesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Dispute ID | 

### Return type

[**DisputeDispute**](DisputeDispute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DisputesPost

> DisputeDispute v1DisputesPost()

create a new Dispute

Create a new Dispute.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DisputeApi();
apiInstance.v1DisputesPost((error, data, response) => {
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

[**DisputeDispute**](DisputeDispute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

