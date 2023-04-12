# FiberSwaggerExampleApi.BalanceApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1BalanceGet**](BalanceApi.md#v1BalanceGet) | **GET** /v1/balance | get Balance by given ID or 404 error.



## v1BalanceGet

> BalanceBalance v1BalanceGet(id)

get Balance by given ID or 404 error.

Get Balance by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.BalanceApi();
let id = "id_example"; // String | Balance ID
apiInstance.v1BalanceGet(id, (error, data, response) => {
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
 **id** | **String**| Balance ID | 

### Return type

[**BalanceBalance**](BalanceBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

